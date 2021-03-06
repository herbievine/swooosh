const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require("../app.config");

const URL = mongoose.model("Url", config.URLSchema, "urls");

// Endpoint that users go to that gets them redirected
router.get("/:id", async (req, res) => {
    const { id } = await req.params;
    if (id) {
        URL.findById(id, async (err, doc) => {
            if (err || !doc) res.status(404).redirect("/404");
            else if (doc.url) {
                doc.clicks++;
                await doc.save();

                res.status(200).redirect(doc.url);
            }
        });
    } else res.redirect("/404", 404);
});

// Old version
router.get('/i/:id', async (req, res) => {
    const { id } = await req.params;
    if (id) res.redirect(`/${id}`, 302);
    else res.redirect('/404', 404)
});

// Redirect
router.get('/*', (req, res) => {
    if (req.path === '/404') return;
    res.redirect('/404', 404)
});

module.exports = router;