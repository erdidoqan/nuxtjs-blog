
const translations = {
  tr: () => ({
    companyTitle: 'Hızlı Erişim',
    footerTrendTitle: 'Trendler',
    footerLatestTitle: 'En Yeniler',
    footerSuggestion: 'Öneri İçerikler',
    footerCopy: 'Tüm hakları saklıdır.',
  }),
  en: () => ({
    companyTitle: 'Company',
    footerTrendTitle: 'Trends',
    footerLatestTitle: 'Latest',
    footerSuggestion: 'Suggestions',
    footerCopy: 'All rights reserved.',
  }),
};

export const getDictionary = (locale) => {
  let _locale = locale

  if (locale in translations) {
    _locale = locale
  }

  return translations[_locale]()
};
