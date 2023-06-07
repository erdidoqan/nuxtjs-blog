<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1
        class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"
      >
        Blog
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        All the latest Tailwind CSS news, straight from the&nbsp;team.
      </p>
    </header>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <!-- component -->
      <!-- component -->
      <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
        >
          <div class="flex flex-col items-center sm:px-5 md:flex-row">
            <div
              class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2"
            >
              <div
                class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5"
              >
                <div
                  class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block"
                >
                  <p class="inline">
                    <svg
                      class="w-3.5 h-3.5 mr-1"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </p>
                  <p class="inline text-xs font-medium">New</p>
                </div>
                <a
                  class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"
                  >Write anything. Be creative.</a
                >
                <div class="pt-2 pr-0 pb-0 pl-0">
                  <p class="text-sm font-medium inline">author:</p>
                  <a
                    class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline"
                    >Jack Sparrow</a
                  >
                  <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, April 2021 ·
                  </p>
                  <p
                    class="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1"
                  >
                    1hr 20min. read
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="block">
                <img
                  src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                  class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <article
              class="p-4 md:w-1/3"
              v-for="(article, index) in articles"
              :key="index"
            >
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div class="h-full rounded-xl bg-blue-50 overflow-hidden">
                  <img
                    :src="article.image"
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
                    <h1
                      class="title-font text-lg font-medium text-gray-600 mb-3"
                    >
                      {{ article.title }}
                    </h1>
                    <p
                      class="text-gray-400 text-sm font-medium inline mt-1 mb-1"
                    >
                      {{ article.read_duration }}
                    </p>
                    <p class="leading-relaxed mb-3">{{ article.description }}</p>
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
          </div>
          <pagination
            :total-pages="totalPages"
            :total="total"
            :per-page="perPage"
            :current-page="currentPage"
            :has-more-pages="hasMorePages"
            @pagechanged="getArticles"
            v-if="total"
          ></pagination>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      articles: [],
      page: 1,
      totalPages: 4,
      total: 40,
      perPage: 20,
      currentPage: 1,
      hasMorePages: true,
    };
  },
  watch: {
    $route: function () {
      this.getArticles();
    },
  },
  created: function () {
    this.getArticles();
  },
  methods: {
    async getArticles(page) {
      const parameterPage = page || this.page;
      const response = await this.$axios.$get(
        `${process.env.API_URL}/contents?page=${parameterPage}`
      );
      this.articles = response.data;
      this.totalPages = response.meta.last_page;
      this.total = response.meta.total;
      this.currentPage = parameterPage;
      this.hasMorePages = response.meta.last_page !== parameterPage;
    },
  },
  head: {
    title: "Blogs",
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

<style></style>
