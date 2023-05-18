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
};
</script>

<style></style>
