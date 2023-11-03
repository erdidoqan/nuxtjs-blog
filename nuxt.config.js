require('dotenv').config()
const axios = require('axios')
const path = require('path');
import fs from 'fs'
const https = require('https')

https.get('https://icerikplanla.com/atom/'+process.env.PUBLISH_URL, resp => resp.pipe(fs.createWriteStream('static/feed.xml')));

https.get(process.env.META_FAVICON_ICO, resp => resp.pipe(fs.createWriteStream('static/favicon.ico')));
https.get(process.env.META_FAVICON_PNG, resp => resp.pipe(fs.createWriteStream('static/icons/icon.png')));
https.get(process.env.META_FAVICON_PNG + '?w=114&h=114&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon114.png')));
https.get(process.env.META_FAVICON_PNG + '?w=196&h=196&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon196.png')));
https.get(process.env.META_FAVICON_PNG + '?w=160&h=160&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon160.png')));
https.get(process.env.META_FAVICON_PNG + '?w=96&h=96&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon96.png')));
https.get(process.env.META_FAVICON_PNG + '?w=64&h=64&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon64.png')));
https.get(process.env.META_FAVICON_PNG + '?w=32&h=32&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon32.png')));
https.get(process.env.META_FAVICON_PNG + '?w=16&h=16&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon16.png')));
https.get(process.env.META_FAVICON_PNG + '?w=72&h=72&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon72.png')));
https.get(process.env.META_FAVICON_PNG + '?w=144&h=144&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon144.png')));
https.get(process.env.META_FAVICON_PNG + '?w=60&h=60&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon60.png')));
https.get(process.env.META_FAVICON_PNG + '?w=120&h=120&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon120.png')));
https.get(process.env.META_FAVICON_PNG + '?w=76&h=76&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon76.png')));
https.get(process.env.META_FAVICON_PNG + '?w=152&h=152&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon152.png')));
https.get(process.env.META_FAVICON_PNG + '?w=180&h=180&fit=crop', resp => resp.pipe(fs.createWriteStream('static/icons/icon180.png')));



export default {
  target: 'static',
  generate: { fallback: true },
  env: {
    SITE_TITLE: process.env.SITE_TITLE,
    PUBLISH_URL: process.env.PUBLISH_URL
  },
  head: {
    title: process.env.META_TITLE,
    htmlAttrs: {
      lang: process.env.HTML_LANG
    },
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.META_DESC },
      { name: 'author', content: process.env.META_AUTHOR },
      { hid: 'robots', name: 'robots', content: 'max-image-preview:large' },
      { name: 'mobile-web-app-capable', content: 'yes' },

      /*<meta property="article:published_time" content="2023-10-28T03:30:33+00:00" />
      <meta property="article:modified_time" content="2023-10-28T03:30:33+00:00" />*/

      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: process.env.META_TITLE },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.SITE_TITLE },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'profile:username', property: 'profile:username', content: 'GreetingBirds' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '1951371271775373' },


      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@GreetingBirds' },
      { name: 'twitter:site', content: '@GreetingBirds' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/icons/icon.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.META_TITLE },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.META_DESC },
      { hid: 'twitter:url', name: 'twitter:url', content: process.env.PUBLISH_URL },

      { name: 'google-adsense-account', content: process.env.GOOGLE_ADSENSE_ID }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', href: '/icons/icon.png' },
      { rel: 'icon',type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '16x16 32x32 64x64', href: '/icons/icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/icons/icon196.png' },
      { rel: 'icon', type: 'image/png', sizes: '160x160', href: '/icons/icon160.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/icon96.png' },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/icons/icon64.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/icon32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/icon16.png' },

      { rel: 'apple-touch-icon', href: '/icons/icon.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/icon72.png' },
      { rel: 'apple-touch-icon', sizes: '114x144', href: '/icons/icon114.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/icon144.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/icon60.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/icon120.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/icon76.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/icon152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon180.png' },
      { rel: 'alternate', type: 'application/rss+xml', href: '/feed.xml' }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': process.env.GOOGLE_ADSENSE_ID,
        'crossorigin':'anonymous',
        async: true
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
  },

  router: {
    trailingSlash: true,
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

  buildModules: [
    "@nuxt/image"
  ],
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
    "nuxt-compress",
    "@nuxtjs/google-gtag",
    "@nuxtjs/google-adsense"
  ],
  'google-adsense': {
    onPageLoad: true,
    pageLevelAds: true
  },

  publicRuntimeConfig: {
    'google-adsense': {
      id: process.env.GOOGLE_ADSENSE_ID,
      test: process.env.GOOGLE_ADSENSE_TEST_MODE
    }
  },
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
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
    staticFilename: '[publicPath]/image/[name][ext]',

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
  loading: false,
  loadingIndicator: false,
  features: {
    store: false,
    middleware: false,
    deprecations: false,
    validate: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: true,
    preset: {
      stage: 1
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          tailwindConfig: {
            test: /tailwind\.config/,
            chunks: "all",
            priority: 10,
            name: true
          }
        }
      }
    },
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        optimizeCSS: true,

        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: true,
        collapseWhitespace: true
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
          "postcss-custom-properties": false,
          'postcss-import': {},
          'postcss-custom-media': {},
          autoprefixer: {}
        }
      }
    }
  }
};
