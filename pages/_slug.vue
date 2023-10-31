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
      <Breadcrumbs :lists="article.breadcrumbs" />

      <h1 class="text-4xl mt-3 text-gray-700 font-extrabold mb-10 text-center">
        {{ article.title }}
      </h1>

      <Author :articleCreated="article.createdAt" />
    </div>
    <nuxt-img
      v-if="article.image"
      class="lg:mx-auto lg:w-4/5 xl:max-w-4xl my-10 lg:rounded-md drop-shadow-sm"
      :src="article.image"
      loading="eager"
      :preload="true"
      width="1200"
      height="820"
      format="webp"
      sizes="sm:100vw md:50vw lg:640px xl:1200px"
      :alt="article.title"
    />

    <p class="text-center font-bold my-5">
        <span class="text-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
            {{ article.readDuration }}
        </span>
    </p>
    <div class="px-4 mx-auto sm:px-6 xl:max-w-[95%] xl:px-0 mt-10">
      <div class="flex">
        <div class="xl:w-1/5 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class="bg-gray-200 text-black h-[45rem] w-full"></div>
            </div>
          </div>
        </div>
        <div class="xl:w-3/4 sm:w-full">

          <div class="min-w-full p-2 mx-auto">
            <Toc />
          </div>

          <div class="prose text-xl min-w-full p-2 mx-auto" id="content" v-html="$md.render(article.body)"></div>

          <template v-if="article.faq !== null">
            <div v-show="article.faq">
              <Faq :items="article.faq" />
            </div>
          </template>

        </div>
        <div class="xl:w-1/3 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class="bg-gray-200 text-black h-[45rem] w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h2 class="mt-10 mb-4 text-4xl tracking-tight text-red-400 text-slate-800 font-extrabold">Content You May Be Interested In</h2>
      <Articles :articles="article.relateds" :piece="6" />
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: 0,
    };
  },
  async asyncData({params, $axios}) {
    const article = await $axios.$get(process.env.API_URL + '/contents/' + params.slug)

    return {
      article: article.data,
    };
  },
  computed: {
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    jsonld() {
      return [
        {
          "@type": "WebPage",
          "@id": process.env.PUBLISH_URL,
          "url": process.env.PUBLISH_URL,
          "name": process.env.SITE_TITLE,
          "description": this.article.description,
          "inLanguage": "en-US",
          "isPartOf": {
            "@id": process.env.PUBLISH_URL+"/#website"
          },
          "breadcrumb": {
            "@id": process.env.PUBLISH_URL+"/#breadcrumblist"
          },
          "datePublished": this.article.datePublished,
          "dateModified": this.article.dateModified
        },{
          "@type": "NewsArticle",
          "thumbnailUrl": process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp',
          "datePublished": this.article.datePublished,
          "headline": this.article.title,
          "wordCount": this.article.wordCount,
          "inLanguage":"en-EN",
          "articleSection": "Lifestyle",
          "articleBody": this.article.cleanBody,
          "image": [
            {
              "@type": "ImageObject",
              "height": 1200,
              "thumbnail": process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp',
              "url": this.article.image1200,
              "width": 1200
            },
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
              "url": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
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
            "description": "Yapay Yazar is a Greetingbirds analyst, which he evaluates based on 'Quotes' using specialized equipment and consumer tester data. Before starting Greetingbirds in 2022, she earned an MA in authoring and a BA in fiber science from Epoka University. While earning his Yazar degrees, he worked in smart and nanotechnology research laboratories.",
            "jobTitle": "Quotes Lab Product Analyst",
            "image": "https://pub-fb75283ac8564bffa221dee82a54590b.r2.dev/d949c708-1e73-4363-8a42-60114934edbe.jpg",
            "email": "greetingbirds@gmail.com",
            "sameAs": []
          },
          "@context": "http://schema.org"
        }
      ]
    },
    articleJsonLd(){
      return [
        { "@context": "https://schema.org",
          "@type": "Article",
          "headline": this.article.title,
          "alternativeHeadline": this.article.meta_title,
          "image": 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp',
          "award": "Best anniversary article ever written",
          "editor": "Craig Mount",
          "genre": "list",
          "wordcount": this.article.wordCount,
          "datePublished": this.article.datePublished,
          "dateCreated": this.article.datePublished,
          "dateModified": this.article.dateModified,
          "description": this.article.description,
          "articleBody": this.article.cleanBody,
          "author": {
            "name": "Yapay Yazar",
            "url": "/author/",
            "@type": "Person",
            "description": "Yapay Yazar is a Greetingbirds analyst, which he evaluates based on 'Quotes' using specialized equipment and consumer tester data. Before starting Greetingbirds in 2022, she earned an MA in authoring and a BA in fiber science from Epoka University. While earning his Yazar degrees, he worked in smart and nanotechnology research laboratories.",
            "jobTitle": "Quotes Lab Product Analyst",
            "image": "https://pub-fb75283ac8564bffa221dee82a54590b.r2.dev/d949c708-1e73-4363-8a42-60114934edbe.jpg",
            "email": "greetingbirds@gmail.com",
            "sameAs": []
          },
          "publisher": {
            "@type": "Organization",
            "name": process.env.SITE_TITLE,
            "logo": {
              "@type": "ImageObject",
              "url": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
            }
          },
          "url": this.$nuxt.$route.path,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": this.$nuxt.$route.path
          }
        }
      ]
    },
    relatedlistJsonLd(){
      return [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "numberOfItems": this.article.relateds.length,
          "itemListElement": [
            this.article.relateds.map((related, index) => {
              return {
                "@type": "ListItem",
                "position": index + 1,
                "url": 'https://' + process.env.PUBLISH_URL + '/' + related.slug + '/',
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
      title: this.article.meta_title,
      meta: [
        { hid: "description", name: "description", content: this.article.description},

        { itemprop: "name", content: this.article.meta_title },
        { itemprop: "description", content: this.article.description },
        { itemprop: "image", content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp' },

        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: this.article.title },
        { hid: 'og:description', name: 'og:description', content: this.article.description },
        { hid: 'og:image', name: 'og:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp' },
        { hid: 'og:url', name: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },

        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.slug+'.webp' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path }
      ],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.jsonld())
      },{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.articleJsonLd())
      },{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.relatedlistJsonLd())
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
