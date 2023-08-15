<template>
  <div>
    <div class="bg-gray-200 text-black h-40 text-center w-full"></div>
    <div class="w-full text-xs m-0 text-center normal-case border-b border-gray-200 p-2">
      <p class="">
        <span class="css-0 eidw0490">
          For over long years, we have diligently conducted independent research and product testing. When you make a purchase through our links, we may earn a commission.
        </span>
      </p>
    </div>
    <header class="pt-10 pb-5 sm:pb-16 sm:text-center">
      <Breadcrumbs :lists="breadcrumbs.lists" />
      <h1 class="mb-4 mt-5 text-center text-4xl tracking-tight text-slate-800 font-extrabold">
        📜 Blog
      </h1>
      <p class="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-400 p-5">
        Welcome to our exceptional world of captivating blog posts, carefully curated just for you! We take immense
        pleasure in presenting a diverse and intriguing assortment of thought-provoking content that is sure to leave
        you inspired, informed, and entertained. Our team of talented writers and experts has poured their passion and
        expertise into each article, striving to create an unforgettable reading experience for our valued readers like
        you.
      </p>
    </header>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="md:flex mx-auto dark:bg-gray-900">
              <div>
                <div class="ltablet:grid-cols-6 grid w-full gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  <div
                    v-for="(article, key) in articles"
                    :key="key"
                    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl group p-3"
                  >

                    <div class="relative">
                      <NuxtLink :to="`/amp/blog/${article.slug}/?utm_source=home`">

                        <nuxt-img
                          v-if="article.image"
                          class="h-40 w-full rounded-lg object-cover"
                          :src="article.image"
                          preload
                          loading="lazy"
                          width="850"
                          height="620"
                          format="webp"
                          sizes="sm:100vw md:50vw lg:400px"
                          :alt="article.title"
                        />
                      </NuxtLink>
                    </div>
                    <div>
                      <div class="mb-6 mt-3">
                        <p class="font-heading text-base font-medium leading-snug line-clamp-4 text-gray-800 dark:text-gray-100">
                          <NuxtLink :to="`/amp/blog/${article.slug}/?utm_source=home`">
                            {{ article.title }}
                          </NuxtLink>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ $content, params, $axios }) {
    try {
      const articles = await $axios.$get(process.env.API_URL + '/contents')

      return {
        articles: articles.data
      };
    } catch (error) {
      //console.error(error);
    }
  },
  computed: {
    breadcrumbs() {
      return {
        lists: [
          { name: "Home", url: "/", ok: true },
          { name: "Blog", url: "/blog", ok: false },
        ],
      }
    }
  },
  methods: {
    jsonld() {
      return {
        "@context": "http://schema.org",
        "@type": [
          "ItemList",
          "CollectionPage"
        ],
        "itemListElement": [
          this.articles.map((article, index) => {
            return {
              "@type": "ListItem",
              "position": index + 1,
              "url": 'https://' + process.env.PUBLISH_URL + '/blog/' + article.slug,
              "name": article.title
            }
          })
        ],
        "numberOfItems": this.articles.length,
        "mainEntityOfPage": {
          "@type": [
            "CollectionPage"
          ],
          "@id": 'https://' + process.env.PUBLISH_URL + '/blog/',
          "name": "Blogs & Ratings From the " + process.env.SITE_TITLE,
          "headline": "Blogs",
          "datePublished": this.articles[0].datePublished,
          "dateModified": this.articles[0].dateModified,
          "description": process.env.SITE_TITLE + " Our team of talented writers and experts has poured their passion and expertise into each article, striving to create an unforgettable reading experience for our valued readers like you."
        },
        "publisher": {
          "@type": "Organization",
          "logo": {
            "@type": "ImageObject",
            "url": 'https://' + process.env.PUBLISH_URL + '/static/logo-jsonld.png',
            "width": 312,
            "height": 60
          },
          "name": process.env.SITE_TITLE,
          "url": 'https://' + process.env.PUBLISH_URL,
          "brand": {
            "@type": "Thing",
            "name": process.env.SITE_TITLE
          }
        },
        "url": 'https://' + process.env.PUBLISH_URL + '/blog/'
      }
    },
  },
  head() {
    return {
      title: "Blogs - " + process.env.SITE_TITLE,
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to our exceptional world of captivating blog posts, carefully curated just for you! We take immense\n' +
            '        pleasure in presenting a diverse and intriguing assortment of thought-provoking content that is sure to leave\n' +
            '        you inspired, informed, and entertained.' },
        { hid: "twitter:title", name: "twitter:title", content: 'Blogs - ' + process.env.SITE_TITLE},
        { hid: "twitter:description", name: "twitter:description", content: 'Welcome to our exceptional world of captivating blog posts, carefully curated just for you! We take immense\n' +
            '        pleasure in presenting a diverse and intriguing assortment of thought-provoking content that is sure to leave\n' +
            '        you inspired, informed, and entertained.'},
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image"},
        { hid: "twitter:image", name: "twitter:image", content: ''},
        { hid: "og:description", property: "og:description", content: ' Welcome to our exceptional world of captivating blog posts, carefully curated just for you! We take immense\n' +
            '        pleasure in presenting a diverse and intriguing assortment of thought-provoking content that is sure to leave\n' +
            '        you inspired, informed, and entertained.' },
        { hid: "og:image", property: "og:image", content: '' },
        { hid: "og:image:type", property: "og:image:type", content: "image/png" },
        { hid: "og:type", property: "og:type", content: "website" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: 'canonical', href: 'https://' + process.env.PUBLISH_URL + '/blog/' }
      ],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.jsonld())
      }],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
};
</script>
