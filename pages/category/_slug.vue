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
        {{ category.name }}
      </h1>
      <p class="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-400 p-5">
        {{ category.description }}
      </p>
    </header>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mb-10">

      <section class="text-gray-600 body-font">
        <NuxtLink
          :to="{ name: 'category-slug', params: { slug: subcategory.slug } }"
          v-for="(subcategory, key) in category.parent"
          :key="key"
          class="inline-flex items-center h-12 px-5 mr-3 text-lg mt-3 text-pink-700 transition-colors duration-150 border border-grey-100 rounded-lg focus:shadow-outline hover:bg-pink-700 hover:text-pink-100"
        >{{ subcategory.name }}
        </NuxtLink>
      </section>
    </div>

    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Articles :articles="category.contents" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>

import category from "@/pages/category/index";

export default {
  data() {
    return {
      title: 0,
    };
  },
  async asyncData({ $content, params, $axios}) {
    try {
      const category = await $axios.$get(process.env.API_URL + '/category/' + params.slug)

      return {
        category: category.data[0]
      };
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    breadcrumbs() {
      if (this.category.up){
        return {
          lists: [
            { name: "Home", url: "/", ok: true },
            { name: "Categories", url: "/category", ok: true },
            { name: this.category.up.name, url: '/category/'+this.category.up.slug, ok: true },
            { name: this.category.name, url: '/category/'+this.category.slug, ok: false },
          ],
        }
      }else{
        return {
          lists: [
            { name: "Home", url: "/", ok: true },
            { name: "Categories", url: "/category", ok: true },
            { name: this.category.name, url: '/category/'+this.category.slug, ok: false },
          ],
        }
      }
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    jsonld() {
      return [
        {
          "@type": "NewsArticle",
          "thumbnailUrl": this.category.contents[0].thumbnailUrl,
          "datePublished": this.category.contents[0].datePublished,
          "headline": this.category.contents[0].title,
          "wordCount": this.category.contents[0].wordCount,
          "inLanguage":"en-EN",
          "articleSection": "Lifestyle",
          "articleBody": this.category.contents[0].cleanBody,
          "image": [
            {
              "@type": "ImageObject",
              "height": 1200,
              "thumbnail": this.category.contents[0].thumbnailUrl,
              "url": this.category.contents[0].image1200,
              "width": 1200
            },
            {
              "@type": "ImageObject",
              "height": 900,
              "thumbnail": this.category.contents[0].thumbnailUrl,
              "url": this.category.contents[0].image900,
              "width": 1200
            },
            {
              "@type": "ImageObject",
              "height": 675,
              "thumbnail": this.category.contents[0].thumbnailUrl,
              "url": this.category.contents[0].image675,
              "width": 1200
            }
          ],
          "mainEntityOfPage": {
            "@id": this.$nuxt.$route.path,
            "@type": "WebPage"
          },
          "publisher": {
            "@type": "NewsMediaOrganization",
            "name": process.env.SITE_TITLE,
            "logo": {
              "@type": "ImageObject",
              "url": 'https://' + process.env.PUBLISH_URL + '/static/logo-jsonld.png',
              "width": 312,
              "height": 60
            },
            "parentOrganization": {
              "@type": "NewsMediaOrganization",
              "name": "Greetingbirds"
            }
          },
          "url": this.$nuxt.$route.path,
          "isBasedOn": this.$nuxt.$route.path,
          "dateModified": this.category.contents[0].dateModified,
          "author": {
            "name": "Yapay Yazar",
            "url": "/author/",
            "@type": "Person",
            "description": "<p>Yapay Yazar is a Greetingbirds analyst, which he evaluates based on 'Quotes' using specialized equipment and consumer tester data. Before starting Greetingbirds in 2022, she earned an MA in authoring and a BA in fiber science from Epoka University. While earning his Yazar degrees, he worked in smart and nanotechnology research laboratories.</p>",
            "jobTitle": "Quotes Lab Product Analyst",
            "image": "https://pub-fb75283ac8564bffa221dee82a54590b.r2.dev/d949c708-1e73-4363-8a42-60114934edbe.jpg",
            "email": "greetingbirds@gmail.com",
            "sameAs": []
          },
          "@context": "http://schema.org"
        },{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "numberOfItems": this.category.contents,
          "itemListElement": [
            this.category.contents.map((related, index) => {
              return {
                "@type": "ListItem",
                "position": index + 1,
                "url": 'https://' + process.env.PUBLISH_URL + '/' + related.slug,
                "name": related.title
              }
            })
          ]
        }
      ]
    }
  },
  mounted() {

  },
  head() {
    return {
      title: this.category.meta_title,
      meta: [
        { hid: "description", name: "description", content: this.category.meta_description},
        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: this.category.meta_title },

      ],
      link: [{ rel: "icon", type: "image/x-icon", href: process.env.META_FAVICON_ICO }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify('this.jsonld()')
      }],
      __dangerouslyDisableSanitizers: ['script'],
    };
  },
};
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
