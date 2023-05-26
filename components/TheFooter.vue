<template>
  <footer>
    <div class="px-4 py-24 mx-auto overflow-hidden mt-20 sm:px-6 lg:px-8 bg-gray-100 rounded-t-xl">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">

        <div
          v-for="(footertag, key) in users"
          :key="key"
          class="px-5 py-2"
        >
          <a href="/quizzes" class="text-base hover:text-gray-400">
            {{ footertag.title }}
          </a>
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
        <a target="_blank" href="GreetingBirds" class="text-gray-400 cursor-pointer hover:text-gray-700">
          <span class="sr-only">Chrome</span>
          <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
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
    };
  },
  components: { },
};
</script>
