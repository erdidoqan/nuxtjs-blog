<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ article.createdAt }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <img
        src="https://pub-fb75283ac8564bffa221dee82a54590b.r2.dev/d949c708-1e73-4363-8a42-60114934edbe.jpg"
        loading="lazy"
        alt="auothor"
        v-lazy-load
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ siteMetadata.author }}
        </div>
        <a
          target="_blank"
          :href="siteMetadata.twitter"
          class="text-sky-500 hover:text-sky-600 dark:text-sky-400"
        >
          @{{ siteMetadata.twitter_user }}
        </a>
      </div>
    </div>
    <img
      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
      :src="article.image"
      v-lazy-load
    />
    <p class="text-center font-bold my-5">
      <span class="text-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
          {{ article.readDuration }}
      </span>
    </p>
    <div class="mt-5 flex-wrap inline-flex items-center">
      <NuxtLink
        v-for="tag in article.tags"
        :key="tag.title"
        class="rounded-xl bg-zinc-700 text-sm px-3 py-1 text-white transition-colors hover:bg-blue-500 mr-2 mb-2 last:mr-0"
        :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
        {{ tag.title }}
      </NuxtLink>
    </div>
    <p v-if="article.body" class="prose min-w-full mx-auto" v-html="$md.render(article.body)"></p>
  </div>
</template>
<script>

import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
    };
  },
  async asyncData({ $content, params, $axios}) {
    const article = await $axios.$get(process.env.API_URL + '/contents/' + params.slug,{
      timeout: 5000
    })

    return {
      article: article.data,
    };
    /*try {

    } catch (error) {
      console.error(error);
    }*/
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {

  },
  head() {
    //console.log(this.article.title);
    return {
      title: this.article.title,
      meta: [
        { hid: "description", name: "description", content: this.article.description},
        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: this.article.title },
        { hid: 'og:image', name: 'og:image', content: this.article.image },
      ],
    };
  },
};
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
