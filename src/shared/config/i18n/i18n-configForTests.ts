import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export function initI18nextTest() {
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            lng: 'en',
            fallbackLng: 'en',
            supportedLngs: ['en'],
            debug: true,
            interpolation: {
                escapeValue: false, // not needed for react!!
            },
            react: {
                useSuspense: false,
            },
            backend: {
                loadPath: '/locales/en/{{ns}}.json',
            },
        })
        .catch(e => {
            console.error(e)
        })
}

export default i18n
