export default {
  ssr: false,
  head: {
    title: 'Zagotovka',
    htmlAttrs: {
      lang: 'en',
      class: 'geekoutevent',
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Zagotovka'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      hid: 'icon',
      href: '/favicon.ico'
    }],
  },
  css: ['@/assets/styles/reset.scss', '@/assets/styles/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
    '@/plugins/vee-validate.js',
    '@/plugins/element-ui.js',
    '@/plugins/font-awasome.js',
    // '@/plugins/material-icons.js',
  ],
  components: true,
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/svg',
    '@nuxtjs/moment',
    'nuxt-gsap-module'
  ],
  gsap: {},
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  axios: {
  },
  styleResources: {
    scss: [
      '@/assets/styles/helper/_vars-helper.scss',
      '@/assets/styles/helper/_mixins.scss',

    ],
  },
  router: {
    base: '/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  generate: {
    dir: './dist_server'
  },
  build: {
    target: 'static'
  }
}
