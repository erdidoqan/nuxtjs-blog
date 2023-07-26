<template>
  <div class="">
    <div class="bg-gray-200 text-black h-40 text-center w-full"></div>
    <div class="w-full text-xs m-0 text-center normal-case border-b border-gray-200 p-2">
      <p class="">
        <span class="css-0 eidw0490">
          For over long years, we have diligently conducted independent research and product testing. When you make a purchase through our links, we may earn a commission.
        </span>
      </p>
    </div>
    <div class="px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0 mt-10">
      <!-- component -->
      <Breadcrumbs :lists="breadcrumbs.lists" />

      <h1 class="text-3xl mt-3 text-gray-700 font-extrabold mb-10 text-center">
        {{ article.title }}
      </h1>
      <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
        <img
          src="https://pub-fb75283ac8564bffa221dee82a54590b.r2.dev/d949c708-1e73-4363-8a42-60114934edbe.jpg"
          loading="lazy"
          alt="auothor"
          v-lazy-load
          class="mr-3 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800"
        />
        <div>
          <div class="text-slate-900 dark:text-slate-200">
            By:
            <NuxtLink to="/author">
              <u class="font-bold">{{ siteMetadata.author }}</u>
            </NuxtLink>
          </div>
          <p class="text-center text-gray-400">
            Created: {{ article.createdAt }}
          </p>
        </div>
      </div>
    </div>
    <img
      rel="preload"
      class="lg:mx-auto lg:w-4/5 xl:max-w-4xl my-10 lg:rounded-md drop-shadow-sm"
      :src="article.image"
      v-lazy-load
    />
    <nuxt-picture
      src="/images/mountains.jpg"
      width="3750"
      height="2500"
      sizes="xs:200px md:500px lg:1024"
    />
    <figcaption class="text-center text-gray-600 text-xs mt-3">
      Photo by <a href="https://unsplash.com/@kydroon" target="_blank" class="underline">Kurt Cotoaga</a> on <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>
    </figcaption>

    <p class="text-center font-bold my-5">
        <span class="text-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
            {{ article.readDuration }}
        </span>
    </p>
    <div class="px-4 mx-auto sm:px-6 xl:max-w-[95%] xl:px-0 mt-10">
      <div class="flex">
        <div class="xl:w-3/4 sm:w-full">
          <div class="mt-5 flex-wrap inline-flex items-center">
            <NuxtLink
              v-for="tag in article.tags"
              :key="tag.title"
              class="rounded-xl bg-zinc-700 text-sm px-3 py-1 text-white transition-colors hover:bg-blue-500 mr-2 mb-2 last:mr-0"
              :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
              {{ tag.title }}
            </NuxtLink>
          </div>

          <div class="min-w-full p-2 mx-auto">
            <Toc />
          </div>

          <p v-if="article.body" class="prose min-w-full p-2 mx-auto" id="content" v-html="$md.render('#'+article.body)"></p>

        </div>
        <div class="xl:w-1/4 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class="bg-gray-200 text-black h-[35rem] w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h2 class="mt-10 mb-4 text-4xl tracking-tight text-red-400 text-slate-800 font-extrabold">Content You May Be Interested In</h2>
      <ArticlesRelated :category="'blog'" :articles="relateds" />
    </div>
  </div>
</template>
<script>

import siteMetaInfo from "@/data/sitemetainfo";

export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
    };
  },
  async asyncData({ $content, params, $axios}) {
    const article = await $axios.$get(process.env.API_URL + '/contents/' + params.slug,{
      timeout: 60000
    })
    const relateds = await $axios.$get(process.env.API_URL + '/contents')

    return {
      relateds: relateds.data,
      article: article.data,
    };
  },
  computed: {
    breadcrumbs() {
      return {
        lists: [
          { name: "Home", url: "/", ok: true },
          { name: "Blog", url: "/blog", ok: false },
          { name: this.article.title, url: "/blog/" + this.article.slug, ok: false, hidden: true}
        ],
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
          "thumbnailUrl": this.article.thumbnailUrl,
          "datePublished": this.article.datePublished,
          "headline": this.article.title,
          "wordCount": this.article.wordCount,
          "inLanguage":"en-US",
          "articleSection": "Lifestyle",
          "articleBody": this.article.cleanBody,
          "image": [
            {
              "@type": "ImageObject",
              "height": 1200,
              "thumbnail": this.article.thumbnailUrl,
              "url": this.article.image1200,
              "width": 1200
            },
            {
              "@type": "ImageObject",
              "height": 900,
              "thumbnail": this.article.thumbnailUrl,
              "url": this.article.image900,
              "width": 1200
            },
            {
              "@type": "ImageObject",
              "height": 675,
              "thumbnail": this.article.thumbnailUrl,
              "url": this.article.image675,
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
          "dateModified": this.article.dateModified,
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
          "numberOfItems": this.relateds.length,
          "itemListElement": [
            this.relateds.map((related, index) => {
              return {
                "@type": "ListItem",
                "position": index + 1,
                "url": 'https://' + process.env.PUBLISH_URL + '/blog/' + related.slug,
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
      title: this.article.title,
      meta: [
        { hid: "description", name: "description", content: this.article.description},
        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: this.article.title },
        { hid: 'og:image', name: 'og:image', content: this.article.image },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.jsonld())
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
