import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources:  {
        en:{
            translation: {
                title  : 'Language'
            },
        },
        es:{
            translation : {
                title : 'Idioma'
            }
        }
    }
  });

export default i18n;
