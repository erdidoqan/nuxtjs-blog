<template>
  <div>
    <div class="relative overflow-hidden bg-pink-900">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl text-white font-bold tracking-tight text-gray-900 sm:text-6xl"> Find the Best Makeup, hair care and beauty </h1>

            <ul class="max-w-md space-y-1 mt-5 text-white list-inside text-xl">
              <li class="flex items-center">
                <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                Exploring the exquisite details to unveil the most captivating features, sparing you the need to read the fine print.
              </li>
              <li class="flex items-center">
                <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                Helping you find Makeup, hair care and beauty
              </li>
              <li class="flex items-center">
                <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                Objective news, expert reviews and comparisons
              </li>
            </ul>


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

    <div class="max-w-3xl px-4 mt-5 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <ul class="text-base leading-21px inline-block lg:flex lg:flex-wrap">
        <li
          v-for="(category, key) in best"
          :key="key"
          class="p-3">
          <a :href="'/'+category.slug+'/'" :title="category.title" target="_blank">{{ category.tag_title }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  async asyncData({$axios}) {
    const best = await $axios.$get(process.env.API_URL + '/search/best')

    return {
      best: best.data,
    }
  },
  data() {
    return {
      title: process.env.META_TITLE,
    };
  },
  methods: {
    imageUrl(id){
      return this.best[id].image
    },
    imageAlt(id){
      return this.best[id].title
    }
  },
  head() {
    return {
      title: 'Find the Best Makeup, hair care and beauty - '+process.env.SITE_TITLE,
      meta: [
        { hid: "description", name: "description", content: 'Discover the perfect  Makeup, hair care and beauty to make your loved ones special day even more memorable'},
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
