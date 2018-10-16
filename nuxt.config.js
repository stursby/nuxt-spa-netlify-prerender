export default {
  srcDir: 'src',

  mode: 'spa',

  head: {
    title: 'Nuxt SPA Netlify Prerender',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' }
    ]
  },

  build: {
    extractCSS: true
  }
}
