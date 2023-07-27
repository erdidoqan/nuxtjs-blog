<template>
  <nav class="w-full mx-auto sticky top-0 z-50">
    <div class=" flex flex-col items-start justify-between border-b border-gray-400 bg-white p-2 mx-auto md:flex-row">
      <div
        class="navbar"
        :class="{ 'navbar--hidden': !showNavbar }">
        <NuxtLink to="/" class="flex items-center mb-2 font-medium text-gray-900 title-font md:mb-0">
          <nuxt-img src="/kalp-logo.svg" alt="logo" width="35" />
          <span class="h-8 text-pink-700 pl-2 text-2xl">{{ siteTitle }}</span>
        </NuxtLink>
      </div>

      <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu" class="flex overflow-x-auto w-full lg:w-9/12 items-center justify-center lg:justify-end text-base">
        <li itemprop="name" role="menuitem" v-for="item in navLinks" :key="item.path" class="text-center">
          <NuxtLink
            :to="item.path"
            itemprop="url"
            class="block md:inline-block px-2 py-1 hover:text-pink-700 hover:underline"
          >{{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import menu from "../data/menu";

export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: menu,
      siteTitle: process.env.SITE_TITLE,
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  computed: {
    title() {
      return process.env.API_URL;
    },
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-indigo-600;
}
.navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

@media (max-width: 768px) {
  .navbar.navbar--hidden {
    display: none;
    transform: translate3d(0, -100%, 0);
  }
}
</style>
