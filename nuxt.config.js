var StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Set the source directory
  */
  srcDir: 'client/',
  build: {
    vendor: ['universal-fetch'],

    // postcss: [require('stylelint'), require('postcss-reporter')],

    postcss: [
      require('autoprefixer'),
      require('postcss-custom-properties'),
      require('postcss-calc'),
    ],

    plugins: [
      new StylelintPlugin({
        files: ['**/*.vue', '**/*.css'],
      }),
    ],

    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
