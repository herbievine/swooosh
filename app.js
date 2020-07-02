require("dotenv").config();
let rateLimitExceeded = false;

const config = require("./app.config");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

const mongoose = require("mongoose");

// To start Redis Serve in Powershell run:
// C:\ProgramData\chocolatey\lib\redis-64\redis-server.exe
const redisClient = require("redis").createClient();

const limiter = require("express-limiter")(app, redisClient);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swooosh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (e) => console.log(e));
db.once("open", () => console.log("Connected to DB"));

limiter({
    path: "/create",
    method: "post",
    lookup: "connection.remoteAddress",
    skipHeaders: true,
    total: 200,
    expire: 1000 * 60 * 60,
    onRateLimited: (req, res, next) => {
        res.status(429).json({
            error: {
                path: "other",
                type: "rate",
            },
        });
    },
});

app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(cors());

// Entry Point
app.use("/", express.static(config.path));

// Routes
const routes = require("./routes");
app.use("/", routes);

// No endpoints here. Redirect to Vue app
app.get("/*", (req, res) => {
    res.redirect("/");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));