<template>
  <!-- Section 1 -->
  <section class="antialiased bg-white">
    <div class="mx-auto">
      <Header />
      <div class="mt-16">
        <Nuxt />
      </div>

    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    Header,
    TheFooter,
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://' + process.env.PUBLISH_URL + this.$route.path
        }
      ]
    }
  }
};
</script>

<style></style>
