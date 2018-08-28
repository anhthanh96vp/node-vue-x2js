module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    css: [
      { src: "~assets/main.css" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/vuetify'
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/Errors/404.vue")
      })
    }
  },
  plugins: [
    { src: "~plugins/vue-notifications" },
    { src: "~plugins/vue-carousel.js", ssr: false },
    { src: "~plugins/vee-validate.js", ssr: true }
  ],
  loading: { color: "#3B8070" },
  build: {
    vendor: [
      "axios",
      "vue-notifications",
      "vee-validate",
      "vue-carousel"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
