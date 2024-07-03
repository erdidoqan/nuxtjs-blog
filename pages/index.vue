<template>
  <div>
    <div class="relative overflow-hidden bg-green-800" style="background-color: rgba(255, 165, 87, 255);">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl text-white font-bold tracking-tight text-gray-900 sm:text-6xl"> {{ title }} </h1>
            <p class="mt-4 text-white text-xl text-gray-500">{{ desc }}</p>

            <a v-for="(category, key) in homepage.categories" :href="'/category/'+category.slug+'/'" target="_blank" class="inline-flex items-center h-12 px-5 mr-3 text-lg mt-3 text-blue bg-white transition-colors duration-150 border border-grey-100 rounded-lg focus:shadow-outline hover:bg-pink-700 hover:text-pink-100">{{category.name}}</a>

          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img :src="imageUrl(0)" :alt="imageAlt(0)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(1)" :alt="imageAlt(1)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(2)" :alt="imageAlt(2)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(3)" :alt="imageAlt(3)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(4)" :alt="imageAlt(4)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(5)" :alt="imageAlt(5)" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img :src="imageUrl(6)" :alt="imageAlt(6)" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-2 mx-auto">
            <div class="flex mb-8 -m-4"><h2 class="text-3xl"><strong>Featured</strong> Posts</h2></div>

            <div class="flex flex-wrap -m-4">
              <Articles :articles="homepage.contents" />
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="mt-24">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-2 mx-auto">
            <div class="flex mb-8 -m-4"><h2 class="text-3xl"><strong>Our Latest</strong> by Category</h2></div>

            <div class="flex flex-wrap -m-4">
              <div
                v-for="(category, key) in homepage.categories"
                :key="key"
              >
                <h3 class="mt-10 mb-4 text-2xl tracking-tight text-red-400 text-slate-800">
                  <NuxtLink :to="{ name: 'category-slug', params: { slug: category.slug } }">
                    {{ category.name }}
                  </NuxtLink>
                </h3>
                <ul class="text-base leading-21px inline-block lg:flex lg:flex-wrap">
                  <li
                    v-for="(content, key) in category.contents"
                    :key="key"
                    class="p-3">
                    <a :href="'/'+content.slug+'/'" :title="content.title" target="_blank">{{ content.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="prose text-xl min-w-full p-2 mx-auto">
            <h2>The Enigmatic Side of Nature</h2>
            <p>
              Birdcins is the perfect platform for those who want to explore the fascinating world of birds. We offer comprehensive information on bird species, habitats, feeding habits, and much more. Are you ready to embark on a journey into nature?
            </p>

            <h2>Why Birdcins?</h2>

            <ul>
              <li><strong>Comprehensive Content:</strong> Detailed information on bird species from Turkey and around the world.</li>
              <li><strong>Training and Behavior Tips:</strong> Practical advice to help you train your birds and address behavioral issues.</li>
              <li><strong>Latest News:</strong> Up-to-date news on birdwatching, conservation efforts, and new discoveries.</li>
              <li><strong>Easy Access:</strong> A user-friendly interface filled with blog posts, guides, and visuals.</li>
              <li><strong>Community Stories and Insights:</strong> Engaging stories and insights from bird owners and experts around the world.</li>
            </ul>

            <h3>Popular Content</h3>

            <ul>
              <li><strong>Bird Species:</strong> Information on endemic bird species in Turkey and interesting species worldwide.</li>
              <li><strong>Birdwatching Guides:</strong> Techniques for birdwatching from beginner to advanced levels.</li>
              <li><strong>Bird Behaviors:</strong> Insights into intriguing bird behaviors, feeding habits, and breeding seasons.</li>
              <li><strong>Photo Gallery:</strong> Birds through the lenses of professional and amateur bird photographers.</li>
            </ul>


            <h2>Bird Species Categories</h2>
            <h3>1. Songbirds (Passerines):</h3>
            <ul>
              <li><strong>Characteristics:</strong> Small to medium-sized birds known for their vocal abilities.</li>
              <li><strong>Examples:</strong> Sparrows, finches, warblers, and robins.</li>
              <li><strong>Interesting Fact:</strong> Songbirds have a specialized vocal apparatus called the syrinx, which allows them to produce a wide range of sounds.</li>
            </ul>
            <h3>2. Birds of Prey (Raptors):</h3>
            <ul>
              <li><strong>Characteristics:</strong> Carnivorous birds with keen eyesight and sharp talons.</li>
              <li><strong>Examples:</strong> Eagles, hawks, falcons, and owls.</li>
              <li><strong>Interesting Fact:</strong> The peregrine falcon is the fastest bird, reaching speeds over 240 mph during a dive.</li>
            </ul>
            <h3>3. Waterfowl:</h3>
            <ul>
              <li><strong>Characteristics:</strong> Aquatic birds adapted to living in and around water.</li>
              <li><strong>Examples:</strong> Ducks, geese, swans, and pelicans.</li>
              <li><strong>Interesting Fact:</strong> Many waterfowl species are migratory, traveling thousands of miles between breeding and wintering grounds.</li>
            </ul>
            <h3>4. Seabirds:</h3>
            <ul>
              <li><strong>Characteristics:</strong> Birds that spend most of their lives at sea, coming to land mainly to breed.</li>
              <li><strong>Examples:</strong> Albatrosses, gulls, puffins, and penguins.</li>
              <li><strong>Interesting Fact:</strong> The albatross has the largest wingspan of any bird, reaching up to 12 feet.</li>
            </ul>
            <h3>5. Parrots (Psittacines):</h3>
            <ul>
              <li><strong>Characteristics:</strong> Brightly colored birds known for their intelligence and ability to mimic sounds.</li>
              <li><strong>Examples:</strong> Macaws, parakeets, cockatoos, and lovebirds.</li>
              <li><strong>Interesting Fact:</strong> The African grey parrot is famous for its remarkable ability to mimic human speech.</li>
            </ul>
            <h3>6. Flightless Birds:</h3>
            <ul>
              <li><strong>Characteristics:</strong> Birds that have evolved to live without the ability to fly.</li>
              <li><strong>Examples:</strong> Ostriches, emus, kiwis, and penguins.</li>
              <li><strong>Interesting Fact:</strong> The ostrich is the largest and fastest-running bird, capable of sprinting up to 45 mph.</li>
            </ul>

            <div class="content">
              <h2>Conservation Status</h2>
              <p>Many bird species are facing threats from habitat loss, climate change, and human activities. Organizations worldwide are working tirelessly to protect these species and their habitats. Notable efforts include breeding programs, habitat restoration, and public awareness campaigns. At Birdcins, we highlight these efforts and provide information on how you can contribute to bird conservation.</p>
            </div>
            <div class="content">
              <h2>Join the Birdwatching Community</h2>
              <p>Whether you're a seasoned birdwatcher or a curious beginner, Birdcins is here to guide you. Explore our in-depth articles, birdwatching tips, and photo galleries to enhance your knowledge and appreciation of these incredible creatures. Join our community and share your sightings and experiences with fellow bird enthusiasts!</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import markdownit from 'markdown-it'
import { getDictionary } from "@/plugins/translation"

export default {
  async asyncData({$axios}) {
    const homepage = await $axios.$get(process.env.API_URL + '/accounts/homepage')

    return {
      homepage: homepage.data,
    }
  },
  data() {
    return {
      title: process.env.META_TITLE,
      desc: process.env.META_DESC,
      md: markdownit(),
      dictionary: getDictionary(process.env.HTML_LANG),
    };
  },
  created() {

  },
  methods: {
    imageUrl(id){
      return this.homepage.images[id].image_url
    },
    imageAlt(id){
      return this.homepage.images[id].name
    }
  },
  head() {
    return {
      title: process.env.META_TITLE + ' - '+process.env.SITE_TITLE,
      meta: [
        { hid: "description", name: "description", content: process.env.META_DESC},
        { itemprop: "name", content: process.env.META_TITLE },
        { itemprop: "description", content: process.env.META_DESC },
        { itemprop: "image", content: '/icons/icon.png' },


        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: process.env.META_TITLE },
        { hid: 'og:description', name: 'og:description', content: process.env.META_DESC },
        { hid: 'og:url', name: 'og:url', content: 'https://' + process.env.PUBLISH_URL + this.$route.path },
        { hid: 'og:image', name:'og:image',content: '/icons/icon.png' },
        { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '/icons/icon.png' },

        { hid: 'twitter:image', name: 'twitter:image', content: '/icons/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: process.env.META_TITLE },
        { hid: 'twitter:description', name: 'twitter:description', content: process.env.META_TITLE },
        { hid: 'twitter:url', name: 'twitter:url', content: '/icons/icon.png' }
      ],
    }
  },
};
</script>
