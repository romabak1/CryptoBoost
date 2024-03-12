import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Імпортуйте ваші переклади
import translationEN from '../lang/en.json'
import translationRU from '../lang/ru.json';

// Ресурси перекладу
const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next) // Передаємо i18n екземпляр до react-i18next
    .init({
        resources,
        lng: "ru", // Початкова мова
        keySeparator: false, // Ми не будемо використовувати ключі у вигляді шляхів

        interpolation: {
            escapeValue: false // React вже екранує за нас
        }
    });

export default i18n;