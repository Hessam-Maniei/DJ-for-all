console.log("Welcome to AllCFood!");

const translations = {
  en: {
    // MAIN PAGE
    title: "Welcome to ALLCFOOD",
    subtitle: "Best recipes and drinks",
    "menu-index": "Index",
    "menu-coffee": "Coffee & Tea",
    "menu-food": "Food",

    // CONTACT PAGE
    "contact-title": "Welcome to AllCfood Shop",
    "contact-text": "Here you can write for us instantly."
  },
  de: {
    // MAIN PAGE
    title: "Willkommen bei ALLCFOOD",
    subtitle: "Beste Rezepte und Getränke",
    "menu-index": "Startseite",
    "menu-coffee": "Kaffee & Tee",
    "menu-food": "Essen",

    // CONTACT PAGE
    "contact-title": "Willkommen im AllCfood Shop",
    "contact-text": "Hier können Sie uns sofort schreiben."
  },
  fa: {
    // MAIN PAGE
    title: "به آل‌سی‌فود خوش آمدید",
    subtitle: "بهترین دستور پخت‌ها و نوشیدنی‌ها",
    "menu-index": "صفحه اصلی",
    "menu-coffee": "قهوه و چای",
    "menu-food": "غذا",

    // CONTACT PAGE
    "contact-title": "به فروشگاه AllCfood خوش آمدید",
    "contact-text": "اینجا می‌توانید فوراً برای ما بنویسید."
  },
  ru: {
    // CONTACT PAGE ONLY
    "contact-title": "Добро пожаловать в магазин AllCfood",
    "contact-text": "Здесь вы можете написать нам мгновенно."
  }
};

function changeLanguage(lang) {
  for (const key in translations[lang]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[lang][key];
    }
  }
}
