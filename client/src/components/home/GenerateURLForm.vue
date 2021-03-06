<template>
    <div class="container">
        <form class="form" @submit.prevent="submit">
            <label for="url">URL to shorten:</label>

            <div class="duo">
                <input
                    :class="error ? (error.path === 'url' ? 'error' : '') : ''"
                    class="prefix"
                    id="prefix"
                    type="text"
                    disabled
                    value="https://"
                />
                <input
                    :class="error ? (error.path === 'url' ? 'error' : '') : ''"
                    class="url"
                    id="url"
                    type="text"
                    placeholder="your url"
                    v-model.trim="data.url"
                />
            </div>

            <label for="id">Custom ID (optional):</label>
            <input
                :class="error ? (error.path === 'id' ? 'error' : '') : ''"
                class="id"
                id="id"
                type="text"
                placeholder="custom id"
                v-model.trim="data.id"
            />

            <div class="content">
                <Button
                    type="submit"
                    @submit.native="submit"
                    name="Create URL"
                />
                <p :class="error ? 'errorP' : ''">
                    {{ error ? messages : success ? successMessage : '' }}
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import Button from '@/components/ui/Button';
import { kimp } from 'kimp';
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
    name: 'GenerateURLForm',
    components: {
        Button,
    },
    watch: {
        time: function(val) {
            if (val > 0) {
                setTimeout(() => this.time--, 1000);
                this.disabled = true;
            } else {
                this.disabled = false;
                this.error = null;
            }
        },
    },
    data() {
        return {
            disabled: false,
            error: null,
            time: 0,
            success: false,
            successMessage: null,
            data: {
                id: null,
                url: null,
            },
        };
    },
    computed: {
        messages: function() {
            const types = {
                http: 'Only secure URLs are allowed (HTTPS)',
                rate: 'Too many requests',
                timeout: `You need to wait ${this.time} secondes`,
                unknown: 'Something went wrong',
                typeError: 'Missing fields',
                url: 'Must be a valid URL',
                matches: 'Invalid characters',
                mongoErrorId: 'ID already taken',
                loop: `You can't shorten swooo[sh] URLs`
            };

            return types[this.error.type];
        },
    },
    methods: {
        async submit() {
            const swooosh = await this.sanitize();
            if (swooosh.error) return (this.error = swooosh.error);
            if (!this.error) {
                /**
                 * For development purposes:
                 * When developing Server on port 8080 and Client on port 8081
                 * Make the request to port 8080
                 */
                const domain = await window.location.origin.replace(
                    /8081/g,
                    '8080'
                );

                const defaultHeaders = new Headers();

                const response = await fetch(`${domain}/api/v1/create`, {
                    method: 'POST',
                    headers: {
                        ...defaultHeaders,
                        'Content-Type': 'application/json',
                    },
                    body: await JSON.stringify(swooosh),
                });

                const result = await response.json();

                if (result.error) this.error = result.error;
                if (result.ok) {
                    this.time = 30;
                    this.success = true;
                    this.successMessage = 'URL generated successfully!';
                    this.setSwooosh(result.data);
                }
            }
        },
        sanitize() {
            const startsWithHTTPS = /^https/g;

            this.error = null;
            this.success = false;
            this.successMessage = null;

            const url = startsWithHTTPS.test(this.data.url)
                ? this.data.url
                : `https://${this.data.url}`;

            let urlObj = {};

            try {
                urlObj = new URL(url);
            } catch {
                return (this.error = { type: 'url', path: 'url' });
            }

            if (urlObj.hostname.includes('swooo.sh')) {
                return this.error = { type: 'loop' }
            }
            if (this.data.id === '') {
                this.data.id = null;
            }
            if (this.data.url === '') {
                this.data.url = null;
            }

            if (this.disabled) return (this.error = { type: 'timeout' });

            let id = this.data.id || kimp.hash(6);

            id = id.toLowerCase();

            return {
                id: id,
                url: url,
                redirect: encodeURIComponent(url),
                shortUrl: `https://swooo.sh/${id}`,
                createdOn: moment().format('dddd, MMMM Do YYYY, h:mm:ss a zz'),
            };
        },
        ...mapActions({
            setSwooosh: 'setSwooosh',
        }),
        ...mapGetters(['getSwooosh']),
    },
};
</script>

<style scoped lang="scss">
.container {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        & label {
            font-size: 18px;
            margin: 10px 0;
            color: #cccccc;
            font-weight: 600;
        }

        & input {
            padding: 10px 16px;
            font-size: 16px;
            color: #cccccc;
            background-color: #323232;
            border: none;
            border-radius: 6px;
        }

        & .duo {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            & .prefix {
                width: 25%;
                min-width: 90px;
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
                background-color: #393939;
            }

            & .url {
                width: 75%;
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }
        }

        & .id {
            width: 100%;
        }

        & .error {
            color: #bf1717;

            &::placeholder {
                color: #bf1717;
                opacity: 1;
            }
        }

        & .errorP {
            color: #bf1717 !important;
        }

        & .content {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            & p {
                font-size: 16px;
                color: #cccccc;
            }
        }
    }
}
</style>
