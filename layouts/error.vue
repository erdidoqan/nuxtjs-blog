<template>
  <div>
    <div class="bg-gray-200 text-black h-40 text-center w-full"></div>
    <div class="w-full text-xs m-0 text-center normal-case border-b border-gray-200 p-2">
      <p class="">
        <span class="css-0 eidw0490">
          For over long years, we have diligently conducted independent research and product testing. When you make a purchase through our links, we may earn a commission.
        </span>
      </p>
    </div>
    <header class="pt-10 sm:text-center">

      <h1 class="mb-4 mt-5 text-center text-4xl tracking-tight text-slate-800 font-extrabold">
        ⚠️ No Posts Found
      </h1>
      <p class="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-400 p-5">
        We didn't find the posts for that URL.
      </p>
    </header>


  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>
