<template>
  <header class="pt-10">

    <h1 class="mb-4 mt-5 text-4xl tracking-tight text-slate-800 font-extrabold">
      No Posts Found
    </h1>
    <p class="max-w-3xl text-slate-700 dark:text-slate-400 p-5">
      We didn't find the posts for that URL.
    </p>

  </header>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>
