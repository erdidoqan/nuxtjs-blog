<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:px-0">
    <div class="pt-6 pb-3">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Terms and Conditions
      </h1>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="prose min-w-full mx-auto">
              <p>
                Welcome to our website. These terms and conditions ("Terms") set forth the rules and regulations governing your use of our website. By accessing or using our website, you agree to be bound by these Terms and our
                <a href="/privacy-policy">Privacy Policy</a>. If you do not agree to these Terms or our Privacy Policy, please do not access or use our website.
              </p>
              <ol>
                <li>
                  <b>Use of Website</b> - You may use our website only for lawful purposes. You may not use it in any way that violates applicable laws, regulations or third-party rights.
                </li>
                <li>
                  <b>Intellectual Property</b> - Our website contains intellectual property owned or licensed by us, including but not limited to trademarks, copyrights, and other proprietary information. You may not use any of our intellectual property without our prior written consent.
                </li>
                <li>
                  <b>User Content</b> - By posting or submitting any content on our website, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any form, media, or technology.
                </li>
                <li>
                  <b>Limitation of Liability</b> - Under no circumstances shall we be liable for any direct, indirect, incidental, special, or consequential damages that result from your use or inability to use our website, or from any products or services obtained through our website.
                </li>
                <li>
                  <b>Indemnification</b> - You agree to indemnify and hold us harmless from any claims, damages, liabilities, costs, and expenses arising from your use of our website or any breach of these Terms.
                </li>
                <li>
                  <b>User Conduct</b> - You are responsible for any content that you post or submit on our website. You may not use our website to engage in any conduct that is unlawful, offensive, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                </li>
                <li>
                  <b>Termination</b> - We reserve the right to terminate your access to our website at any time, without prior notice, if we determine that you have violated these Terms or engaged in any conduct that we deem to be inappropriate.
                </li>
                <li>
                  <b>Governing Law</b> - These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we are located, without giving effect to any principles of conflicts of law.
                </li>
                <li>
                  <b>Dispute Resolution</b> - Any disputes arising from your use of our website shall be resolved through binding arbitration in the jurisdiction in which we are located. The arbitrator's decision shall be final and binding, and may be enforced in any court of competent jurisdiction.
                </li>
                <li>
                  <b>Severability</b> - If any provision of these Terms is found to be invalid or unenforceable, such provision shall be severed from these Terms and the remaining provisions shall remain in full force and effect.
                </li>
              </ol>
              <p>
                We reserve the right to modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for changes. Your continued use of our website after any modifications constitutes your acceptance of the revised Terms.
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
    title: "Md Solaiman | Projects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Some of Projects developed by Solaiman",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
