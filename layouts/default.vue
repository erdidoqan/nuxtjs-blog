<template>
  <!-- Section 1 -->
  <section class="antialiased bg-white">
    <div class="mx-auto">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    TheHeader,
    TheFooter,
  },
  /*head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://' + process.env.PUBLISH_URL + this.$route.path + '/'
        }
      ]
    }
  }*/
};
</script>

<style></style>
