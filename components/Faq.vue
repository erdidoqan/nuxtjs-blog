<template>
  <div class="bg-gray-50 rounded p-5 border-slate-300" v-if="items.faq">
    <div class="prose text-xl">
      <h2 class="border-b-2 border-slate-300 inline-block font-bold tracking-wide text-slate-800">
        Frequently Asked Questions (FAQs)
      </h2>
      <div class="grid divide-y divide-neutral-200 mx-auto" itemscope="" itemtype="https://schema.org/FAQPage">
        <div class="py-5 pt-1" v-for="item in items.faq">
          <details class="group" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <div class="text-xl" itemprop="name">{{item.question}}</div>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
              </span>
            </summary>
            <div class="group-open:animate-fadeIn" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p class="text-neutral-600 mt-3" itemprop="text">
                {{item.answer}}
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['items'],
  name: "Faq",
  data() {

    return {
      title: 0,
      titles: null
    };
  },
}
</script>

<style scoped>

</style>
