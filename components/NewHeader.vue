<template>
  <nav :class="mobileMenu ? '': 'fixed'" class="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

      <NuxtLink to="/"  class="flex items-center space-x-3 rtl:space-x-reverse">
        <nuxt-img
          src="/icons/icon.png"
          alt="logo"
          preload
          format="webp"
          width="40"
          height="40"
          provider="static"
          quality="100"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ siteTitle }}</span>
      </NuxtLink>
      <button @click="toggleMobileMenu" data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="mobileMenu ? 'block': 'hidden'" class="items-center justify-between w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-3.5 rtl:space-x-reverse">
          <li class="rounded-lg hover:bg-gray-50">About Us</li>
          <li
            class="rounded-lg hover:bg-gray-50"
            v-for="(menu, key) in menus.data"
            :key="key"
          >
            <button
              @click="toggle(key)"
              class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
              {{ menu.name }}
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-for="(menu, index) in menus.data"
      :key="index"
      :class="open === index ? 'block' : 'hidden'"
      class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-labelledby="mega-menu-full-dropdown-button">
          <li v-for="sub in menu.subcategories ">
            <NuxtLink
              :to="'/category/'+sub.slug+'/'"
              class="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              itemprop="url"
              :title="'Link to ' + sub.name "
            >
              <div class="font-semibold">{{ sub.name }}</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ sub.description }}</span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li v-for="trend in menu.trends">
            <NuxtLink
              :to="'/'+trend.slug+'/'"
              class="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              itemprop="url"
              :title="trend.name"
            >
              <div class="font-semibold">{{ trend.name }}</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ trend.description }}</span>
            </NuxtLink>
          </li>
        </ul>
        <ul class="hidden md:block">
          <li v-for="last in menu.lasest">
            <NuxtLink
              :to="'/'+last.slug+'/'"
              class="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              itemprop="url"
              :title="last.name"
            >
              <div class="font-semibold">{{ last.name }}</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ last.description }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
import MegaMenu from "./MegaMenu";

export default {
  name: "NewHeader",
  components: {
    MegaMenu,
  },
  data() {
    return {
      open: false,
      mobileMenu: false,
      siteTitle: process.env.SITE_TITLE,
      menus: []
    };
  },
  async fetch() {
    this.menus = await fetch(process.env.API_URL + '/menu',{
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_TOKEN}`
      }
    }).then(res => res.json())
  },
  watch: {
    $route() {
      this.open = false
      this.mobileMenu = false
    },
  },
  methods: {
    toggle(index) {
      console.log(index, this.open)
      if (index === this.open){
        this.open = false
      }else{
        this.open = index
      }
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu
      if (this.mobileMenu === false){
        this.open = false
      }
    },
  }
};
</script>

