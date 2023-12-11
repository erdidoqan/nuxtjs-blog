<template>
  <div class="mt-24">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Articles :articles="articles" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import markdownit from 'markdown-it'



export default {
  async asyncData({$axios}) {
    const articles = await $axios.$get(process.env.API_URL + '/accounts/homepage')

    return {
      articles: articles.data,
    }
  },
  data() {
    return {
      md: markdownit(),
    };
  },
  methods: {
    jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": [
          "ItemList",
          "CollectionPage"
        ],
        "itemListElement": [
          this.articles.map((article, index) => {
            return {
              "@type": "ListItem",
              "position": index + 1,
              "url": 'https://' + process.env.PUBLISH_URL + '/' + article.slug + '/',
              "name": article.title
            }
          }),
        ],
        "numberOfItems": this.articles.length,
        "mainEntityOfPage": {
          "@type": [
            "CollectionPage"
          ],
          "@id": 'https://' + process.env.PUBLISH_URL + '/',
          "name": "Blogs & Ratings From the " + process.env.SITE_TITLE,
          "headline": "Blogs",
          "datePublished": this.articles[0].datePublished,
          "dateModified": this.articles[0].dateModified,
          "description": process.env.META_DESC
        },
        "publisher": {
          "@type": "Organization",
          "logo": {
            "@type": "ImageObject",
            "url": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
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
        "url": 'https://' + process.env.PUBLISH_URL + '/'
      }
    },
  },
  head() {
    return {
      title: process.env.META_TITLE,
      meta: [
        {
          hid: "description",
          name: "description",
          content: process.env.META_DESC,
        },
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
