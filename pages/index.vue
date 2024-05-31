<template>
  <div>
    <div class="relative overflow-hidden bg-blue-800">
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
            <p>Your ultimate destination for everything dog-related! Whether you're a seasoned dog owner, a prospective pet parent, or simply an enthusiast of our four-legged friends, Paws & Breeds is here to provide you with all the information and resources you need.</p>

            <p>At Paws & Breeds, we cover a wide range of topics to help you understand and care for your dog better. Our extensive breed directory offers detailed profiles of various dog breeds, including their history, characteristics, temperament, and care needs. Whether you're curious about the loyal Labrador Retriever, the playful Pomeranian, or the majestic German Shepherd, you'll find in-depth information to help you make informed decisions.</p>

            <p>Beyond breed-specific information, we delve into essential aspects of dog care. From puppy training tips and behavioral guidance to nutritional advice and health care, our articles are designed to support you in every stage of your dog's life. We also provide expert advice on common issues such as grooming, exercise routines, and creating a safe, loving home environment for your pet.</p>

            <p>Our blog features heartwarming stories, expert interviews, and the latest news in the dog world. Join our community to share your experiences, seek advice, and connect with fellow dog lovers. Whether you're looking for tips on adopting a new puppy, training techniques for an older dog, or simply want to stay updated on dog-related topics, Paws & Breeds is your go-to resource.</p>

            <h2>Explore our site to find:</h2>
            <ul>
              <li><strong>Comprehensive Breed Profiles:</strong> Detailed information on various dog breeds to help you choose the right dog for your lifestyle.</li>
              <li><strong>Training and Behavior Tips:</strong> Practical advice to help you train your dog and address behavioral issues.</li>
              <li><strong>Health and Nutrition:</strong> Expert guidance on keeping your dog healthy and well-nourished.</li>
              <li><strong>Grooming and Care:</strong> Tips on grooming, maintaining hygiene, and ensuring your dog looks and feels their best.</li>
              <li><strong>Community Stories and Insights:</strong> Engaging stories and insights from dog owners and experts around the world.</li>
            </ul>

            <p>At Paws & Breeds, we believe that every dog deserves a loving home and that informed owners make for happier, healthier pets. Join us on this journey to celebrate the joy, loyalty, and companionship that dogs bring into our lives. Visit <strong>Paws & Breeds</strong> today and become part of our vibrant dog-loving community!</p>

            <h2>Small Dog Breeds: Discover the Perfect Tiny Companion</h2>
            <p>Our comprehensive guide on small dog breeds! If you're looking for a petite pooch that fits perfectly into your lifestyle, you've come to the right place. Small dogs are known for their adorable looks, lively personalities, and the convenience of their compact size. Whether you live in an apartment or simply prefer a smaller canine companion, small dog breeds offer a variety of options to suit your needs.</p>

            <p>At Paws & Breeds, we provide detailed profiles on a wide range of small dog breeds. From their history and characteristics to their temperament and care needs, our goal is to help you make an informed decision when choosing your next furry friend. Let's dive into the world of small dogs and discover the unique traits that make each breed special.</p>

            <h3>Why Choose a Small Dog?</h3>
            <p>Small dogs come with several advantages that make them an appealing choice for many pet owners:</p>
            <ul>
              <li><strong>Compact Size:</strong> Easy to handle and perfect for small living spaces.</li>
              <li><strong>Lower Maintenance:</strong> Generally require less food and exercise compared to larger breeds.</li>
              <li><strong>Travel-Friendly:</strong> Easier to take along on trips and fit into pet carriers.</li>
              <li><strong>Longer Lifespan:</strong> Many small breeds tend to live longer than their larger counterparts.</li>
            </ul>

            <h3>Popular Small Dog Breeds</h3>
            <p>Here are some of the most popular small dog breeds, each with its own unique charm and characteristics:</p>
            <ul>
              <li><strong>Chihuahua:</strong> Known for their tiny size and big personality, Chihuahuas are loyal and affectionate companions.</li>
              <li><strong>Pomeranian:</strong> These fluffy, energetic dogs are known for their playful nature and striking appearance.</li>
              <li><strong>French Bulldog:</strong> With their distinctive bat ears and charming demeanor, French Bulldogs are great companions for city dwellers.</li>
              <li><strong>Yorkshire Terrier:</strong> Small but spirited, Yorkies are known for their beautiful, silky coats and lively temperament.</li>
              <li><strong>Shih Tzu:</strong> Friendly and outgoing, Shih Tzus are perfect lap dogs with a history as royal companions.</li>
              <li><strong>Dachshund:</strong> With their long bodies and short legs, Dachshunds are curious and brave little dogs.</li>
            </ul>

            <h3>Caring for Small Dog Breeds</h3>
            <p>Caring for small dogs involves understanding their specific needs. Here are some tips to ensure your small dog stays happy and healthy:</p>
            <ul>
              <li><strong>Nutrition:</strong> Provide a balanced diet appropriate for their size and activity level. Small breeds often benefit from specially formulated small breed dog food.</li>
              <li><strong>Exercise:</strong> While they may need less exercise than larger breeds, regular walks and playtime are essential for their physical and mental well-being.</li>
              <li><strong>Training:</strong> Early socialization and training are crucial to manage their sometimes bold and independent nature.</li>
              <li><strong>Grooming:</strong> Regular grooming is important, especially for breeds with longer coats. This includes brushing, bathing, and dental care.</li>
              <li><strong>Health Care:</strong> Regular vet check-ups and vaccinations are vital to prevent and detect any health issues early.</li>
            </ul>

            <p>At Paws & Breeds, we're dedicated to helping you find the perfect small dog breed that fits your lifestyle. Explore our detailed breed profiles, care tips, and expert advice to ensure a happy, healthy life for your tiny companion. Join our community of dog lovers and share your experiences, seek advice, and celebrate the joy of having a small dog in your life!</p>

            <h2>Most Dangerous Dog Breeds: Understanding Risks and Responsibilities</h2>

            <p>While every dog has the potential to be a loving companion, some breeds are known for their strength, protective instincts, and potential for aggression. Understanding these breeds, their characteristics, and how to handle them responsibly is crucial for ensuring safety for both the dogs and the people around them.</p>

            <p>At Paws & Breeds, we aim to provide accurate and detailed information on various dog breeds to help current and prospective dog owners make informed decisions. In this guide, we will explore some of the breeds commonly regarded as dangerous, the reasons behind their reputations, and tips for responsible ownership.</p>

            <h3>What Makes a Dog Breed Dangerous?</h3>
            <p>Several factors contribute to a breed being labeled as dangerous. These include:</p>
            <ul>
              <li><strong>Size and Strength:</strong> Larger, more powerful breeds can inflict more damage if they become aggressive.</li>
              <li><strong>Protective Instincts:</strong> Breeds with strong guarding instincts can be more prone to aggression if not properly trained and socialized.</li>
              <li><strong>Temperament:</strong> Some breeds have a higher tendency towards aggression due to their genetic background.</li>
              <li><strong>History of Attacks:</strong> Breeds that have been involved in more reported attacks are often considered more dangerous.</li>
            </ul>

            <h3>List of Most Dangerous Dog Breeds</h3>
            <p>Here are some of the breeds commonly considered dangerous. It's important to note that individual behavior can vary widely, and responsible ownership plays a key role in managing these breeds:</p>
            <ul>
              <li><strong>American Pit Bull Terrier:</strong> Known for their strength and tenacity, Pit Bulls have a reputation for aggression but can be loving pets with proper training.</li>
              <li><strong>Rottweiler:</strong> Powerful and protective, Rottweilers require consistent training and socialization to manage their guarding instincts.</li>
              <li><strong>German Shepherd:</strong> Highly intelligent and loyal, German Shepherds can become aggressive if not properly trained and socialized.</li>
              <li><strong>American Bulldog:</strong> Strong and muscular, American Bulldogs can be territorial and require firm, consistent training.</li>
              <li><strong>Doberman Pinscher:</strong> Known for their alertness and loyalty, Dobermans need experienced handling to prevent aggressive behavior.</li>
              <li><strong>Chow Chow:</strong> Despite their fluffy appearance, Chow Chows can be aloof and aggressive without proper socialization.</li>
              <li><strong>Alaskan Malamute:</strong> Strong and independent, Malamutes require a lot of exercise and can become destructive if bored.</li>
              <li><strong>Wolf Hybrid:</strong> Part wolf and part domestic dog, these animals can be unpredictable and challenging to manage.</li>
            </ul>

            <h3>Tips for Responsible Ownership</h3>
            <p>Owning a potentially dangerous breed comes with significant responsibilities. Here are some tips to ensure safe and responsible ownership:</p>
            <ul>
              <li><strong>Proper Training:</strong> Invest in professional training to ensure your dog is well-behaved and responsive to commands.</li>
              <li><strong>Early Socialization:</strong> Expose your dog to various people, environments, and other animals from a young age to promote positive behavior.</li>
              <li><strong>Supervision:</strong> Always supervise interactions between your dog and unfamiliar people or animals.</li>
              <li><strong>Secure Environment:</strong> Ensure your home and yard are secure to prevent escapes and protect others.</li>
              <li><strong>Regular Exercise:</strong> Provide ample physical and mental stimulation to prevent boredom and destructive behavior.</li>
              <li><strong>Health Care:</strong> Regular vet check-ups are crucial to maintain your dog’s health and well-being.</li>
            </ul>

            <p>At Paws & Breeds, we believe that with proper care, training, and attention, any dog can be a wonderful companion. By understanding the risks and responsibilities associated with these powerful breeds, you can ensure a safe and loving environment for both your dog and those around you. Explore our site for more tips, resources, and breed profiles to help you on your journey as a responsible dog owner.</p>

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
