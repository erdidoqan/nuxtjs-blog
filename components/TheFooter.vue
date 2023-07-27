<template>
  <footer>
    <div class="px-4 py-24 mx-auto overflow-hidden mt-20 sm:px-6 lg:px-8 bg-gray-100 rounded-t-xl">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">

        <NuxtLink to="/" class="flex items-center mb-2 font-medium text-gray-900 title-font md:mb-0">
          <nuxt-img
            src="/kalp-logo.svg"
            alt="logo"
            preload
            loading="lazy"
            width="35"
            height="35"
          />
          <span class="h-8 text-pink-700 pl-2 text-2xl">{{ siteTitle }}</span>
        </NuxtLink>

        <div class="px-5 py-2">
          <NuxtLink to="/about-us" class="text-base hover:text-gray-400">
            About Us
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/terms-and-conditions" class="text-base hover:text-gray-400">
            Terms and Conditions
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/privacy-policy" class="text-base hover:text-gray-400">
            Privacy Policy
          </NuxtLink>
        </div>
        <div class="px-5 py-2">
          <NuxtLink to="/contact-us" class="text-base hover:text-gray-400">
            Contact Us
          </NuxtLink>
        </div>

      </nav>
      <div class="flex justify-center mt-6 space-x-6">
        <a target="_blank" href="https://twitter.com/GreetingBirds" class="text-gray-400 cursor-pointer hover:text-gray-700">
          <span class="sr-only">Twitter</span>
          <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
        <a target="_blank" href="mailto:greetingbirdscom@gmail.com" class="text-gray-400 cursor-pointer hover:text-gray-700">
          <span class="sr-only">Email</span>
          <svg class="inline-block w-6 h-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path></svg> </a>
        <a target="_blank" href="https://greetingbirds.com/blog/taylor-swift-graduation-quotes-inspiring-words-for-your-big-day" class="text-gray-400 cursor-pointer hover:text-gray-700">
          graduation day quotes
        </a>
        <a target="_blank" href="https://greetingbirds.com/blog/65-proud-daughter-and-mom-quotes-perfect-for-birthdays-and-special-occasions" class="text-gray-400 cursor-pointer hover:text-gray-700">
          proud daughter quotes
        </a>
      </div>
      <p class="mt-4 text-xs text-center text-gray-400">
        © 2023 GreetingBirds, All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";


export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
      siteTitle: process.env.SITE_TITLE
    };
  },
};
</script>
