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
        "@type":[
          "Corporation",
          "Organization"
        ],
        "@id": process.env.PUBLISH_URL+"/#organization",
        "name": process.env.SITE_TITLE,
        "url": process.env.PUBLISH_URL,
        "sameAs":[
          "https://www.facebook.com/greetingbirds",
          "https://twitter.com/greetingbirds"
        ],
        "email":"rhett.oconner@walker.com",
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"4066 Schmeler Knoll, 05396",
          "addressLocality":"New Neva",
          "addressRegion":"California",
          "postalCode":"05396",
          "addressCountry":"USA"
        },
        "logo":{
          "@type":"ImageObject",
          "@id": process.env.PUBLISH_URL+"/#logo",
          "url": process.env.PUBLISH_URL+"/icons/icon.png",
          "contentUrl": process.env.PUBLISH_URL+"/icons/icon.png",
          "caption": process.env.SITE_TITLE,
          "inLanguage":"en",
          "width":"512",
          "height":"512"
        },
        "contactPoint":[
          {
            "@type":"ContactPoint",
            "telephone":"824-766-2037",
            "contactType":"customer support"
          }
        ],
        "location":{
          "@id": process.env.PUBLISH_URL+"/#place"
        }
      }
    },
    PlaceJsonld() {
      return {
        "@type":"Place",
        "@id": process.env.PUBLISH_URL + "/#place",
        "geo":{
          "@type":"GeoCoordinates",
          "latitude":"36.2659575",
          "longitude":"-115.1301159"
        },
        "hasMap":"https://www.google.com/maps/search/?api=1&amp;query=36.2659575,-115.1301159",
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"4066 Schmeler Knoll, 05396",
          "addressLocality":"New Neva",
          "addressRegion":"California",
          "postalCode":"05396",
          "addressCountry":"USA"
        }
      }
    },
    websiteJsonld() {
      return {
        "@type":"WebSite",
        "@id": process.env.PUBLISH_URL+"/#website",
        "url": process.env.PUBLISH_URL,
        "name": process.env.SITE_TITLE,
        "publisher":{
          "@id": process.env.PUBLISH_URL+"/#organization"
        },
        "inLanguage":"tr",
        "potentialAction":{
          "@type":"SearchAction",
          "target": process.env.PUBLISH_URL+"/?s={search_term_string}",
          "query-input":"required name=search_term_string"
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
    },{
      type: 'application/ld+json',
      innerHTML: JSON.stringify(this.PlaceJsonld())
    }],
      __dangerouslyDisableSanitizers: ['script'],
    }
  }
};
</script>

<style></style>
