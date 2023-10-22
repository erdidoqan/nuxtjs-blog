<template>
  <div class="md:flex mx-auto dark:bg-gray-900">
    <div>
      <div :class="'lg:grid-cols-'+piece" class="ltablet:grid-cols-3 grid w-full gap-6 grid-cols-2 sm:grid-cols-4">
        <div
          v-for="(article, key) in articles"
          :key="key"
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl group p-3"
        >

          <div class="relative">
            <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">

              <nuxt-img
                v-if="article.image"
                class="h-40 w-full rounded-lg object-cover"
                :src="article.image"
                format="webp"
                sizes="sm:320px lg:640px xl:768px"
                :alt="article.title"
                :quality="75"
                loading="eager"
                :preload="true"
              />
            </NuxtLink>
          </div>
          <div>
            <div class="mb-6 mt-3">
              <p class="font-heading text-base font-medium leading-snug line-clamp-4 text-gray-800 dark:text-gray-100">
                <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
                  {{ article.title }}
                </NuxtLink>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: null
    },
    piece: {
      type: Number,
      default: 4
    }
  },
  name: "Articles.vue"
}
</script>

<style scoped>

</style>
