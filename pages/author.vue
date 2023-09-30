<template>
  <div>
    <div class="bg-gray-200 text-black h-40 text-center w-full"></div>
    <div class="mt-6">
      <header class="pt-10 pb-5 sm:pb-16 sm:text-center">
        <div class="flex items-center sm:mx-3 justify-center">
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
        </div>
        <h1 class="mb-4 mt-5 text-4xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
          Yapay Yazar
        </h1>
        <h2 class="text-2xl mb-4 mt-5">
          Quotes Lab Product Analyst
        </h2>
        <p class="max-w-3xl mx-auto text-slate-700">
          Yapay Yazar is a Greetingbirds analyst, which he evaluates based on "Quotes" using
          specialized equipment and consumer tester data. Before starting Greetingbirds in 2022, she earned an MA in
          authoring and a BA in fiber science from Epoka University. While earning his Yazar degrees, he worked in smart
          and nanotechnology research laboratories.
        </p>
      </header>

      <div class="flex">
        <div class="xl:w-3/4 sm:w-full">
          <div class="p-4">
            <Articles :category="'blog'" :articles="articles" />
          </div>
        </div>
        <div class="xl:w-1/4 hidden lg:block">
          <div class="p-2 relative sticky top-0">
            <div class="mt-14">
              <div class="bg-gray-200 text-black h-[35rem] w-full"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";

export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
    };
  },
  async asyncData({$axios}) {
    const articles = await $axios.$get(process.env.API_URL + '/accounts/homepage')

    return {
      articles: articles.data,
    }
  },
  head: {
    title: process.env.SITE_TITLE,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: process.env.META_FAVICON_ICO }],
  },
};
</script>
