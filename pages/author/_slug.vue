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
    <div class="px-4 mx-auto sm:px-6 xl:max-w-[95%] xl:px-0 mt-10">
      <div class="flex">
        <div class="xl:w-1/5 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class=" text-black h-[45rem] w-full"></div>
            </div>
          </div>
        </div>
        <div class="xl:w-3/4 sm:w-full">
          <Breadcrumbs :lists="breadcrumbs.lists" />

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 mt-5">
            <nuxt-img
              v-if="author.image"
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              :src="author.image"
              loading="eager"
              :preload="true"
              width="500"
              height="500"
              format="webp"
              sizes="sm:100vw md:50vw lg:640px xl:1200px"
              :alt="author.full_name +', ' + author.job_title"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900">{{author.full_name}}</h1>
              <p class="mb-3 text-xl text-gray-700 dark:text-gray-400">{{author.full_name+', '+author.job_title}}</p>
            </div>
          </div>


          <div class="prose text-xl min-w-full p-2 mt-10 mx-auto" v-html="md.render(author.about)"></div>
          <!-- component -->
        </div>
        <div class="xl:w-1/3 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class=" text-black h-[45rem] w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="mt-10 mb-4 text-4xl tracking-tight text-red-400 text-slate-800 font-extrabold">The latest from {{author.name}}</h2>
      <AuthorArticles :contents="author.contents" />
    </div>
  </div>
</template>

<script>

import markdownit from "markdown-it";

export default {
  data() {
    return {
      md: markdownit({
        html: true,
        linkify: true,
        typographer: true,
      }),
    };
  },
  async asyncData({params, $axios}) {
    const author = await $axios.$get(process.env.API_URL + '/authors/' + params.slug)

    return {
      author: author.data
    };
  },
  computed: {
    breadcrumbs() {
      return {
        lists: [
          { name: "Home", url: "", ok: true },
          { name: "Authors", url: "/author", ok: true },
          { name: this.author.full_name, url: '/author/'+this.author.slug, ok: false },
        ],
      }
    }
  },
  methods: {
    jsonld() {
      return [
        {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "about": {
            "@type": "Person",
            "name": this.author.full_name,
            "description": this.author.description,
            "jobTitle": this.author.job_title,
            "knowsAbout": [""],
            "image": 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '')
          },
          "mainEntity": {
            "@type": "Person",
            "name": this.author.full_name,
            "description": this.author.description,
            "jobTitle": this.author.job_title,
            "knowsAbout": [""],
            "image": 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '')
          }
        }
      ]
    },
  },
  head() {
    return {
      title: this.author.full_name + ', ' + this.author.job_title,
      meta: [
        { hid: "description", name: "description", content: this.author.description},

        { hid: 'og:title', name: 'og:title', content: this.author.full_name + ', ' + this.author.job_title },
        { hid: 'og:description', name: 'og:description', content: this.author.description },
        { hid: 'og:image', property: 'og:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '') },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '') },
        { hid: 'og:url', name: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },

        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '') },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image_text.replace('authors/', '') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.author.full_name },
        { hid: 'twitter:description', name: 'twitter:description', content: this.author.description },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path }

        /*{ property: 'og:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.author.image.replace('contents/', '') },*/
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
