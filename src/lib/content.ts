export type Locale = "ru" | "en";

export type Project = {
  slug: string;
  /** Короткая метка статуса для карточек (RU/EN). */
  status: Record<Locale, string>;
  /** Небольшой визуальный маркер для карточки проекта. */
  icon: string;
  /** Индивидуальный акцент карточки. */
  accent: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  details: Record<Locale, string>;
  stack: string[];
};

export const locales: Locale[] = ["ru", "en"];

/** Telegram для контактов (без @ в username для ссылки). */
export const contactTelegram = {
  username: "prosto_m1f",
  url: "https://t.me/prosto_m1f",
} as const;

/**
 * Форма на странице контактов (компонент + `/api/contact` + Telegram уже готовы).
 * Поставь `true`, когда захочешь показать форму посетителям.
 */
export const CONTACT_FORM_ENABLED = false;

export const t = {
  ru: {
    brand: "mif.dev",
    role: "Fullstack разработчик",
    nav: {
      home: "Главная",
      projects: "Проекты",
      services: "Услуги",
      about: "Обо мне",
      contact: "Контакты",
    },
    heroTitle: "Создаю быстрые и аккуратные digital-решения для бизнеса",
    heroText:
      "Я Михаил (mif), fullstack разработчик. Помогаю запустить продукт от идеи до рабочего результата: интерфейс, backend, интеграции и автоматизация.",
    heroPrimary: "Смотреть проекты",
    heroSecondary: "Связаться",
    projectsTitle: "Избранные проекты",
    projectsText:
      "Есть полностью доведённые портфолио-кейсы «как заказ», демо и бот, готовый к запуску (пока не деплоил).",
    servicesTitle: "Услуги",
    servicesList: [
      "Лендинги и многостраничные сайты",
      "Telegram-боты и мини-автоматизация",
      "Интеграции API и панели управления",
      "MVP-прототипы для быстрого запуска",
    ],
    aboutTitle: "Обо мне",
    aboutText:
      "Работаю как fullstack: frontend, backend, базы, интеграции. Фокусируюсь на понятной архитектуре, скорости разработки и результате для клиента.",
    contactTitle: "Контакты",
    contactText: "Пиши в Telegram — отвечу там.",
    contactTextWithForm:
      "Пиши в Telegram или отправь сообщение через форму на сайте.",
    form: {
      name: "Имя",
      message: "Сообщение",
      submit: "Отправить",
      sent: "Сообщение отправлено. Отвечу в Telegram.",
      error:
        "Не удалось отправить. Напиши напрямую в Telegram: @prosto_m1f",
    },
  },
  en: {
    brand: "mif.dev",
    role: "Fullstack Developer",
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    heroTitle: "I build fast and polished digital solutions for business",
    heroText:
      "I am Mikhail (mif), a fullstack developer. I help launch products from idea to working result: interface, backend, integrations and automation.",
    heroPrimary: "View projects",
    heroSecondary: "Contact me",
    projectsTitle: "Selected projects",
    projectsText:
      "Portfolio-style briefs finished end-to-end, demos, and a bot ready to deploy (not launched yet).",
    servicesTitle: "Services",
    servicesList: [
      "Landing pages and multi-page websites",
      "Telegram bots and small automation",
      "API integrations and admin panels",
      "MVP prototypes for quick launch",
    ],
    aboutTitle: "About me",
    aboutText:
      "I work as a fullstack developer: frontend, backend, databases and integrations. I focus on clear architecture, fast delivery and practical client value.",
    contactTitle: "Contact",
    contactText: "Message me on Telegram — I'll reply there.",
    contactTextWithForm:
      "Message me on Telegram or use the contact form below.",
    form: {
      name: "Name",
      message: "Message",
      submit: "Send",
      sent: "Message sent. I'll reply on Telegram.",
      error: "Could not send. Message me on Telegram: @prosto_m1f",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "untt",
    icon: "⏱️",
    accent: "#c76f37",
    status: {
      ru: "Готов, не запущен",
      en: "Ready, not deployed",
    },
    title: {
      ru: "UnTT - Telegram бот для контроля тайминга роликов",
      en: "UnTT - Telegram bot for short video timing control",
    },
    short: {
      ru: "Помогает отслеживать лимиты времени для коротких видео.",
      en: "Helps track time limits for short-form videos.",
    },
    details: {
      ru: "Функционально бот готов, но проект в прод не выводил — не запускал.",
      en: "The bot is feature-complete for the intended scope; I have not deployed it to production yet.",
    },
    stack: ["Python", "Telegram Bot API", "Scheduler"],
  },
  {
    slug: "fa",
    icon: "🧠",
    accent: "#9a5b8d",
    status: {
      ru: "Демо / MVP",
      en: "Demo / MVP",
    },
    title: {
      ru: "FA - фриланс-ассистент",
      en: "FA - freelance assistant",
    },
    short: {
      ru: "Ассистент для организации фриланс-задач и процессов.",
      en: "Assistant for organizing freelance tasks and workflows.",
    },
    details: {
      ru: "Демо: задумка и часть функций есть, до рабочего продукта не доводил.",
      en: "Demo: concept and partial features; not brought to a full working product.",
    },
    stack: ["Python", "SQLite", "Automation"],
  },
  {
    slug: "price-tracker",
    icon: "📈",
    accent: "#3d8d7a",
    status: {
      ru: "Готов: портфолио по ТЗ",
      en: "Complete: portfolio brief",
    },
    title: {
      ru: "Price Tracker Portfolio",
      en: "Price Tracker Portfolio",
    },
    short: {
      ru: "Отслеживает изменения цен на товары.",
      en: "Tracks product price changes.",
    },
    details: {
      ru: "Довёл до конца как учебный кейс: сам придумал ТЗ в формате «как заказ». Реальный заказчик — не подключался.",
      en: "Finished end-to-end as a portfolio piece: I wrote the brief myself in a client-style format. No real client was involved.",
    },
    stack: ["Python", "Parsing", "Notifications"],
  },
  {
    slug: "restaurant-terrassa",
    icon: "🍽️",
    accent: "#b66b3e",
    status: {
      ru: "Готов: портфолио по ТЗ",
      en: "Complete: portfolio brief",
    },
    title: {
      ru: "Restaurant Terrassa - сайт ресторана",
      en: "Restaurant Terrassa - restaurant website",
    },
    short: {
      ru: "Сайт ресторана: визуал, структура, адаптив.",
      en: "Restaurant site: layout, visuals, responsive.",
    },
    details: {
      ru: "Довёл до конца как портфолио-кейс по вымышленному заказу: сам сформулировал задачу «как у клиента».",
      en: "Completed as a portfolio case for a fictional client brief I defined myself.",
    },
    stack: ["Frontend", "UI/UX", "Responsive"],
  },
  {
    slug: "vg2",
    icon: "🎬",
    accent: "#4e6ca8",
    status: {
      ru: "Демо / MVP",
      en: "Demo / MVP",
    },
    title: {
      ru: "VG2 - генерация коротких видео с нуля",
      en: "VG2 - short video generation from scratch",
    },
    short: {
      ru: "Скрипт автоматизации создания коротких видеороликов.",
      en: "Script that automates short video creation.",
    },
    details: {
      ru: "Демо-конвейер генерации роликов; не финальный продукт.",
      en: "Demo pipeline for short videos; not a final product.",
    },
    stack: ["Python", "Media processing", "Automation"],
  },
];
