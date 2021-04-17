require('dotenv').config();
export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'designhouse2-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      { src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"},
      { src:"https://kit.fontawesome.com/b19cc63345.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vform',
    '~plugins/global_components.js',
  //  '~components/_global',
    { src: '~/plugins/gmaps', ssr: false }

  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBase: process.env.API_BASE
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/router'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
/*
      local: {
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/me', method: 'get', propertyName: 'data' }
        }
      },
*/
      'laravelSanctum': {
        provider: 'laravel/sanctum',
//            url: 'http://designhouse2.test',
                url: process.env.BASE_URL,
        endpoints: {
            login: {
                url: '/api/login',
            },
            user: {
                url: '/api/me'
            },
            logout: {
                url: '/api/logout'
            }
        }
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseUrl: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
}

