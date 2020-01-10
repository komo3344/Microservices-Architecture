const webpack = require("webpack")

module.exports = {
  mode: 'universal', // SSR(서버사이드 렌더링)방식
  plugins: [
    "plugins/bootstrap.js",
    "plugins/axios.js",
  ],
  css: [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],
  module: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-localstorage',
    'nuxt-vuex-localstorage',
  ],
  router: {
    middleware: 'auth'
  },
  axios: {
    baseURL: 'http://localhost:8000'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'vue_project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'microservices architecture toy project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
