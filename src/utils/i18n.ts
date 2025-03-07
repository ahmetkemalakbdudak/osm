import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations will go here
        },
      },
      de: {
        translation: {
          // German translations will go here
        },
      },
      tr: {
        translation: {
          // Turkish translations will go here
        },
      },
      hu: {
        translation: {
          // Hungarian translations will go here
        },
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 