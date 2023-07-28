<template>
  <div class="md:flex mx-auto dark:bg-gray-900">
    <div>
      <div class="ltablet:grid-cols-6 grid w-full gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="(article, key) in articles"
          :key="key"
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl group p-3"
        >

          <div class="relative">
            <NuxtLink :to="{ name: category+'-slug', params: { slug: article.slug } }">
              <nuxt-img
                class="h-40 w-full rounded-lg object-cover"
                :src="article.image"
                preload
                loading="lazy"
                width="850"
                height="620"
                format="webp"
                sizes="sm:100vw md:50vw lg:400px"
                :alt="article.title +' '+ key"
              />
            </NuxtLink>
            <span class="inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Productivity</span>
          </div>
          <div>
            <div class="mb-6 mt-3">
              <p class="font-heading text-base font-medium leading-snug line-clamp-4 text-gray-800 dark:text-gray-100">
                <NuxtLink :to="{ name: category+'-slug', params: { slug: article.slug } }">
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
  props: ['articles','category'],
  name: "ArticlesRelated.vue"
}
</script>

<style scoped>

</style>
