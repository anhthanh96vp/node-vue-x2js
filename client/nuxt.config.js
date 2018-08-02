module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "node-vue-mongo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    css: ["assets/main.css", "element-ui/lib/theme-default/index.css"],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { href: "element-ui/lib/theme-default/index.css" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      }
    ],
    script: [{ src: "https://unpkg.com/element-ui/lib/index.js", body: true }]
  },
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
    "~/plugins/vue-notifications",
    "~/plugins/element-ui.js",
    '~plugins/vee-validate.js',
  ],
  loading: { color: "#3B8070" },
  build: {
    vendor: ["axios", "vue-notifications", "element-ui", "vee-validate"],
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
