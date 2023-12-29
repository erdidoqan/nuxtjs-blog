<template>
  <div>
    <div class="relative overflow-hidden bg-blue-900">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl text-white font-bold tracking-tight text-gray-900 sm:text-6xl"> {{ title }} </h1>
            <p class="mt-4 text-white text-xl text-gray-500">{{ desc }}</p>

            <a v-for="(category, key) in homepage.categories" href="" target="_blank" class="inline-flex items-center h-12 px-5 mr-3 text-lg mt-3 text-blue bg-white transition-colors duration-150 border border-grey-100 rounded-lg focus:shadow-outline hover:bg-pink-700 hover:text-pink-100">{{category.name}}</a>

          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img :src="imageUrl(0)" :alt="imageAlt(0)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(1)" :alt="imageAlt(1)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(2)" :alt="imageAlt(2)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(3)" :alt="imageAlt(3)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(4)" :alt="imageAlt(4)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(5)" :alt="imageAlt(5)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(6)" :alt="imageAlt(6)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-2 mx-auto">
            <div class="flex mb-8 -m-4"><h3 class="text-2xl"><strong>Our</strong> Latest</h3></div>

            <div class="flex flex-wrap -m-4">
              <Articles :articles="homepage.contents" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import markdownit from 'markdown-it'
import { getDictionary } from "@/plugins/translation"

export default {
  async asyncData({$axios}) {
    const homepage = await $axios.$get(process.env.API_URL + '/accounts/homepage')

    return {
      homepage: homepage.data,
    }
  },
  data() {
    return {
      title: process.env.META_TITLE,
      desc: process.env.META_DESC,
      md: markdownit(),
      dictionary: getDictionary(process.env.HTML_LANG),
    };
  },
  created() {

  },
  methods: {
    imageUrl(id){
      return this.homepage.images[id].image_url
    },
    imageAlt(id){
      return this.homepage.images[id].name
    }
  },
  head() {
    return {
      title: process.env.META_TITLE + ' - '+process.env.SITE_TITLE,
      meta: [
        { hid: "description", name: "description", content: process.env.META_DESC},
        { itemprop: "name", content: process.env.META_TITLE },
        { itemprop: "description", content: process.env.META_DESC },
        { itemprop: "image", content: '/icons/icon.png' },


        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: process.env.META_TITLE },
        { hid: 'og:description', name: 'og:description', content: process.env.META_DESC },
        { hid: 'og:url', name: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },
        { hid: 'og:image', name:'og:image',content: '/icons/icon.png' },
        { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '/icons/icon.png' },

        { hid: 'twitter:image', name: 'twitter:image', content: '/icons/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: process.env.META_TITLE },
        { hid: 'twitter:description', name: 'twitter:description', content: process.env.META_TITLE },
        { hid: 'twitter:url', name: 'twitter:url', content: '/icons/icon.png' }
      ],
    }
  },
};
</script>
