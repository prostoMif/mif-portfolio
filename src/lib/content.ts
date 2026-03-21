export type Locale = "ru" | "en";

export type Project = {
  slug: string;
  status: "Production" | "MVP / Demo" | "Concept";
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  details: Record<Locale, string>;
  stack: string[];
};

export const locales: Locale[] = ["ru", "en"];

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
    heroTitle: "Создаю сайты, ботов и автоматизацию под задачи бизнеса",
    heroText:
      "Я Михаил (mif), fullstack разработчик. Делаю понятные интерфейсы, backend-логику и интеграции. Иногда использую ИИ для ускорения типовых задач.",
    heroPrimary: "Смотреть проекты",
    heroSecondary: "Связаться",
    projectsTitle: "Избранные проекты",
    projectsText: "Часть кейсов - рабочие демо, часть - концепты и MVP.",
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
    contactText: "Пиши в Telegram или отправь сообщение через форму.",
    form: {
      name: "Имя",
      message: "Сообщение",
      submit: "Отправить",
      sent: "Сообщение отправлено (демо-режим).",
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
    heroTitle: "I build websites, bots and automation for business tasks",
    heroText:
      "I am Mikhail (mif), a fullstack developer. I build clean interfaces, backend logic and integrations. I also use AI when it helps speed up routine work.",
    heroPrimary: "View projects",
    heroSecondary: "Contact me",
    projectsTitle: "Selected projects",
    projectsText: "Some cases are working demos, some are concepts and MVPs.",
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
    contactText: "Message me on Telegram or use the contact form.",
    form: {
      name: "Name",
      message: "Message",
      submit: "Send",
      sent: "Message sent (demo mode).",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "untt",
    status: "MVP / Demo",
    title: {
      ru: "UnTT - Telegram бот для контроля тайминга роликов",
      en: "UnTT - Telegram bot for short video timing control",
    },
    short: {
      ru: "Помогает отслеживать лимиты времени для коротких видео.",
      en: "Helps track time limits for short-form videos.",
    },
    details: {
      ru: "Бот автоматизирует контроль длительности, чтобы не выходить за формат платформы.",
      en: "The bot automates duration checks so clips stay inside platform limits.",
    },
    stack: ["Python", "Telegram Bot API", "Scheduler"],
  },
  {
    slug: "fa",
    status: "MVP / Demo",
    title: {
      ru: "FA - фриланс-ассистент",
      en: "FA - freelance assistant",
    },
    short: {
      ru: "Ассистент для организации фриланс-задач и процессов.",
      en: "Assistant for organizing freelance tasks and workflows.",
    },
    details: {
      ru: "Проект в стадии прототипа: частично реализованы функции и структура системы.",
      en: "Prototype stage project: core structure and several features are implemented.",
    },
    stack: ["Python", "SQLite", "Automation"],
  },
  {
    slug: "price-tracker",
    status: "MVP / Demo",
    title: {
      ru: "Price Tracker Portfolio",
      en: "Price Tracker Portfolio",
    },
    short: {
      ru: "Отслеживает изменения цен на товары.",
      en: "Tracks product price changes.",
    },
    details: {
      ru: "Инструмент для мониторинга цен и фиксации динамики по выбранным позициям.",
      en: "Tool for monitoring prices and logging history for selected items.",
    },
    stack: ["Python", "Parsing", "Notifications"],
  },
  {
    slug: "restaurant-terrassa",
    status: "Concept",
    title: {
      ru: "Restaurant Terrassa - сайт ресторана",
      en: "Restaurant Terrassa - restaurant website",
    },
    short: {
      ru: "Демо-кейс сайта для ресторанного бизнеса.",
      en: "Demo website case for a restaurant business.",
    },
    details: {
      ru: "Показывает подачу меню, атмосферу бренда и простую коммуникацию с клиентом.",
      en: "Demonstrates menu presentation, brand atmosphere and simple client communication.",
    },
    stack: ["Frontend", "UI/UX", "Responsive"],
  },
  {
    slug: "vg2",
    status: "MVP / Demo",
    title: {
      ru: "VG2 - генерация коротких видео с нуля",
      en: "VG2 - short video generation from scratch",
    },
    short: {
      ru: "Скрипт автоматизации создания коротких видеороликов.",
      en: "Script that automates short video creation.",
    },
    details: {
      ru: "Конвейер генерации роликов для быстрого производства контента.",
      en: "Generation pipeline for fast content production.",
    },
    stack: ["Python", "Media processing", "Automation"],
  },
];
