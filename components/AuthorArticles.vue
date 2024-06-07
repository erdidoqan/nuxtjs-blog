<template>



  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div
      v-for="(content, key) in contents"
      :key="key"
      class="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">

      <NuxtLink :to="{ name: 'slug', params: { slug: content.slug } }">

        <nuxt-img
          v-if="content.image"
          class="rounded-t-lg"
          :src="content.image"
          loading="eager"
          :preload="true"
          width="382"
          height="255"
          format="webp"
          sizes="sm:100vw md:50vw lg:640px xl:1200px"
          :alt="content.image_alt"
        />
      </NuxtLink>
      <div class="p-5">
          <h3 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">
            <NuxtLink :to="{ name: 'slug', params: { slug: content.slug } }">
              {{content.title}}
            </NuxtLink>
          </h3>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ content.description}}</p>

        <NuxtLink
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          :to="{ name: 'slug', params: { slug: content.slug } }">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </NuxtLink>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: null
    },
  },
  name: "AuthorArticles.vue"
}
</script>

<style scoped>

</style>
