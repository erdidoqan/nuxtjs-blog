<template>
  <div>
    <div class="ltablet:grid-cols-6 grid w-full gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      <div
        v-for="(article, key) in articles"
        :key="key"
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl group p-3"
      >

        <div class="relative">
          <NuxtLink :to="{ name: category + '-slug', params: { slug: article.slug } }">
            <nuxt-img :src="article.image" class="h-40 w-full rounded-lg object-cover" :alt="article.title +' '+ key" />
          </NuxtLink>
          <span class="inline-block px-3 font-sans transition-shadow duration-300 py-1 text-[0.65rem] rounded-full bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Productivity</span>
        </div>
        <div>
          <div class="mb-6 mt-3">
            <p class="font-heading text-base font-medium leading-snug line-clamp-2 text-gray-800 dark:text-gray-100">
              <NuxtLink :to="{ name: category + '-slug', params: { slug: article.slug } }">
                {{ article.title }}
              </NuxtLink>
            </p>
          </div>
          <div class="mt-auto flex items-center gap-2">
            <div class="relative inline-flex shrink-0 items-center justify-center outline-none h-8 w-8 rounded-full bg-muted-500/20 text-muted-500">
              <div class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                <nuxt-img src="/img/20.svg" class="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-8 w-8" alt="author" />
              </div>
            </div>
            <div class="leading-none">
              <h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight">
                Alejandro B.
              </h4>
              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span class="text-muted-400 font-sans text-xs">{{ article.read_duration }}</span>
              </div>
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
  name: "HomeArticles.vue"
}
</script>

<style scoped>

</style>
