<template>
  <div>
    <div class="flex-1 pb-5 w-full mx-auto max-w-3xl px-6 pt-5">
      <h1 class="text-center">Tags</h1>

      <div>
        <ul class="flex flex-wrap text-xl lg:text-2xl justify-center">
          <li
            class="mx-4 my-2 md:my-3"
            v-for="tag in tags"
            :key="tag.title"
          >
            <NuxtLink class="rounded-xl  px-3 py-1 text-white bg-blue-500 hover:bg-zinc-700 mr-2 mb-2 last:mr-0"
              :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
              {{ tag.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <p class="prose border-t-2 text-center mt-10">

      </p>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ $content, params, $axios }) {
    const tags = await $axios.$get(process.env.API_URL + '/accounts/tags')

    return {
      tags: tags.data
    };
  },
  head: {
    title: process.env.SITE_TITLE + " | Tags",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Its Solaiman's Pen and Paper to write ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style>
h1 {
  margin-bottom: 2.5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  --tw-text-opacity: 1;
}
</style>
