<template>

  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="flex flex-wrap items-center justify-between mx-auto md:p-2 p-4">
      <NuxtLink to="/" class="flex items-center">
        <nuxt-img
          :src="siteLogo"
          alt="logo"
          preload
          width="35"
          height="35"
        />
        <span class="h-8 text-pink-700 pl-2 text-2xl">{{ siteTitle }}</span>
      </NuxtLink>
      <button @click="toggle" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <svg v-if="open" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="open ? 'block': 'hidden'" class="items-center sm:w-full justify-end md:w-4/5 md:flex md:order-1" id="navbar-sticky">
        <ul
            class="flex flex-col mt-4 md:flex-row md:mt-0 md:border-0 md:bg-white "
        >
          <li v-for="menu of menus.data">

            <NuxtLink
              :to="'/category/'+menu.slug+'/'"
              class="block md:p-0 p-3 md:inline-block hover:text-pink-700 hover:underline"
            >{{ menu.name }}
            </NuxtLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      open: false,
      siteTitle: process.env.SITE_TITLE,
      siteLogo: process.env.META_FAVICON_PNG,
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
  methods: {
    toggle() {
      this.open = !this.open
    },
  }
};
</script>

