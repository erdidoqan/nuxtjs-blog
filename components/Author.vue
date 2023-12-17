<template>
  <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
    <nuxt-img
      class="mr-3 w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800"
      :src="author.image"
      :alt="author.full_name +', ' + author.job_title"
      :preload="true"
      loading="lazy"
      width="150"
      height="150"
      sizes="xs:16vw sm:32vw md:50vw lg:80vw"
      fit="crop"
      format="webp"
    />
    <div>
      <div class="text-slate-900 dark:text-slate-200">
        By:
        <NuxtLink :to="{ name: 'author-slug', params: { slug: author.slug } }">
          <span class="font-bold underline">{{ author.full_name }}</span>
        </NuxtLink>
      </div>
      <p class="text-center text-gray-400">
        Published: <time :datetime="datePublished">{{ articleCreated }}</time>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleCreated','datePublished', 'author'],
  name: "Author.vue"
}
</script>

<style scoped>

</style>
