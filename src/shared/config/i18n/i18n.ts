import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: _IS_DEV_,

    interpolation: {
      escapeValue: false
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  }).catch(e => {
    console.error(e)
  })
