<template>
  <div class="bg-slate-100 p-6">
    <h3
      class="border-b-2 border-slate-300 inline-block uppercase font-bold tracking-wide text-slate-800"
    >
      Contents:
    </h3>

    <div class="mt-5">
      <TocList :items="groupedHeadings" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Toc",
  data() {

    return {
      title: 0,
      titles: null
    };
  },
  methods: {
    slugify(str) {
        return String(str)
          .normalize('NFKD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
      }
  },
  computed: {
    groupedHeadings(){
      if (this.titles){
        let items = [...this.titles]

        for (let i = items.length - 1; i >= 0; i--){
          const currentItem = items[i]

          const parentItem = items.findLast((item, index) => {
            return item.level < currentItem.level && index < i
          })

          if (parentItem) {
            parentItem.subheadings.unshift(currentItem)
            items.splice(i,1)
          }
        }

        return items
      }
    }
  },
  mounted() {
    const headings = ref([])
    window.document
      .querySelector('#content')
      ?.querySelectorAll("h1, h2, h3, h4, h5, h6")
      .forEach(el => {

        let id = this.slugify(el.innerText)
        el.setAttribute("id",id)

        headings.value.push({
          id:id,
          level: parseInt(el.tagName.charAt(1), 10),
          content: el.innerText,
          subheadings: [],
        })
      })
    this.titles = headings.value
  },
}
</script>

<style scoped>

</style>
