export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios'

  ],
  axios: {
    baseURL: 'http://localhost:5000/',
    withCredentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login/',
            method: 'post',
            withCredentials: true
          },
          user: {
            url: 'user/me',
            method: 'get',
            withCredentials: true,
            propertyName: 'user'
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    cookie: {
      prefix: 'auth.',
      options: {
        httpOnly: true
      }
    }
  }

}
