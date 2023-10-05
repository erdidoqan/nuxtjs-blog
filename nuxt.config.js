require('dotenv').config()
const axios = require('axios')

export default {
  target: 'static',
  generate: { fallback: true },
  env: {
    SITE_TITLE: process.env.SITE_TITLE,
    PUBLISH_URL: process.env.PUBLISH_URL,
    META_FAVICON_PNG_32: process.env.META_FAVICON_PNG_32
  },
  head: {
    title: process.env.META_TITLE,
    htmlAttrs: {
      lang: process.env.HTML_LANG
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.META_DESC },
      { name: 'author', content: process.env.META_AUTHOR },
      { hid: 'robots', name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: process.env.META_TITLE },
      { hid: 'og:image', property: 'og:image', content: process.env.META_COVER_IMAGE },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: process.env.META_COVER_IMAGE },
      { hid: 'og:image:width', property: 'og:image:width', content: '1280' },
      { hid: 'og:image:height', property: 'og:image:height', content: '720' },
      { hid: 'og:title', property: 'og:title', content: process.env.META_TITLE },
      { hid: 'og:description', property: 'og:description', content: process.env.META_DESC },
      { hid: 'og:url', property: 'og:url', content: process.env.PUBLISH_URL },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.SITE_TITLE },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'profile:username', property: 'profile:username', content: 'GreetingBirds' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '1951371271775373' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@GreetingBirds' },
      { name: 'twitter:site', content: '@GreetingBirds' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: process.env.META_COVER_IMAGE },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.META_TITLE },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.META_DESC },
      { hid: 'twitter:url', name: 'twitter:url', content: process.env.PUBLISH_URL }
    ],
    link: [
      { rel: 'shortcut icon', href: process.env.META_FAVICON_ICO },
      { rel: 'icon',type: 'image/x-icon', href: process.env.META_FAVICON_ICO },
      { rel: 'icon', sizes: '16x16 32x32 64x64', href: process.env.META_FAVICON_ICO },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: process.env.META_FAVICON_PNG_196 },
      { rel: 'icon', type: 'image/png', sizes: '160x160', href: process.env.META_FAVICON_PNG_160 },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: process.env.META_FAVICON_PNG_96 },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: process.env.META_FAVICON_PNG_64 },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: process.env.META_FAVICON_PNG_32 },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: process.env.META_FAVICON_PNG_16 },

      { rel: 'apple-touch-icon', href: process.env.META_FAVICON_PNG_57 },
      { rel: 'apple-touch-icon', sizes: '72x72', href: process.env.META_FAVICON_PNG_72 },
      { rel: 'apple-touch-icon', sizes: '114x144', href: process.env.META_FAVICON_PNG_114 },
      { rel: 'apple-touch-icon', sizes: '144x144', href: process.env.META_FAVICON_PNG_144 },
      { rel: 'apple-touch-icon', sizes: '60x60', href: process.env.META_FAVICON_PNG_60 },
      { rel: 'apple-touch-icon', sizes: '120x120', href: process.env.META_FAVICON_PNG_120 },
      { rel: 'apple-touch-icon', sizes: '76x76', href: process.env.META_FAVICON_PNG_76 },
      { rel: 'apple-touch-icon', sizes: '152x152', href: process.env.META_FAVICON_PNG_152 },
      { rel: 'apple-touch-icon', sizes: '180x180', href: process.env.META_FAVICON_PNG_180 },
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
  },

  router: {
    trailingSlash: false,
    middleware: 'trailingSlashRedirect',
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
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "@nuxtjs/dotenv",
    "@nuxt/image",
    "nuxt-compress"
  ],
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  image: {
    domains: [
      'https://icerikplanla.com/img',
      'https://icerikplanla.com',
      'https://turkce.icerikplanla.com',
      'https://turkce.icerikplanla.com/img',
      'https://icerikplanla.test',
      'https://icerikplanla.test/img'
    ]
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
      '/category/',
      '/about-us/',
      '/contact-us/',
      '/privacy-policy/',
      '/terms-and-conditions/',
      '*.html'
    ],
      routes:async () => {
        axios.defaults.headers.common = { Authorization: `Bearer ${process.env.PRIVATE_TOKEN}` };
        const { data } = await axios.get(process.env.API_URL + '/contents/sitemap')
        return data.map((product) =>`${product.slug}`)
      }
  },
  /*feed: [
    // A default feed configuration object
    {
      path: '/feed.xml', // The route to your feed.
      async create (feed) {
        axios.defaults.headers.common = { Authorization: `Bearer ${process.env.PRIVATE_TOKEN}` };
        const { posts } = await axios.get(process.env.API_URL + '/contents/sitemap')

        posts.data.forEach((post) => {
          feed.addItem({
            title: 'a',
            id: 'asd',
            link: post.slug,
            description: 'desc',
            published: new Date(),
            author: [
              {
                name: 'Your name',
                email: 'your-email@gmail.com'
              }
            ]
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
    }
  ],*/
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
