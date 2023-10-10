<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:px-0">
    <div class="pt-6 pb-3">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        CONTACT US
      </h1>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="prose min-w-full mx-auto">
              <p>
                Send us a email: <a href="mailto:greetingbirdscom@gmail.com">greetingbirdscom@gmail.com</a> <br>
                Welcome to our Contact Us page. If you have any questions, comments, or concerns, we encourage you to get in touch with us. We value your feedback and strive to provide exceptional customer service. Our team is always here to help.
              </p>
              <p>
                You can contact us by email, phone, or through the contact form on this page. Our email address is <a href="mailto:greetingbirdscom@gmail.com">greetingbirdscom@gmail.com</a>. If you prefer to speak to someone directly, you can reach us at [<a href="mailto:greetingbirdscom@gmail.com">greetingbirdscom@gmail.com</a>]. Our office hours are [06:00am - 08:00pm], and we are closed on <i>Sunday</i>.
              </p>
              <p>
                If you have a question about an order, please include your order number in your message. This will help us quickly locate your order and provide you with the information you need.
              </p>
              <p>
                We also welcome any <b>feedback</b> you may have about our products or services. Your input helps us improve and grow as a company. We appreciate your support and look forward to hearing from you.
              </p>
              <p>
                Thank you for choosing us and <u>have a great day</u>!
              </p>
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
    title: "Contact Us",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Send us a email: <a href=\"mailto:greetingbirdscom@gmail.com\">greetingbirdscom@gmail.com</a> <br> Welcome to our Contact Us page. If you have any questions, comments, or concerns, we encourage you to get in touch with us",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: '/favicon.ico' }],
  },
};
</script>
