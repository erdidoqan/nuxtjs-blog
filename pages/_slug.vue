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
    <nuxt-picture
      :src="article.image1200"
      :alt="article.image_alt"
      quality="80"
      loading="eager"
      :preload="true"
      format="jpg"
      :img-attrs="{ class: 'lg:mx-auto lg:w-4/5 xl:max-w-4xl my-10 lg:rounded-md drop-shadow-sm' }"
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
          "@context": "http://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": 'https://' + process.env.PUBLISH_URL + this.$route.path,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                this.article.breadcrumbs.map((breadcrumb, index) => {
                  if (!breadcrumb.hidden){
                    return {
                      "@type": "ListItem",
                      "position": index + 1,
                      "item": {
                        "@id": "https://" + process.env.PUBLISH_URL+breadcrumb.url,
                        "name": breadcrumb.name
                      }
                    }
                  }
                })
              ]
            }
          },
          "headline": this.article.title,
          "image": {
            "@type": "ImageObject",
            "url": 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', ''),
            "height": 628,
            "width": 1200
          },
          "datePublished": "2023-11-02T13:15:10+00:00",
          "dateModified": "2023-11-02T13:15:10+00:00",
          "author": {
            "@type": "Person",
            "name": "Carolyn C Messer",
            "url": "/author/carolyn-c-messer",
            "jobTitle": "Writer"
          },
          "publisher": {
            "@type": "Organization",
            "name": process.env.SITE_TITLE,
            "url": "https://"+process.env.PUBLISH_URL,
            "logo": {
              "@type": "ImageObject",
              "url": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
              "width": "880",
              "height": "177"
            },
            "brand": {
              "@type": "Brand",
              "name": process.env.SITE_TITLE,
              "type": "Thing",
              "sameAs": [
                "http://www.facebook.com/anniversaryclick",
              ]
            }
          },
          "description": this.article.description
        }
      ]
    },
  },
  mounted() {

  },
  head() {
    return {
      title: this.article.meta_title,
      meta: [
        { hid: "description", name: "description", content: this.article.description},
        { property: 'article:published_time', content: this.article.datePublished },
        { property: 'article:modified_time', content: this.article.dateModified },
        { itemprop: "name", content: this.article.meta_title },
        { itemprop: "description", content: this.article.description },
        { itemprop: "image", content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },

        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: this.article.title },
        { hid: 'og:description', name: 'og:description', content: this.article.description },

        { name: 'thumbnail', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },
        { property: 'og:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },

        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },
        { hid: 'og:url', name: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },
        { hid: 'og:og:image:alt', name: 'og:image:alt', content: this.article.image_alt },

        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path }
      ],
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
