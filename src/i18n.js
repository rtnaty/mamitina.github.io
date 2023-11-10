// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import frData from './locales/resume_fr.json';
import enData from './locales/resume_en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enData,
      },
      fr: {
        translation: frData,
      },
    },
    lng: 'fr', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
