import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export function initI18nextTest() {
  i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      debug: false,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      resources: { en: { translations: {} } },
    }).catch(e => {
      console.error(e)
    })
}

export default i18n
