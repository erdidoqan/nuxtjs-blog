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
          <div class="prose text-xl min-w-full p-2 mx-auto" v-html="md.render(about.detail)"></div>
          <!-- component -->

          <div class="prose text-xl min-w-full mt-10">
            <h2 class="mb-2 text-[1.75rem] font-semibold text-dark">Our Executive Team</h2>
            <span class="text-[1.15rem] font-medium text-muted"> Meet our talented team, a dynamic group of experts driven by passion and innovation. </span>
          </div>

          <div class="flex flex-wrap -mx-3 mb-5">
            <div class="w-full max-w-full px-3 mb-6  mx-auto">
              <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
                <!-- card body  -->
                <div class="flex-auto block py-8 px-9">
                  <AuthorList :authors="authors" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/3 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class=" text-black h-[45rem] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import markdownit from 'markdown-it'

export default {
  async asyncData({params, $axios}) {
    const about = await $axios.$get(process.env.API_URL + '/pages/about-us')
    const authors = await $axios.$get(process.env.API_URL + '/authors')

    return {
      about: about.data,
      authors: authors.data
    };
  },
  data() {
    return {
      md: markdownit(),
    };
  },
  computed: {
    breadcrumbs() {
      return {
        lists: [
          { name: "Home", url: "", ok: true },
          { name: "About Us", url: "/about-us", ok: false },
        ],
      }
    }
  },
  head() {
    return {
      title: this.about.title,
      meta: [
        { hid: "description", name: "description", content: this.about.description},

        /*{ property: 'og:image', content: 'https://'+process.env.PUBLISH_URL + '/_nuxt/image/'+this.article.image_full.replace('contents/', '') },*/
      ],
    };
  },
};
</script>
