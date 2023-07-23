<template>
  <ul class="space-y-3">
    <li v-for="item in items">
      <a
        class="font-semibold group-[.subheadings]:font-normal
        hover:text-pink-700 hover:underline
        underline-offset-4"
        :href="`#${item.id}`">
        {{ item.content }}
      </a>

      <TocList
        class="mt-3 ml-5 group subheadings"
        v-if="item.subheadings.length"
        :items="item.subheadings"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items'],
  name: "TocList"
}
</script>

<style scoped>

</style>
