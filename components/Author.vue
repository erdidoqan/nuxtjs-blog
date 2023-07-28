<template>
  <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
    <nuxt-img
      src="/images/author.jpeg"
      alt="author"
      preload
      loading="lazy"
      width="48"
      height="48"
      sizes="sm:48px md:50vw lg:96px"
      format="webp"
      class="mr-3 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800"
    />
    <div>
      <div class="text-slate-900 dark:text-slate-200">
        By:
        <NuxtLink to="/author">
          <u class="font-bold">{{ 'Yapay Yazar' }}</u>
        </NuxtLink>
      </div>
      <p class="text-center text-gray-400">
        Created: {{ articleCreated }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleCreated'],
  name: "Author.vue"
}
</script>

<style scoped>

</style>
