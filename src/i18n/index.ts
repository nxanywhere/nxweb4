import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import transEN from './en.json'
import transTH from './th.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: transEN
            },
            th: {
                translation: transTH
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n