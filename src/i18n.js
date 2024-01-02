import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        main: {
          hello: "Hello",
          "Welcome_to_my_website!": "Welcome to my website!",
          "Your age": "Your age",
          "current date": "Today is {{date, DATE_LONG}}",
        },
        error: {
          "message contents age": "Your Age is: {{age}}",
        },
      },
    },
    fa: {
      translation: {
        main: {
          hello: "سلام",
          "Welcome_to_my_website!": "به وب سایت ما خوش آمدید",
          "Your age": "سن کاربر",
          "current date": "امروز {{date, DATE_LONG}}",
        },
        error: {
          "message contents age": "سن شما: {{age}}",
        },
      },
    },
  },
});

export default i18n;
