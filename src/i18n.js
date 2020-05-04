import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend'; 
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_nl from "./translations/nl/common.json";

i18n
  .use(LanguageDetector)
  .use(Backend) 
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    //ajout de ressource
    resources:{
                 en: {
                    common: common_en
                   },
                   de: {
                    common: common_de
                 },
                 nl: {
                   common: common_nl
                 },
                },
    backend: { 
      loadPath: '/locales//.json'
    }
    
  });
//   .init({
//     lng: "en",
//     //resources,
//     resources:{
//         en: {
//             translations:{
//                 'home.hello': "Hello, Welcome to my app."
//             } 
//           },
//           de: {
//             translations:{
//                 'home.hello': "Salut, Bienvenue dans mon app."
//             } 
//         },
//     },

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

  export default i18n;