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

export default {
  async asyncData({ $content, params, $axios }) {
    try {
      const authors = await $axios.$get(process.env.API_URL + '/authors')

      return {
        authors: authors.data
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
          { name: "About Us", url: "/about-us", ok: true },
          { name: "Authors", url: "/author", ok: false },
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
      title: "Authors - " + process.env.SITE_TITLE,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Authors - " + process.env.SITE_TITLE,
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
