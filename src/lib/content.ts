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
  challenge: Record<Locale, string>;
  approach: Record<Locale, string>;
  result: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  /** Технологии проекта — выводятся как теги на карточке и в кейсе. */
  tags: string[];
  /** Рабочее демо (Render/Vercel и т.п.). null — пока не задеплоено. */
  liveLink: string | null;
  /** Репозиторий. null — исходники не публичные. */
  githubLink: string | null;
};

export const locales: Locale[] = ["ru", "en"];

/**
 * Базовый URL сайта. Используется для Open Graph (og:url, абсолютный путь
 * к картинке превью) и metadataBase. Поменяй на свой домен после деплоя.
 */
export const SITE_URL = "https://mif-portfolio.vercel.app";

/** Telegram для контактов (без @ в username для ссылки). */
export const contactTelegram = {
  username: "prosto_m1f",
  url: "https://t.me/prosto_m1f",
} as const;

/**
 * Форма на странице контактов (компонент + `/api/contact` + Telegram уже готовы).
 * Чтобы форма реально отправляла сообщения, задай в переменных окружения
 * TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.
 */
export const CONTACT_FORM_ENABLED = true;

/** Технологии для секции «Навыки». slug — ключ иконки в TechBadge. */
export const skills: { name: string; slug: string }[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "TypeScript", slug: "typescript" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Tailwind CSS", slug: "tailwind" },
  { name: "Git", slug: "git" },
];

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
    heroTitle:
      "Fullstack-разработчик. Делаю сайты, боты и приложения под ключ за 1–3 дня",
    heroText:
      "Закрываю весь цикл — от идеи до запуска: интерфейс, backend, интеграции и Telegram-боты. Быстро, прозрачно, с результатом, который можно сразу запускать.",
    heroPrimary: "Смотреть проекты",
    heroTelegram: "Написать в Telegram",
    skillsTitle: "Навыки и стек",
    skillsText: "Технологии, на которых я собираю проекты под ключ.",
    projectsTitle: "Избранные проекты",
    projectsText:
      "Показываю не только код, но и логику работы: задача, подход и какой результат получает заказчик.",
    liveDemo: "Live Demo",
    liveSoon: "Live • скоро",
    sourceCode: "GitHub",
    caseStudy: "Подробнее",
    servicesTitle: "Услуги",
    servicesList: [
      "Лендинги и многостраничные сайты",
      "Telegram-боты и мини-автоматизация",
      "Интеграции API и панели управления",
      "MVP-прототипы для быстрого запуска",
    ],
    aboutTitle: "Обо мне",
    aboutText:
      "Работаю как fullstack: frontend, backend, базы, интеграции. Фокусируюсь на понятной архитектуре, скорости разработки и результате для вас.",
    contactTitle: "Контакты",
    contactText: "Пиши в Telegram — отвечу там.",
    contactTextWithForm:
      "Самый быстрый способ — Telegram. Можно и через форму ниже: сообщение придёт мне напрямую.",
    telegramCardHint: "Отвечаю быстро, обычно в течение дня.",
    form: {
      heading: "Или напишите через форму",
      name: "Имя",
      message: "Сообщение",
      submit: "Отправить сообщение",
      sending: "Отправляю…",
      sent: "Сообщение отправлено. Отвечу в Telegram.",
      error: "Не удалось отправить. Напиши напрямую в Telegram: @prosto_m1f",
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
    heroTitle:
      "Fullstack developer. Websites, bots and apps delivered in 1–3 days",
    heroText:
      "I handle the full cycle from idea to launch: interface, backend, integrations and Telegram bots. Fast, transparent and ready to ship.",
    heroPrimary: "View projects",
    heroTelegram: "Message on Telegram",
    skillsTitle: "Skills & stack",
    skillsText: "The technologies I use to ship projects end-to-end.",
    projectsTitle: "Selected projects",
    projectsText:
      "I present more than code: problem, approach and practical result for the client.",
    liveDemo: "Live Demo",
    liveSoon: "Live • soon",
    sourceCode: "GitHub",
    caseStudy: "Details",
    servicesTitle: "Services",
    servicesList: [
      "Landing pages and multi-page websites",
      "Telegram bots and small automation",
      "API integrations and admin panels",
      "MVP prototypes for quick launch",
    ],
    aboutTitle: "About me",
    aboutText:
      "I work as a fullstack developer: frontend, backend, databases and integrations. I focus on clear architecture, fast delivery and practical value for you.",
    contactTitle: "Contact",
    contactText: "Message me on Telegram — I'll reply there.",
    contactTextWithForm:
      "The fastest way is Telegram. You can also use the form below — the message reaches me directly.",
    telegramCardHint: "I reply fast, usually within a day.",
    form: {
      heading: "Or send a message",
      name: "Name",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      sent: "Message sent. I'll reply on Telegram.",
      error: "Could not send. Message me on Telegram: @prosto_m1f",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "price-tracker",
    icon: "📈",
    accent: "#3d8d7a",
    status: {
      ru: "Готов",
      en: "Complete",
    },
    title: {
      ru: "PricePulse — мониторинг цен",
      en: "PricePulse — price monitoring",
    },
    short: {
      ru: "Веб-приложение для мониторинга цен ~400 товаров из 8 категорий. Каталог, фильтрация, графики динамики цен, таблица офферов по магазинам.",
      en: "Web app that monitors prices of ~400 products across 8 categories. Catalog, filtering, price-history charts and a per-store offers table.",
    },
    details: {
      ru: "Полноценное веб-приложение на FastAPI: каталог из ~400 товаров по 8 категориям, фильтрация, графики динамики цен на Chart.js и таблица офферов по магазинам.",
      en: "A full FastAPI web app: a catalog of ~400 products across 8 categories, filtering, Chart.js price-history graphs and a per-store offers table.",
    },
    challenge: {
      ru: "Нужно следить за ценами по сотням товаров и быстро видеть, где и насколько цена изменилась.",
      en: "You need to track prices across hundreds of products and quickly see where and how much a price moved.",
    },
    approach: {
      ru: "Собрал backend на FastAPI с хранением истории в SQLite, каталог с фильтрами и серверным рендерингом на Jinja2, динамику цен вывел графиками Chart.js.",
      en: "Built a FastAPI backend with price history in SQLite, a filterable catalog rendered with Jinja2, and Chart.js graphs for price dynamics.",
    },
    result: {
      ru: "Готовый инструмент, где видно динамику цен по каждому товару и лучшие офферы по магазинам — основа под реальный сервис мониторинга.",
      en: "A ready tool that shows price dynamics per product and the best per-store offers — a solid base for a real monitoring service.",
    },
    deliverables: {
      ru: ["Каталог и фильтры", "История цен и графики", "Таблица офферов по магазинам"],
      en: ["Catalog and filters", "Price history and charts", "Per-store offers table"],
    },
    tags: ["FastAPI", "SQLite", "Chart.js", "Jinja2", "Python"],
    liveLink: null,
    githubLink: "https://github.com/prostoMif/price-tracker-portfolio",
  },
  {
    slug: "untt",
    icon: "⏱️",
    accent: "#c76f37",
    status: {
      ru: "Готов",
      en: "Complete",
    },
    title: {
      ru: "UnTT — Telegram бот",
      en: "UnTT — Telegram bot",
    },
    short: {
      ru: "Telegram-бот для осознанного использования TikTok. Отслеживает время, отправляет напоминания, помогает контролировать экранное время.",
      en: "A Telegram bot for mindful TikTok use. Tracks time, sends reminders and helps you keep screen time under control.",
    },
    details: {
      ru: "Telegram-бот, который помогает осознанно пользоваться TikTok: считает проведённое время, шлёт напоминания и помогает держать экранное время под контролем.",
      en: "A Telegram bot for mindful TikTok use: it counts time spent, sends reminders and helps keep screen time under control.",
    },
    challenge: {
      ru: "Короткие видео незаметно съедают время — нужен простой способ видеть лимиты и вовремя останавливаться.",
      en: "Short videos quietly eat up time — you need a simple way to see limits and stop in time.",
    },
    approach: {
      ru: "Собрал бота на Python с учётом времени, напоминаниями по расписанию и хранением статистики в SQLite.",
      en: "Built a Python bot with time tracking, scheduled reminders and stats stored in SQLite.",
    },
    result: {
      ru: "Пользователь видит, сколько времени потратил, получает напоминания и держит экранное время под контролем.",
      en: "The user sees how much time was spent, gets reminders and keeps screen time under control.",
    },
    deliverables: {
      ru: ["Telegram-бот", "Учёт времени и лимиты", "Напоминания по расписанию"],
      en: ["Telegram bot", "Time tracking and limits", "Scheduled reminders"],
    },
    tags: ["Python", "Telegram API", "SQLite"],
    liveLink: null,
    githubLink: "https://github.com/prostoMif/UnTT_v1.0",
  },
  {
    slug: "restaurant-terrassa",
    icon: "🍽️",
    accent: "#b66b3e",
    status: {
      ru: "Готов",
      en: "Complete",
    },
    title: {
      ru: "Restaurant Terrassa — сайт ресторана",
      en: "Restaurant Terrassa — restaurant website",
    },
    short: {
      ru: "Многостраничный сайт ресторана: визуал, структура, адаптив. Передаёт атмосферу, меню и упрощает контакт с гостем.",
      en: "Multi-page restaurant site: visuals, structure, responsive. Conveys atmosphere, menu and makes contact easy.",
    },
    details: {
      ru: "Многостраничный сайт ресторана с акцентом на визуал, читабельность и мобильный UX. Передаёт атмосферу заведения и упрощает путь к брони и контактам.",
      en: "A multi-page restaurant website focused on visuals, readability and mobile UX. It conveys the venue's atmosphere and simplifies the path to booking and contact.",
    },
    challenge: {
      ru: "Ресторану нужен презентационный сайт, который быстро передаёт атмосферу, меню и упрощает контакт.",
      en: "A restaurant needs a presentation website that quickly conveys atmosphere, menu and contact options.",
    },
    approach: {
      ru: "Собрал структуру многостраничного сайта с акцентом на визуал, читабельность и мобильный UX.",
      en: "Built a multi-page structure focused on visual identity, readability and mobile UX.",
    },
    result: {
      ru: "Законченный сайт-витрина, который можно использовать как основу под реальный запуск ресторана.",
      en: "A complete showcase website that can serve as a base for a real restaurant launch.",
    },
    deliverables: {
      ru: ["UI-концепция", "Адаптивная вёрстка", "Страницы меню и контактов"],
      en: ["UI concept", "Responsive layout", "Menu and contact pages"],
    },
    tags: ["Frontend", "UI/UX", "Responsive"],
    liveLink: null,
    githubLink: null,
  },
];
