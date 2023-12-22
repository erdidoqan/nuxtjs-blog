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
        {{ article.meta_title }}
      </h1>

      <Author
        :author="article.author"
        :articleCreated="article.createdAt"
        :datePublished="article.datePublished"
      />
    </div>

    <nuxt-picture
      v-if="article.image"
      :src="article.image"
      :alt="article.image_alt"
      :copyright="article.image_alt"
      :imgAttrs="{class:'lg:mx-auto lg:w-4/5 xl:max-w-4xl my-10 lg:rounded-md drop-shadow-sm'}"
      sizes="xs:16vw sm:32vw md:50vw lg:80vw"
      width="1200"
      height="820"
      format="webp"
      fit="crop"
      loading="lazy"
      :preload="true"
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

          <div class="prose text-xl min-w-full p-2 mx-auto" id="content" v-html="md.render(article.body)"></div>

          <template v-if="article.faq !== null">
            <div v-show="article.faq">
              <Faq :items="article.faq" />
            </div>
          </template>

          <template v-if="article.author">
            <NuxtLink
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 mt-10 mb-10"
              :to="{ name: 'author-slug', params: { slug: article.author.slug } }">
              <nuxt-img
                v-if="article.author.image"
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                :src="article.author.image"
                :preload="true"
                sizes='xs:300px sm:500px md:700px lg:1200px xl:1920px'
                width='1920px'
                height='1080px'
                fit='outside'
                format='webp'
                quality='80'
                :alt="article.author.full_name +', ' + article.author.job_title"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900">{{article.author.full_name}}</h5>
                <p class="mb-3 pt-3 text-xl text-gray-700 dark:text-gray-400">{{article.author.description}}</p>
              </div>
            </NuxtLink>
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
      <span class="mt-10 mb-4 text-4xl tracking-tight text-red-400 text-slate-800 font-extrabold">Content You May Be Interested In</span>
      <Articles :articles="article.relateds" :piece="6" />
    </div>
  </div>
</template>
<script>
import markdownit from 'markdown-it'

export default {
  components:{
    markdownit
  },
  data() {
    return {
      md: markdownit(),
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
            "url": this.article.image1200,
            "height": 628,
            "width": 1200
          },
          "datePublished": this.article.datePublished,
          "dateModified": this.article.dateModified,
          "author": {
            "@type": "Person",
            "name": this.article.author.full_name,
            "description": this.article.author.description,
            "jobTitle": this.article.author.job_title,
            "knowsAbout": [""],
            "image": this.article.author.image,
            "url": 'https://'+process.env.PUBLISH_URL + '/author/' + this.article.author.slug,
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
        },
        {
          "@type": "ImageObject",
          "inLanguage": "en_US",
          "@id": 'https://' + process.env.PUBLISH_URL + this.$route.path +"#primaryimage",
          "url": this.article.image1200,
          "contentUrl": this.article.image1200,
          "width": 1200,
          "height": 628,
          "caption": this.article.image_alt
        },
        {
          "@type": "WebPage",
          "@id": 'https://' + process.env.PUBLISH_URL + this.$route.path,
          "url": 'https://' + process.env.PUBLISH_URL + this.$route.path,
          "name": this.article.title,
          "isPartOf": {
            "@id": 'https://' + process.env.PUBLISH_URL +"/#website"
          },
          "primaryImageOfPage": {
            "@id": 'https://' + process.env.PUBLISH_URL +"/#primaryimage"
          },
          "image": {
            "@id": 'https://' + process.env.PUBLISH_URL +"/#primaryimage"
          },
          "thumbnailUrl": this.article.image1200,
          "datePublished": this.article.datePublished,
          "dateModified": this.article.dateModified,
          "description": this.article.description,
          "breadcrumb": {
            "@id": 'https://' + process.env.PUBLISH_URL +"/#breadcrumb"
          },
          "inLanguage": "en_US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": [
                'https://' + process.env.PUBLISH_URL + this.$route.path
              ]
            }
          ]
        }
      ]
    },
  },
  mounted() {

  },
  head() {
    return {
      title: this.article.meta_title + ' - '+process.env.SITE_TITLE,

      meta: [
        { hid: "description", name: "description", content: this.article.description},

        { property: 'og:title', content: this.article.title },
        { property: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: this.article.description },
        { property: 'og:image', content: this.article.image1200 },
        { property: 'og:image:url', content: this.article.image1200 },
        { property: 'og:image:secure_url', content: this.article.image1200 },
        { property: 'article:published_time', content: this.article.datePublished },
        { property: 'article:modified_time', content: this.article.dateModified },
        { property: 'og:updated_time', content: this.article.dateModified },
        { property: 'article:section', content: this.article.category },
        { property: 'fb:app_id', content: '12873892173892' },

        { itemprop: 'name', content: this.article.meta_title },
        { itemprop: 'headline', content: this.article.meta_title },
        { itemprop: 'description', content: this.article.description },
        { itemprop: 'image', content: this.article.image1200 },
        { itemprop: 'datePublished', content: this.article.datePublished },
        { itemprop: 'dateModified', content: this.article.dateModified },
        { name: 'author', content: this.article.author.full_name },

        { name:'twitter:title', content: this.article.meta_title },
        { name:'twitter:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },
        { name:'twitter:description', content: this.article.description },
        { name:'twitter:image', content: this.article.image1200 },
        { name:'twitter:site', content: '@GreetingBirds' },
        { name:'twitter:card', content: 'summary_large_image' },
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

