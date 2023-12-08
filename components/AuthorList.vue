<template>
  <div>
    <div class="flex flex-wrap w-full">
      <div
        v-for="(author, key) in authors"
        :key="key"
        class="flex flex-col mr-5 text-center mb-11 lg:mr-16"
      >
        <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
          <NuxtLink
            :to="{ name: 'author-slug', params: { slug: author.slug } }">
          <nuxt-img
            v-if="author.image"
            class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
            :src="author.image"
            loading="eager"
            :preload="true"
            width="200"
            height="200"
            format="webp"
            sizes="sm:100vw md:50vw lg:640px xl:1200px"
            :alt="author.full_name +', ' + author.job_title"
          />
          </NuxtLink>
        </div>
        <div class="text-center">

          <NuxtLink
            class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
            :to="{ name: 'author-slug', params: { slug: author.slug } }">
            {{ author.full_name }}
          </NuxtLink>
          <span class="block font-medium text-muted">{{ author.job_title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['authors'],
  name: "AuthorList.vue"
}
</script>

<style scoped>

</style>
