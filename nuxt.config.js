require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    SITE_TITLE: process.env.SITE_TITLE,
    PUBLISH_URL: process.env.PUBLISH_URL
  },
  head: {
    title: process.env.SITE_TITLE,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "google-site-verification", content: process.env.GOOGLE_SITE_VERIFICATION }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': process.env.GOOGLE_ADSENSE_ID,
        async: true
      }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],
  vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vue: {
      /* options for vite-plugin-vue2 */
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/svg",
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/google-adsense",
    "nuxt-lazy-load",
    "@nuxtjs/sitemap",
    "@nuxtjs/dotenv"
  ],

  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder
    defaultImage: '/default.gif',

    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',

    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
  'google-adsense': {
    onPageLoad: true,
    pageLevelAds: true
  },
  publicRuntimeConfig: {
    'google-adsense': {
      id: process.env.GOOGLE_ADSENSE_ID,
      test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true'
    }
  },
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-dracula.css"
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
};
