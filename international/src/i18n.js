import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './lang/en/translation.json'
import fr from './lang/fr/translation.json'
import hi from './lang/hi/translation.json'

i18n.use(initReactI18next).init({
    resources :{
        en : {translation:en},
        fr : {translation:fr},
        hi : {translation:hi}
    },
    fallbackLng : "en",
    interpolation:{
        escapeValue : false
    }
})

export default i18n


