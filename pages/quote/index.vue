<template>
  <div>
    <header class="pt-16 pb-16 text-center">
      <h1 class="mb-4 text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
        💻 Quote
      </h1>
<!--      <p class="text-lg text-slate-700 dark:text-slate-400">
        All the latest Tailwind CSS news, straight from the&nbsp;team.
      </p>-->
    </header>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <article
              v-for="article in articles"
              class="p-4 md:w-1/3"
            >
              <NuxtLink :to="{ name: 'quote-slug', params: { slug: article.slug } }">
                <div class="h-full rounded-xl bg-blue-50 overflow-hidden">
                  <img :src="article.image" :alt="article.title" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" srcset="">

                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ article.category }}</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                      {{ article.title }}
                    </h1>
                    <p class="text-gray-400 text-sm font-medium inline mt-1 mb-1">{{ article.read_duration }}</p>
                    <p class="leading-relaxed mb-3">{{ article.description }}</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-cyan-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg">
                        More Detail
                      </button>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ $content, params, $axios }) {
    try {
      const articles = await $axios.$get(process.env.API_URL + '/category/quote')

      return {
        articles: articles.data
      };
    } catch (error) {
      console.error(error);
    }
  },
  head: {
    title: "Posts",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: " ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style></style>
