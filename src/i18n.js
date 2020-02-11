import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt:{
                translations: {
                    "HowCanWe": "HowCanwe PT",
                    "Aboutus": "O Notário",
                }
            },
            es:{
                translations:{
                    "HowCanWe": "HowCanWe ES",
                    "Aboutus": "O Notário ES",
                }
            },
            fr:{
                translations:{
                    "HowCanWe": "HowCanWe FR",
                    "Aboutus": "O Notário FR",
                }
            },
            gb:{
                translations:{
                    "HowCanWe": "HowCanWe FR ",
                    "Aboutus": "O Notário GB",
                }
            }
        },
        fallbackLng: "pt",
        debug: true,

        ns: ["translations"],
        defaultNS: "translations",
        
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;