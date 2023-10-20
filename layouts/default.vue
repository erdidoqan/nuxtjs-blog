<template>
  <!-- Section 1 -->
  <section class="antialiased bg-white">
    <div class="mx-auto">
      <Header />
      <div class="mt-16">
        <Nuxt />
      </div>
      <TheFooter />
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
  methods: {
    OrganizationJsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": process.env.SITE_TITLE,
        "url": 'https://' + process.env.PUBLISH_URL,
        "logo": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
        "sameAs" : [
          "http://www.facebook.com/your-profile",
          "http://www.twitter.com/yourProfile",
          "http://plus.google.com/your_profile"
        ]
      }
    },
    websiteJsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": process.env.SITE_TITLE,
        "url": 'https://' + process.env.PUBLISH_URL,
        "logo": 'https://' + process.env.PUBLISH_URL + '/icons/icon.png',
      }
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://' + process.env.PUBLISH_URL + this.$route.path
        }
      ],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.websiteJsonld())
      },{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(this.OrganizationJsonld())
      }],
      __dangerouslyDisableSanitizers: ['script'],
    }
  }
};
</script>

<style></style>
