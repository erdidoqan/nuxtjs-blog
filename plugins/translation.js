
const translations = {
  tr: () => ({
    companyTitle: 'Hızlı Erişim',
    footerTrendTitle: 'Trendler',
    footerLatestTitle: 'En Yeniler',
    footerSuggestion: 'Öneri İçerikler',
    footerCopy: 'Tüm hakları saklıdır.',
    homepage_detail: ''
  }),
  en: () => ({
    companyTitle: 'Company',
    footerTrendTitle: 'Trends',
    footerLatestTitle: 'Latest',
    footerSuggestion: 'Suggestions',
    footerCopy: 'All rights reserved.',
    homepage_detail: "Welcome to **Paws & Breeds**, your ultimate destination for everything dog-related! Whether you're a seasoned dog owner, a prospective pet parent, or simply an enthusiast of our four-legged friends, Paws & Breeds is here to provide you with all the information and resources you need.\n" +
      "\n" +
      "              At Paws & Breeds, we cover a wide range of topics to help you understand and care for your dog better. Our extensive breed directory offers detailed profiles of various dog breeds, including their history, characteristics, temperament, and care needs. Whether you're curious about the loyal Labrador Retriever, the playful Pomeranian, or the majestic German Shepherd, you'll find in-depth information to help you make informed decisions.\n" +
      "\n" +
      "              Beyond breed-specific information, we delve into essential aspects of dog care. From puppy training tips and behavioral guidance to nutritional advice and health care, our articles are designed to support you in every stage of your dog's life. We also provide expert advice on common issues such as grooming, exercise routines, and creating a safe, loving home environment for your pet.\n" +
      "\n" +
      "              Our blog features heartwarming stories, expert interviews, and the latest news in the dog world. Join our community to share your experiences, seek advice, and connect with fellow dog lovers. Whether you're looking for tips on adopting a new puppy, training techniques for an older dog, or simply want to stay updated on dog-related topics, Paws & Breeds is your go-to resource.\n" +
      "\n" +
      "              Explore our site to find:\n" +
      "              - **Comprehensive Breed Profiles**: Detailed information on various dog breeds to help you choose the right dog for your lifestyle.\n" +
      "              - **Training and Behavior Tips**: Practical advice to help you train your dog and address behavioral issues.\n" +
      "              - **Health and Nutrition**: Expert guidance on keeping your dog healthy and well-nourished.\n" +
      "              - **Grooming and Care**: Tips on grooming, maintaining hygiene, and ensuring your dog looks and feels their best.\n" +
      "              - **Community Stories and Insights**: Engaging stories and insights from dog owners and experts around the world.\n" +
      "\n" +
      "              At Paws & Breeds, we believe that every dog deserves a loving home and that informed owners make for happier, healthier pets. Join us on this journey to celebrate the joy, loyalty, and companionship that dogs bring into our lives. Visit **Paws & Breeds** today and become part of our vibrant dog-loving community!",
  }),
};

export const getDictionary = (locale) => {
  let _locale = locale

  if (locale in translations) {
    _locale = locale
  }

  return translations[_locale]()
};
