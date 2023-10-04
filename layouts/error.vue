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
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section
        class="text-gray-600 body-font"
        v-for="(category, key) in categories"
        :key="key"
      >
        <h3 class="mt-10 mb-4 text-2xl tracking-tight text-red-400 text-slate-800 font-extrabold">
          <NuxtLink :to="{ name: 'category-slug', params: { slug: category.slug } }">
            {{ category.name }}
          </NuxtLink>
        </h3>
        <NuxtLink
          :to="{ name: 'category-slug', params: { slug: subcategory.slug } }"
          v-for="(subcategory, key) in category.parent"
          :key="key"
          class="inline-flex items-center h-12 px-5 mr-3 text-lg mt-3 text-pink-700 transition-colors duration-150 border border-grey-100 rounded-lg focus:shadow-outline hover:bg-pink-700 hover:text-pink-100"
        >{{ subcategory.name }}
        </NuxtLink>
      </section>
    </div>
    <div class="mt-10 max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Articles :category="'blog'" :articles="categories.contents" />
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>
