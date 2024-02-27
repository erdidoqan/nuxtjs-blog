<template>
  <footer>
    <div class="px-4 py-24 mx-auto overflow-hidden mt-20 sm:px-6 lg:px-8 bg-gray-100 rounded-t-xl">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> {{ dictionary.companyTitle }} </div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <NuxtLink to="/about-us/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  About Us
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/author/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  Authors
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/best/" target="_blank" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  Best List
                </NuxtLink>
              </li>

              <li class="mb-4">
                <NuxtLink to="/category/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  All Categories
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/terms-and-conditions/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  Terms and Conditions
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/privacy-policy/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/contact-us/" class="inline-flex items-center font-medium text-blue-600 hover:underline">
                  Contact Us
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ dictionary.footerTrendTitle }}</div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li v-for="trend of trends.data" class="mb-4">
                <NuxtLink
                  class="inline-flex items-center font-medium text-blue-600 hover:underline"
                  :to="'/'+trend.slug+'/'"
                  :title="'Best to ' + trend.name "
                >
                  <span>{{ trend.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ dictionary.footerLatestTitle }}</div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li v-for="last of lasest.data" class="mb-4">
                <NuxtLink
                  class="inline-flex items-center font-medium text-blue-600 hover:underline"
                  :to="'/'+last.slug+'/'"
                  :title="'Last to ' + last.name "
                >
                  <span>{{ last.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ dictionary.footerSuggestion }}</div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li v-for="suggestion of suggestions.data" class="mb-4">
                <NuxtLink
                  class="inline-flex items-center font-medium text-blue-600 hover:underline"
                  :to="'/'+suggestion.slug+'/'"
                  :title="'suggestion to ' + suggestion.name "
                >
                  <span>{{ suggestion.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">

        <NuxtLink to="/" class="flex items-center mb-2 font-medium text-gray-900 title-font md:mb-0">
          <nuxt-img
            :src="siteLogo"
            alt="logo"
            preload
            loading="lazy"
            format="webp"
            width="35"
            height="35"
            provider="static"
            quality="100"
          />
          <span class="h-8 text-blue-700 pl-2 text-2xl">{{ siteTitle }}</span>
        </NuxtLink>
      </nav>
      <div class="flex justify-center mt-6 space-x-6">
<!--        <a
          target="_blank"
          href="https://www.withquotes.com/30-andrew-tate-quotes/">
          Andrew Tate Quotes
        </a>-->
      </div>
      <p class="mt-4 text-xs text-center text-gray-400">
        © 2023 {{ siteName }}, {{ dictionary.footerCopy }}
      </p>
    </div>
  </footer>
</template>

<script>
import { getDictionary } from "/plugins/translation"

export default {
  data() {
    return {
      siteTitle: process.env.SITE_TITLE,
      siteLogo: '/icons/icon.png',
      siteName: process.env.SITE_TITLE,
      dictionary: getDictionary(process.env.HTML_LANG),
      trends: [],
      lasest: [],
      suggestions: []
    };
  },
  async fetch() {
    this.trends = await fetch(process.env.API_URL + '/footer?page=1',{
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_TOKEN}`
      }
    }).then(res => res.json())

    this.lasest = await fetch(process.env.API_URL + '/footer?page=2',{
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_TOKEN}`
      }
    }).then(res => res.json())

    this.suggestions = await fetch(process.env.API_URL + '/footer?page=3',{
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_TOKEN}`
      }
    }).then(res => res.json())
  },
};
</script>
