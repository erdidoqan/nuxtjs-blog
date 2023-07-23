<template>
  <nav itemscope itemtype="http://schema.org/SiteNavigationElement">
    <ul class="space-y-3">
      <li itemprop="hasPart" v-for="item in items">
        <a itemprop="url"
          class="font-semibold group-[.subheadings]:font-normal
          hover:text-pink-700 hover:underline
          underline-offset-4"
          :href="`#${item.id}`">
          <span itemprop="name">{{ item.content }}</span>
        </a>

        <TocList
          class="mt-3 ml-5 group subheadings"
          v-if="item.subheadings.length"
          :items="item.subheadings"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['items'],
  name: "TocList"
}
</script>

<style scoped>

</style>
