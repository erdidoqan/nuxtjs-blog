<template>
  <!-- Section 1 -->
  <section class="antialiased bg-white">
    <div class="mx-auto">
      <NewHeader />
      <div class="mt-16">
        <Nuxt />
      </div>
      <TheFooter />
    </div>
  </section>
</template>

<script>
import NewHeader from "../components/NewHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    NewHeader,
    TheFooter,
  },
  methods: {
    OrganizationJsonld() {
      return {
        "@context":"http://schema.org",
        "@type": "Organization",
        "name": process.env.SITE_TITLE,
        "legalName": process.env.SITE_TITLE,
        "url": process.env.PUBLISH_URL,
        "logo": process.env.PUBLISH_URL+'/icons/icon.png',
        "contactPoint":[
          {
            "@type":"ContactPoint",
            "telephone":"1-260-333-8946",
            "contactType":"customer service",
            "email":"info@greetingbirds.com"
          }
        ],
        "sameAs":[
          "https://www.facebook.com/greetingbirds",
          "https://twitter.com/greetingbirds",
          "https://www.instagram.com/greetingbirds/",
          "https://www.linkedin.com/company/greetingbirds/"
        ],
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"53926 Green Path Suite 840",
          "addressLocality":"South Dakota",
          "addressRegion":"Schmidtmouth",
          "postalCode":"35091-1209",
          "addressCountry":"en_US"
        },
        "founders":[
          {
            "@type":"Person",
            "name":"Erdi Doqan"
          },
          {
            "@type":"Person",
            "name":"Muzaffer Osmanoqlu"
          }
        ]
      }
    },
    websiteJsonld() {
      return {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "@id": 'https://' + process.env.PUBLISH_URL + '/#website',
          "name": process.env.SITE_TITLE,
          "url": 'https://' + process.env.PUBLISH_URL,
          "inLanguage": "en-US",
          "publisher": {
            "@id": 'https://' + process.env.PUBLISH_URL + '/#organization'
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
