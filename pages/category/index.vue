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
    <header class="pt-10 sm:text-center">
      <Breadcrumbs :lists="breadcrumbs.lists" />
      <h1 class="mb-4 mt-5 text-center text-4xl tracking-tight text-slate-800 font-extrabold">
        🛖 Category
      </h1>
      <p class="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-400 p-5">
        Welcome to our exceptional world of captivating categories, carefully curated just for you! We take immense
        pleasure in presenting a diverse and intriguing assortment of thought-provoking content that is sure to leave
        you inspired, informed, and entertained. Our team of talented writers and experts has poured their passion and
        expertise into each article, striving to create an unforgettable reading experience for our valued readers like
        you.
      </p>
    </header>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section
        class="text-gray-600 body-font"
        v-for="(category, key) in categories"
        :key="key"
      >
        <h3 class="mt-10 mb-4 text-2xl tracking-tight text-red-400 text-slate-800 font-extrabold">
          <NuxtLink :to="{ name: 'category-slug', params: { slug: category.slug } }">
            {{ category.name }}
          </NuxtLink>
        </h3>
        <NuxtLink
          :to="{ name: 'category-slug', params: { slug: subcategory.slug } }"
          v-for="(subcategory, key) in category.parent"
          :key="key"
          class="inline-flex items-center h-12 px-5 mr-3 text-lg mt-3 text-pink-700 transition-colors duration-150 border border-grey-100 rounded-lg focus:shadow-outline hover:bg-pink-700 hover:text-pink-100"
        >{{ subcategory.name }}
        </NuxtLink>
      </section>
    </div>
    <div class="mt-10 max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Articles :category="'blog'" :articles="categories.contents" />
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
      const categories = await $axios.$get(process.env.API_URL + '/category')

      return {
        categories: categories.data
      };
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      mountains: [],
      articles: []
    };
  },
  computed: {
    breadcrumbs() {
      return {
        lists: [
          { name: "Home", url: "", ok: true },
          { name: "Categories", url: "/category", ok: false },
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
              "url": 'https://' + process.env.PUBLISH_URL + '/' + article.slug,
              "name": article.title
            }
          })
        ],
        "numberOfItems": this.articles.length,
        "mainEntityOfPage": {
          "@type": [
            "CollectionPage"
          ],
          "@id": 'https://' + process.env.PUBLISH_URL + '/category/',
          "name": "Categories & Ratings From the " + process.env.SITE_TITLE,
          "headline": "Blogs",
          /*"datePublished": this.articles[0].datePublished,
          "dateModified": this.articles[0].dateModified,*/
          "description": process.env.SITE_TITLE + " Our team of talented writers and experts has poured their passion and expertise into each article, striving to create an unforgettable reading experience for our valued readers like you."
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
        "url": 'https://' + process.env.PUBLISH_URL + '/category/'
      }
    },
  },
  head() {
    return {
      title: "Categories - " + process.env.SITE_TITLE,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "noindex" },
        {
          hid: "description",
          name: "description",
          content: " ",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: '/favicon.ico' }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.jsonld())
      }],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
};
</script>
