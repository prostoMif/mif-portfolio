export type Locale = "ru" | "en";

export type Project = {
  slug: string;
  status: Record<Locale, string>;
  icon: string;
  accent: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  details: Record<Locale, string>;
  challenge: Record<Locale, string>;
  approach: Record<Locale, string>;
  result: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  tags: string[];
  liveLink: string | null;
  githubLink: string | null;
  image: string | null;
};

export const locales: Locale[] = ["ru", "en"];

export const SITE_URL = "https://mif-portfolio.vercel.app";

export const contactTelegram = {
  username: "prosto_m1f",
  url: "https://t.me/prosto_m1f",
} as const;

export const CONTACT_FORM_ENABLED = true;

export const skills: { name: string; slug: string }[] = [
  { name: "React",       slug: "react"      },
  { name: "Next.js",     slug: "nextjs"     },
  { name: "Node.js",     slug: "nodejs"     },
  { name: "Python",      slug: "python"     },
  { name: "FastAPI",     slug: "fastapi"    },
  { name: "TypeScript",  slug: "typescript" },
  { name: "C++",         slug: "cpp"        },
  { name: "PostgreSQL",  slug: "postgresql" },
  { name: "SQLite",      slug: "sqlite"     },
  { name: "Tailwind CSS",slug: "tailwind"   },
  { name: "Git",         slug: "git"        },
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
    heroTitle: "Fullstack-разработчик. Сайты, боты и приложения — под ключ за 1–3 дня",
    heroSubtitle: "Закрываю весь цикл: интерфейс, backend, интеграции и Telegram-боты. Без лишних согласований — сразу к результату.",
    heroPrimary: "Смотреть проекты",
    heroTelegram: "Написать в Telegram",
    heroStats: [
      { value: "1–3 дня", label: "время запуска" },
      { value: "3+",      label: "реальных проекта" },
      { value: "100%",    label: "под ключ" },
    ],
    skillsTitle: "Стек",
    skillsText: "Технологии, которые использую в реальных проектах.",
    projectsTitle: "Проекты",
    projectsText: "Реальные кейсы: задача, подход, итог.",
    liveDemo: "Live Demo",
    sourceCode: "GitHub",
    caseStudy: "Подробнее →",
    servicesTitle: "Услуги",
    servicesLead: "Беру задачу и довожу до результата — прозрачно, в срок, без воды. Вы получаете работающий продукт, а не процесс ради процесса.",
    servicesList: [
      { icon: "🌐", title: "Сайты и лендинги", desc: "Многостраничные сайты, лендинги и витрины. С понятным объёмом работ, сроками и регулярным апдейтом по процессу." },
      { icon: "🤖", title: "Telegram-боты", desc: "Боты под конкретную задачу: уведомления, автоматизация, мини-CRM. С понятным объёмом работ, сроками и регулярным апдейтом по процессу." },
      { icon: "⚙️", title: "API и интеграции", desc: "Подключаю сторонние сервисы, строю API и панели управления. С понятным объёмом работ, сроками и регулярным апдейтом по процессу." },
      { icon: "🚀", title: "MVP под запуск", desc: "Быстрый прототип для проверки идеи или привлечения первых клиентов. С понятным объёмом работ, сроками и регулярным апдейтом по процессу." },
    ],
    servicesCardTitles: {
      get: "Что вы получаете",
      format: "Формат работы",
      stack: "Технологический стек",
    },
    servicesCardTexts: {
      get: "Рабочий продукт, который сразу запускается: сайт, бот, интеграция или сервисный модуль — без доработок «после сдачи».",
      format: "Сначала фиксируем задачу и объём. Потом — короткие итерации с чёткими точками сдачи и обратной связью.",
      stack: "Frontend и backend решения, API-интеграции, базы данных и автоматизация процессов.",
    },
    aboutTitle: "Обо мне",
    aboutText: "Fullstack-разработчик с опытом в web, Telegram-ботах и API-интеграциях. Работаю самостоятельно — от идеи до деплоя. Фокус на скорости, чистом коде и результате, который можно сразу использовать.",
    aboutCards: [
      { label: "Подход",        text: "Сначала уточняю задачу и критерии результата, затем предлагаю архитектуру и план." },
      { label: "Фокус",         text: "Интерфейс и backend как единая система: скорость, стабильность, удобство поддержки." },
      { label: "Коммуникация",  text: "Прозрачные этапы, короткие отчёты и быстрые правки по обратной связи." },
    ],
    contactTitle: "Контакты",
    contactText: "Пиши в Telegram — отвечу там.",
    contactTextWithForm: "Самый быстрый способ — Telegram. Можно и через форму: сообщение придёт напрямую.",
    telegramCardHint: "Отвечаю быстро, обычно в течение дня.",
    form: {
      heading: "Или напишите через форму",
      name: "Имя",
      message: "Сообщение",
      submit: "Отправить",
      sending: "Отправляю…",
      sent: "Сообщение отправлено. Отвечу в Telegram.",
      error: "Не удалось отправить. Напиши напрямую: @prosto_m1f",
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
    heroTitle: "Fullstack developer. Websites, bots and apps — delivered in 1–3 days",
    heroSubtitle: "I handle the full cycle: interface, backend, integrations and Telegram bots. Straight to results, no overhead.",
    heroPrimary: "View projects",
    heroTelegram: "Message on Telegram",
    heroStats: [
      { value: "1–3 days", label: "time to launch" },
      { value: "3+",       label: "real projects" },
      { value: "100%",     label: "end-to-end" },
    ],
    skillsTitle: "Stack",
    skillsText: "Technologies I use in real projects.",
    projectsTitle: "Projects",
    projectsText: "Real cases: problem, approach, result.",
    liveDemo: "Live Demo",
    sourceCode: "GitHub",
    caseStudy: "Details →",
    servicesTitle: "Services",
    servicesLead: "I take a task and deliver a result — transparently, on time, without fuss. You get a working product, not an ongoing process.",
    servicesList: [
      { icon: "🌐", title: "Websites & landing pages", desc: "Multi-page sites, landing pages and showcases. With clear scope, timelines and regular progress updates." },
      { icon: "🤖", title: "Telegram bots", desc: "Bots built for a specific task: notifications, automation, mini-CRM. With clear scope, timelines and regular progress updates." },
      { icon: "⚙️", title: "API & integrations", desc: "Connect third-party services, build APIs and admin panels. With clear scope, timelines and regular progress updates." },
      { icon: "🚀", title: "MVP launch", desc: "Fast prototype to validate an idea or acquire first clients. With clear scope, timelines and regular progress updates." },
    ],
    servicesCardTitles: {
      get: "What you get",
      format: "Work format",
      stack: "Tech stack",
    },
    servicesCardTexts: {
      get: "A working product ready to launch: website, bot, integration or service module — no post-delivery fixes needed.",
      format: "First we lock in the scope and goals. Then short iterations with clear handoff points and feedback loops.",
      stack: "Frontend and backend solutions, API integrations, databases and workflow automation.",
    },
    aboutTitle: "About me",
    aboutText: "Fullstack developer experienced in web, Telegram bots and API integrations. I work independently — from idea to deployment. Focused on speed, clean code and results you can use immediately.",
    aboutCards: [
      { label: "Approach",       text: "I clarify goals and success criteria first, then suggest practical architecture and a delivery plan." },
      { label: "Focus",          text: "Interface and backend as one system: speed, stability and easy long-term maintenance." },
      { label: "Communication",  text: "Transparent milestones, short updates and fast iterations based on your feedback." },
    ],
    contactTitle: "Contact",
    contactText: "Message me on Telegram — I'll reply there.",
    contactTextWithForm: "The fastest way is Telegram. You can also use the form below — the message reaches me directly.",
    telegramCardHint: "I reply fast, usually within a day.",
    form: {
      heading: "Or send a message",
      name: "Name",
      message: "Message",
      submit: "Send",
      sending: "Sending…",
      sent: "Message sent. I'll reply on Telegram.",
      error: "Could not send. Message me directly: @prosto_m1f",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "price-tracker",
    icon: "📈",
    accent: "#2d6a8f",
    status: { ru: "Завершён", en: "Complete" },
    title: { ru: "PricePulse — мониторинг цен", en: "PricePulse — price monitoring" },
    short: {
      ru: "Веб-приложение для мониторинга цен ~400 товаров из 8 категорий: каталог, фильтрация, графики динамики и таблица офферов по магазинам.",
      en: "Web app monitoring prices of ~400 products across 8 categories: catalog, filtering, price-history charts and per-store offers table.",
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
      ru: "FastAPI + SQLite для хранения истории, Jinja2 для серверного рендеринга, Chart.js для визуализации динамики.",
      en: "FastAPI + SQLite for history storage, Jinja2 for server-side rendering, Chart.js for price dynamics visualization.",
    },
    result: {
      ru: "Готовый инструмент с динамикой цен по каждому товару и лучшими офферами по магазинам.",
      en: "A ready tool showing price dynamics per product and the best per-store offers.",
    },
    deliverables: {
      ru: ["Каталог и фильтры", "История цен и графики", "Таблица офферов"],
      en: ["Catalog and filters", "Price history and charts", "Offers table"],
    },
    tags: ["FastAPI", "Python", "SQLite", "Chart.js", "Jinja2"],
    liveLink: null,
    githubLink: "https://github.com/prostoMif/price-tracker-portfolio",
    image: "/projects/price-tracker.png",
  },
  {
    slug: "untt",
    icon: "⏱️",
    accent: "#b05a2f",
    status: { ru: "Завершён", en: "Complete" },
    title: { ru: "UnTT — Telegram-бот", en: "UnTT — Telegram bot" },
    short: {
      ru: "Telegram-бот для осознанного использования TikTok: отслеживает экранное время, отправляет напоминания и помогает держать лимиты под контролем.",
      en: "Telegram bot for mindful TikTok use: tracks screen time, sends reminders and helps you stay within limits.",
    },
    details: {
      ru: "Telegram-бот, который помогает осознанно пользоваться TikTok: считает проведённое время, шлёт напоминания и помогает держать экранное время под контролем.",
      en: "A Telegram bot for mindful TikTok use: counts time spent, sends reminders and helps keep screen time under control.",
    },
    challenge: {
      ru: "Короткие видео незаметно съедают время — нужен простой способ видеть лимиты и вовремя останавливаться.",
      en: "Short videos quietly eat up time — you need a simple way to see limits and stop in time.",
    },
    approach: {
      ru: "Python-бот с учётом времени, напоминаниями по расписанию и статистикой в SQLite.",
      en: "Python bot with time tracking, scheduled reminders and stats stored in SQLite.",
    },
    result: {
      ru: "Пользователь видит статистику, получает напоминания и держит экранное время под контролем.",
      en: "The user sees stats, gets reminders and keeps screen time under control.",
    },
    deliverables: {
      ru: ["Telegram-бот", "Учёт времени и лимиты", "Напоминания"],
      en: ["Telegram bot", "Time tracking and limits", "Scheduled reminders"],
    },
    tags: ["Python", "Telegram API", "SQLite"],
    liveLink: null,
    githubLink: "https://github.com/prostoMif/UnTT_v1.0",
    image: "/projects/untt.png",
  },
  {
    slug: "restaurant-terrassa",
    icon: "🍽️",
    accent: "#7a5c2e",
    status: { ru: "Завершён", en: "Complete" },
    title: { ru: "Terrassa — сайт ресторана", en: "Terrassa — restaurant website" },
    short: {
      ru: "Многостраничный сайт ресторана: атмосфера, меню, адаптив. Передаёт характер заведения и упрощает контакт с гостем.",
      en: "Multi-page restaurant site: atmosphere, menu, responsive. Conveys the venue's character and simplifies guest contact.",
    },
    details: {
      ru: "Многостраничный сайт ресторана с акцентом на визуал, читабельность и мобильный UX. Передаёт атмосферу заведения и упрощает путь к брони и контактам.",
      en: "A multi-page restaurant website focused on visuals, readability and mobile UX. Conveys the venue's atmosphere and simplifies booking and contact.",
    },
    challenge: {
      ru: "Ресторану нужен сайт-витрина, который быстро передаёт атмосферу и меню, и упрощает контакт.",
      en: "A restaurant needs a showcase website that quickly conveys atmosphere and menu, and simplifies contact.",
    },
    approach: {
      ru: "Многостраничная структура с акцентом на визуальную идентичность, читабельность и мобильный UX.",
      en: "Multi-page structure focused on visual identity, readability and mobile UX.",
    },
    result: {
      ru: "Готовый сайт-витрина, который можно использовать как основу под реальный запуск.",
      en: "A complete showcase website ready to use as a base for a real launch.",
    },
    deliverables: {
      ru: ["UI-концепция", "Адаптивная вёрстка", "Страницы меню и контактов"],
      en: ["UI concept", "Responsive layout", "Menu and contact pages"],
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: null,
    githubLink: null,
    image: "/projects/restaurant-terrassa.png",
  },
  {
    slug: "cafe-dashboard",
    icon: "📊",
    accent: "#1a5a3c",
    status: { ru: "Завершён", en: "Complete" },
    title: {
      ru: "CaféOS — система управления рестораном",
      en: "CaféOS — restaurant management system",
    },
    short: {
      ru: "Полноценный dashboard для владельца кафе или ресторана: меню, заказы, сотрудники и аналитика продаж — в одном интерфейсе.",
      en: "Full-featured dashboard for café and restaurant owners: menu, orders, staff and sales analytics — all in one interface.",
    },
    details: {
      ru: "CaféOS — это внутренняя операционная система для кафе и ресторана. Закрывает весь операционный цикл: от добавления позиций в меню до отчётов по выручке за день. Заказы принимаются через приложение или QR-код на столе, статусы меняются в реальном времени, аналитика показывает топ блюд и динамику дохода.",
      en: "CaféOS is an internal operating system for cafés and restaurants. It covers the full operational cycle: from adding menu items to daily revenue reports. Orders come in via the app or table QR code, statuses update in real time, and analytics show top dishes and revenue trends.",
    },
    challenge: {
      ru: "Владельцу ресторана нужен единый инструмент: принимать заказы, отслеживать статусы, управлять меню и видеть аналитику — без разрозненных таблиц и мессенджеров.",
      en: "A restaurant owner needs one tool: take orders, track statuses, manage the menu and see analytics — without scattered spreadsheets and messengers.",
    },
    approach: {
      ru: "Next.js на фронте с серверными компонентами для быстрого рендеринга, Node.js API для бизнес-логики, MongoDB для гибкого хранения меню и заказов, Chart.js для визуализации аналитики.",
      en: "Next.js on the frontend with server components for fast rendering, Node.js API for business logic, MongoDB for flexible menu and order storage, Chart.js for analytics visualization.",
    },
    result: {
      ru: "Готовая операционная система: администратор видит все заказы и их статусы в реальном времени, управляет меню, получает отчёты по выручке и топ блюдам.",
      en: "A complete operational system: the admin sees all orders and statuses in real time, manages the menu and gets revenue and top-dish reports.",
    },
    deliverables: {
      ru: [
        "Управление меню и категориями",
        "Система заказов с QR-кодом",
        "Статусы заказов в реальном времени",
        "Админ-панель с аналитикой",
        "Отчёты по продажам",
      ],
      en: [
        "Menu and category management",
        "Order system with QR code",
        "Real-time order statuses",
        "Admin panel with analytics",
        "Sales reports",
      ],
    },
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js", "TypeScript"],
    liveLink: null,
    githubLink: null,
    image: "/projects/cafe-dashboard.png",
  },
];
