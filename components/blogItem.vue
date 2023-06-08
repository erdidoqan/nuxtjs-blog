<template>
  <article class="p-4 md:w-1/3">
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: postSlug } }">
      <div class="h-full rounded-xl bg-blue-50 overflow-hidden">
        <img
          :src="postImage"
          alt=""
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          srcset=""
        />

        <div class="p-6">
          <h2
            class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
          >
            CATEGORY-1
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
            {{ postTitle }}
          </h1>
          <p class="text-gray-400 text-sm font-medium inline mt-1 mb-1">
            {{ postReadDuration }}
          </p>
          <p class="leading-relaxed mb-3">{{ postDescription }}</p>
          <div class="flex items-center flex-wrap">
            <button
              class="bg-cyan-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg"
            >
              More Detail
            </button>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: [
    "title",
    "description",
    "date",
    "slug",
    "image",
    "read_duration",
  ],
  data() {
    return {
      postTitle: this.title,
      postDescription: this.description,
      postSlug: this.slug,
      postImage: this.image,
      postReadDuration: this.read_duration,
      postDate: this.date,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style></style>
