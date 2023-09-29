<template>
  <ul class="space-y-3">
    <li v-for="item in items">
      <NuxtLink
        class="font-semibold group-[.subheadings]:font-normal
        hover:text-pink-700 hover:underline
        underline-offset-4"
        :to="`#${item.id}`">
        <span>{{ item.content }}</span>
      </NuxtLink>

      <TocList
        class="mt-3 ml-5 group subheadings"
        v-show="item.subheadings.length"
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
