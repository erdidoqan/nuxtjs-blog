require('dotenv').config()
const axios = require('axios')
const ampify = require('./plugins/ampify')

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
        /*rel: 'preconnect',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': process.env.GOOGLE_ADSENSE_ID,
        defer: true,
        async: true*/
      }
    ]
  },

  router: {
    linkExactActiveClass: 'text-pink-700'
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
  buildModules: ["@nuxt/postcss8","@nuxt/image"],
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
    "@nuxtjs/sitemap",
    "@nuxtjs/dotenv",
    "@nuxt/image",
    "@nuxtjs/amp",
    "nuxt-compress"
  ],
  amp: {
    origin: 'https://' + process.env.PUBLISH_URL || 'http://localhost:3000'
  },
  hooks: {
    'generate:page': (page) => {
      if (/^\/amp\//gi.test(page.route)) {
        page.html = ampify(page.html)
      }
    },
    'render:route': (url, page, { req, res }) => {
      if (/^\/amp\//gi.test(url)) {
        page.html = ampify(page.html)
      }
    }
  },
  image: {
    domains: ['https://icerikplanla.com/img', 'https://icerikplanla.com']
  },
  'nuxt-compress': {
    gzip: {
      threshold: 8192
    },
    brotli: {
      threshold: 8192
    }
  },
    sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    hostname: 'https://' + process.env.PUBLISH_URL,
    exclude: [
      '/categories/',
      '/blog/*',
      '/detail/*',
      '/life/*',
      '/message/*',
      '/post/*',
      '/quote/*',
      '/tags/*',
      '/about-us/',
      '/contact-us/',
      '/privacy-policy/',
      '/terms-and-conditions/',
      '*.html'
    ],
      routes:async () => {
        axios.defaults.headers.common = { Authorization: `Bearer ${process.env.PRIVATE_TOKEN}` };
        const { data } = await axios.get(process.env.API_URL + '/contents/sitemap')
        return data.data.map((product) =>`${product.slug}`)
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
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    }
  }
};
