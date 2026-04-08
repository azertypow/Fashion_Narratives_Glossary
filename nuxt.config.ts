// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        baseURL: "/",
    },
    css: [
        '~/assets/_main.scss',
    ],
})
