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
        supportedLngs: ['en', 'ru'],
        debug: _IS_DEV_,

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    })
    .catch(e => {
        console.error(e)
    })

export default i18n
