<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:px-0">
    <div class="pt-6 pb-3">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        ABOUT US
      </h1>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="prose min-w-full mx-auto">
              <p>
                Welcome to our website! We are a team of passionate individuals who share a common goal - to provide the best possible products and services to our customers. Our journey started with a simple idea - to create something that would make people's lives easier and better. Today, we are proud to say that we have come a long way in achieving our goals.
              </p>
              <p>
                At our core, we believe in creativity, innovation, and excellence. We constantly strive to improve our products and services, and we are always looking for new ways to make a positive impact on the world. We take pride in our work and are committed to delivering exceptional results to our customers.
              </p>
              <p>
                Our team is made up of talented individuals from diverse backgrounds, each bringing their unique skills and perspectives to the table. We believe in creating a culture of collaboration, where everyone's ideas are valued and respected. We work together towards a common vision, and we celebrate our successes as a team.
              </p>
              <p>
                Above all, we are driven by our passion for making a difference. We believe that through hard work, dedication, and a commitment to excellence, we can achieve great things. We invite you to join us on this journey, and we look forward to serving you with the best possible products and services.
              </p>
              <a href="https://greetingbirds.com/blog/love-advice-for-your-online-friend-expert-tips-for-effective-communication">giving love advice to an online friend</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import projectsData from "../data/projects";
export default {
  data() {
    return {
      projectsData: projectsData,
    };
  },
  head: {
    title: "About Us",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: process.env.META_FAVICON_ICO }],
  },
};
</script>
