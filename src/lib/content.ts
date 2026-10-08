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
export const contactTelegram = { username: "prosto_m1f", url: "https://t.me/prosto_m1f" } as const;
export const CONTACT_FORM_ENABLED = true;

export const skills: { name: string; slug: string }[] = [
  { name: "React",        slug: "react"      },
  { name: "Next.js",      slug: "nextjs"     },
  { name: "Node.js",      slug: "nodejs"     },
  { name: "Python",       slug: "python"     },
  { name: "FastAPI",      slug: "fastapi"    },
  { name: "TypeScript",   slug: "typescript" },
  { name: "C++",          slug: "cpp"        },
  { name: "PostgreSQL",   slug: "postgresql" },
  { name: "SQLite",       slug: "sqlite"     },
  { name: "Tailwind CSS", slug: "tailwind"   },
  { name: "Git",          slug: "git"        },
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

    // ── Hero ──────────────────────────────────────────────────────────────
    heroTitle: "Сайт для вашего бизнеса с онлайн-записью — за 2–3 дня",
    heroSubtitle:
      "Делаю сайты для детейлинга, автосервисов и локального бизнеса: запись в WhatsApp и Telegram, фото работ, отзывы из 2ГИС и редактор, где вы сами меняете цены и фото. Telegram-боты и веб-сервисы — тоже.",
    heroPrimary: "Смотреть проекты",
    heroTelegram: "Обсудить задачу",
    heroStats: [
      { value: "2–3 дня",    label: "до запуска сайта" },
      { value: "Редактор",   label: "фото и цены меняете сами" },
      { value: "Full-stack", label: "сайт + хостинг + поддержка" },
    ],

    // ── Why me ────────────────────────────────────────────────────────────
    whyTitle: "Почему выбирают меня",
    whyItems: [
      {
        icon: "⚡",
        title: "Быстро — без потери качества",
        text: "Большинство фрилансеров берут 2–4 недели на задачу, которую можно сделать за 3 дня. Я не растягиваю сроки — фиксирую дедлайн и сдаю в срок.",
      },
      {
        icon: "🔧",
        title: "Один человек — весь цикл",
        text: "Не нужно координировать дизайнера, фронтендера и бэкендера. Я закрываю всё сам: дизайн, код, база данных, деплой — один человек, одна точка контакта.",
      },
      {
        icon: "💬",
        title: "Ясная коммуникация",
        text: "Никаких исчезновений на 3 дня и отчётов в стиле «всё идёт по плану». Фиксирую задачу письменно, отвечаю быстро, показываю промежуточный результат.",
      },
    ],

    // ── Skills ────────────────────────────────────────────────────────────
    skillsTitle: "Стек",
    skillsText: "Технологии, на которых собираю проекты.",

    // ── Projects ──────────────────────────────────────────────────────────
    projectsTitle: "Проекты",
    projectsText:
      "Реальные кейсы — не учебные задачи. Смотри что именно сделано, какой стек и зачем.",
    liveDemo: "Live Demo",
    sourceCode: "GitHub",
    caseStudy: "Подробнее →",
    projectsCta: "Хочешь что-то похожее? Напиши — обсудим.",
    projectsCtaBtn: "Обсудить проект",

    // ── Services ──────────────────────────────────────────────────────────
    servicesTitle: "Услуги",
    servicesLead:
      "Называю точный объём и срок до начала работы. Берусь только за то, что могу сдать в срок и в нужном качестве.",
    servicesList: [
      {
        icon: "🌐",
        title: "Сайт или лендинг",
        desc: "Многостраничный сайт, лендинг, витрина. Адаптив, быстрая загрузка, SEO-основа. Срок от 1 дня для лендинга, 3–7 дней для многостраничного.",
        price: "от переговоров",
      },
      {
        icon: "🤖",
        title: "Telegram-бот",
        desc: "Бот под конкретную задачу: приём заявок, уведомления, мини-CRM, автоответы. Подключу к вашей базе или внешнему сервису.",
        price: "от переговоров",
      },
      {
        icon: "⚙️",
        title: "API и интеграции",
        desc: "Подключу сторонние сервисы (CRM, платежи, маркетплейсы), автоматизирую процессы, сделаю admin-панель для управления данными.",
        price: "от переговоров",
      },
      {
        icon: "🚀",
        title: "MVP за 3–7 дней",
        desc: "Минимальный рабочий продукт для проверки гипотезы или первых продаж. Только нужный функционал — без переплаты за лишнее.",
        price: "от переговоров",
      },
    ],
    servicesCardTitles: {
      get: "Что вы получаете",
      format: "Как работаем",
      guarantee: "Честно про сроки",
    },
    servicesCardTexts: {
      get: "Готовый продукт на хостинге с исходным кодом. Не макет, не «почти готово» — работающий результат, которым можно пользоваться с первого дня.",
      format: "Сначала фиксируем задачу и объём письменно — без размытых формулировок. Потом работаю и показываю промежуточный результат. Правки — по ходу, не в конце.",
      guarantee: "Срок называю честно: если задача на неделю — скажу неделю, не «пару дней». Лучше реальный дедлайн, чем красивое обещание и просрочка.",
    },
    servicesCta: "Есть задача? Напишите — отвечу в течение дня.",
    servicesCtaBtn: "Написать в Telegram",

    // ── About ─────────────────────────────────────────────────────────────
    aboutTitle: "Обо мне",
    aboutLead:
      "Fullstack-разработчик. Работаю один — это значит: один контакт, один ответственный, никаких испорченных телефонов между дизайнером, фронтом и бэком.",
    aboutBody:
      "Берусь за проекты, где важна скорость и предсказуемость. Не обещаю невозможного — но то, что обещаю, сдаю в срок. Опыт в web, Telegram-ботах, API-интеграциях и аналитических дашбордах.",
    aboutCards: [
      {
        label: "Подход к задаче",
        text: "Сначала уточняю что именно нужно сделать и по каким критериям оценивать результат. Потом — архитектура и план. Работа без чёткого ТЗ — источник недовольства с обеих сторон.",
      },
      {
        label: "Что умею",
        text: "Frontend (React, Next.js), backend (Node.js, Python, FastAPI), базы данных (PostgreSQL, MongoDB, SQLite), Telegram-боты, деплой на Vercel / Railway / VPS.",
      },
      {
        label: "Коммуникация",
        text: "Отвечаю быстро. Если что-то меняется по срокам или объёму — говорю сразу, не в день сдачи. Предпочитаю писать в Telegram.",
      },
    ],

    // ── Contact ───────────────────────────────────────────────────────────
    contactTitle: "Есть задача?",
    contactLead:
      "Напишите в Telegram — коротко опишите что нужно сделать. Отвечу в течение дня, уточню детали и назову реальный срок.",
    contactText: "Напишите в Telegram.",
    contactTextWithForm: "Напишите в Telegram или заполните форму — сообщение придёт напрямую.",
    telegramCardHint: "Отвечаю быстро, обычно в течение нескольких часов.",
    form: {
      heading: "Или напишите через форму",
      name: "Ваше имя",
      message: "Опишите задачу — что нужно сделать, в какой срок, есть ли примеры",
      submit: "Отправить",
      sending: "Отправляю…",
      sent: "Получил, отвечу в Telegram в течение дня.",
      error: "Не удалось отправить. Напишите напрямую: @prosto_m1f",
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

    heroTitle: "A website for your business with online booking — in 2–3 days",
    heroSubtitle:
      "I build websites for detailing studios, car services and local businesses: booking via WhatsApp and Telegram, work photos, reviews and an editor where you change prices and photos yourself. Telegram bots and web services too.",
    heroPrimary: "View projects",
    heroTelegram: "Discuss your task",
    heroStats: [
      { value: "2–3 days",   label: "to launch" },
      { value: "Editor",     label: "update photos & prices yourself" },
      { value: "Full-stack", label: "site + hosting + support" },
    ],

    whyTitle: "Why work with me",
    whyItems: [
      {
        icon: "⚡",
        title: "Fast — without cutting corners",
        text: "Most freelancers take 2–4 weeks for work that can be done in 3 days. I don't stretch timelines — I set a deadline and ship on time.",
      },
      {
        icon: "🔧",
        title: "One person — full cycle",
        text: "No need to coordinate a designer, frontend and backend dev. I cover it all: design, code, database, deploy — one person, one point of contact.",
      },
      {
        icon: "💬",
        title: "Clear communication",
        text: "No 3-day silences or vague status reports. I commit scope in writing, reply fast and show work in progress.",
      },
    ],

    skillsTitle: "Stack",
    skillsText: "Technologies I use on real projects.",
    projectsTitle: "Projects",
    projectsText: "Real cases — not practice tasks. See what was built, which stack and why.",
    liveDemo: "Live Demo",
    sourceCode: "GitHub",
    caseStudy: "Details →",
    projectsCta: "Need something similar? Write — let's talk.",
    projectsCtaBtn: "Discuss a project",

    servicesTitle: "Services",
    servicesLead:
      "I name exact scope and deadline before starting. I only take on what I can deliver on time and at the right quality.",
    servicesList: [
      {
        icon: "🌐",
        title: "Website or landing page",
        desc: "Multi-page site, landing, showcase. Responsive, fast, SEO-ready. From 1 day for a landing page, 3–7 days for multi-page.",
        price: "negotiable",
      },
      {
        icon: "🤖",
        title: "Telegram bot",
        desc: "Bot for a specific task: lead capture, notifications, mini-CRM, auto-replies. Can connect to your database or external service.",
        price: "negotiable",
      },
      {
        icon: "⚙️",
        title: "API & integrations",
        desc: "Connect third-party services (CRM, payments, marketplaces), automate workflows, build an admin panel for data management.",
        price: "negotiable",
      },
      {
        icon: "🚀",
        title: "MVP in 3–7 days",
        desc: "Minimum viable product to test a hypothesis or get first sales. Only what's needed — no paying for extras.",
        price: "negotiable",
      },
    ],
    servicesCardTitles: {
      get: "What you get",
      format: "How we work",
      guarantee: "Honest about timelines",
    },
    servicesCardTexts: {
      get: "A working product on hosting with source code. Not a mockup, not 'almost done' — a result you can use from day one.",
      format: "First we lock scope in writing — no vague wording. Then I work and show progress. Revisions happen during the work, not at the end.",
      guarantee: "I give honest timelines: if the task takes a week, I say a week. A real deadline beats a pretty promise followed by a slip.",
    },
    servicesCta: "Have a task? Write — I'll reply within a day.",
    servicesCtaBtn: "Message on Telegram",

    aboutTitle: "About me",
    aboutLead:
      "Fullstack developer. I work solo — which means one contact, one accountable person, no broken telephone between designer, frontend and backend.",
    aboutBody:
      "I take on projects where speed and predictability matter. I don't overpromise — but what I commit to, I deliver on time. Experience in web, Telegram bots, API integrations and analytics dashboards.",
    aboutCards: [
      {
        label: "How I approach tasks",
        text: "First I clarify exactly what needs to be done and how to measure success. Then architecture and plan. Working without a clear brief is a source of frustration for everyone.",
      },
      {
        label: "What I can do",
        text: "Frontend (React, Next.js), backend (Node.js, Python, FastAPI), databases (PostgreSQL, MongoDB, SQLite), Telegram bots, deploy to Vercel / Railway / VPS.",
      },
      {
        label: "Communication",
        text: "I reply fast. If something changes in scope or timeline — I say so immediately, not on delivery day. I prefer Telegram.",
      },
    ],

    contactTitle: "Have a task?",
    contactLead:
      "Write on Telegram — briefly describe what needs to be done. I'll reply within a day, clarify details and give you a real timeline.",
    contactText: "Write on Telegram.",
    contactTextWithForm: "Write on Telegram or fill the form — message reaches me directly.",
    telegramCardHint: "I reply fast, usually within a few hours.",
    form: {
      heading: "Or send a message",
      name: "Your name",
      message: "Describe the task — what needs to be done, timeline, any examples",
      submit: "Send",
      sending: "Sending…",
      sent: "Got it, I'll reply on Telegram within a day.",
      error: "Could not send. Write directly: @prosto_m1f",
    },
  },
};

export const projects: Project[] = [
  {
    slug: "detailing-sites",
    icon: "🚗",
    accent: "#d6b26e",
    status: { ru: "В работе", en: "Live" },
    title: { ru: "Сайты для детейлинг-студий", en: "Websites for detailing studios" },
    short: {
      ru: "Платформа сайтов для автобизнеса: онлайн-запись, калькулятор цены по классу авто, «до/после», отзывы из 2ГИС и редактор для владельца с телефона.",
      en: "Website platform for car businesses: online booking, price calculator by car class, before/after slider, 2GIS reviews and a phone-friendly owner editor.",
    },
    details: {
      ru: "Один движок на Next.js обслуживает сайты многих студий. Владелец сам меняет фото, услуги, цены, отзывы и вопросы — без программиста.",
      en: "One Next.js engine serves many studios. Owners update photos, services, prices, reviews and FAQ themselves — no developer needed.",
    },
    challenge: {
      ru: "У большинства студий вместо сайта Telegram-канал или медленный сайт на конструкторе: клиенты из поиска уходят, а обновлять цены и фото некому.",
      en: "Most studios have a Telegram channel or a slow site builder page instead of a website: search visitors leave and nobody keeps prices and photos current.",
    },
    approach: {
      ru: "Next.js + Vercel Blob, мобильная вёрстка со свайп-каруселями, заявки в Telegram-бота, сайт собирается из карточки 2ГИС и дорабатывается в редакторе.",
      en: "Next.js + Vercel Blob, mobile-first layout with swipe carousels, leads to a Telegram bot, site is generated from the 2GIS listing and refined in the editor.",
    },
    result: {
      ru: "Сайт запускается за 2–3 дня, грузится быстро на телефоне, а поддержка сводится к паре кликов в редакторе.",
      en: "A site launches in 2–3 days, loads fast on mobile, and maintenance is a couple of clicks in the editor.",
    },
    deliverables: {
      ru: ["Онлайн-запись и оценка по фото", "Калькулятор цены по классу авто", "Редактор для владельца", "Отзывы из 2ГИС"],
      en: ["Online booking and photo estimate", "Price calculator by car class", "Owner editor", "2GIS reviews"],
    },
    tags: ["Next.js", "TypeScript", "Vercel Blob", "Telegram API"],
    liveLink: "https://dv-sites.vercel.app/gloss-lab",
    githubLink: null,
    image: null,
  },
  {
    slug: "price-tracker",
    icon: "📈",
    accent: "#2d6a8f",
    status: { ru: "Завершён", en: "Complete" },
    title: { ru: "PricePulse — мониторинг цен", en: "PricePulse — price monitoring" },
    short: {
      ru: "Веб-приложение для отслеживания цен на ~400 товаров из 8 категорий. Каталог с фильтрами, графики динамики и сравнение офферов по магазинам.",
      en: "Web app tracking prices on ~400 products across 8 categories. Filterable catalog, price-history charts and per-store offer comparison.",
    },
    details: {
      ru: "Инструмент для мониторинга цен: каталог ~400 товаров по 8 категориям, фильтрация, графики динамики цен на Chart.js и таблица офферов по магазинам.",
      en: "Price monitoring tool: catalog of ~400 products across 8 categories, filtering, Chart.js price-history graphs and a per-store offers table.",
    },
    challenge: {
      ru: "Нужно следить за ценами по сотням товаров и быстро видеть, где и насколько цена изменилась.",
      en: "Track prices across hundreds of products and instantly see where and how much a price moved.",
    },
    approach: {
      ru: "FastAPI + SQLite для хранения истории цен, Jinja2 для серверного рендеринга, Chart.js для визуализации динамики.",
      en: "FastAPI + SQLite for price history, Jinja2 for server-side rendering, Chart.js for dynamics visualization.",
    },
    result: {
      ru: "Готовый инструмент: динамика по каждому товару, лучшие офферы по магазинам — основа для реального сервиса мониторинга.",
      en: "Ready tool: price dynamics per product, best per-store offers — a solid base for a real monitoring service.",
    },
    deliverables: {
      ru: ["Каталог и фильтры", "История цен и графики", "Таблица офферов по магазинам"],
      en: ["Catalog and filters", "Price history and charts", "Per-store offers table"],
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
      ru: "Telegram-бот для контроля экранного времени в TikTok. Считает сессии, отправляет напоминания, показывает статистику за день.",
      en: "Telegram bot for TikTok screen time control. Tracks sessions, sends reminders, shows daily stats.",
    },
    details: {
      ru: "Бот помогает держать TikTok под контролем: считает время, шлёт напоминания по расписанию, хранит статистику.",
      en: "Bot helps keep TikTok usage under control: counts time, sends scheduled reminders, stores stats.",
    },
    challenge: {
      ru: "Короткие видео незаметно съедают часы — нужен простой способ видеть сколько потратил и вовремя остановиться.",
      en: "Short videos quietly eat hours — you need a simple way to see how much time was spent and stop in time.",
    },
    approach: {
      ru: "Python + Telegram Bot API, хранение данных в SQLite, напоминания через scheduler.",
      en: "Python + Telegram Bot API, SQLite for data storage, reminders via scheduler.",
    },
    result: {
      ru: "Пользователь видит реальную статистику экранного времени и получает напоминания — без сторонних приложений.",
      en: "User sees real screen time stats and gets reminders — no third-party apps needed.",
    },
    deliverables: {
      ru: ["Telegram-бот", "Учёт времени и лимиты", "Ежедневная статистика"],
      en: ["Telegram bot", "Time tracking and limits", "Daily stats"],
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
      ru: "Многостраничный сайт ресторана: меню, атмосфера, контакты. Акцент на визуале и мобильном UX — гость за 10 секунд понимает куда пришёл.",
      en: "Multi-page restaurant site: menu, atmosphere, contacts. Visual-first and mobile-friendly — guest understands the vibe in 10 seconds.",
    },
    details: {
      ru: "Сайт-витрина ресторана с акцентом на визуал, читабельность и мобильный UX.",
      en: "Restaurant showcase site focused on visuals, readability and mobile UX.",
    },
    challenge: {
      ru: "Ресторану нужен сайт, который за несколько секунд передаёт атмосферу и отвечает на три вопроса гостя: что, где, как попасть.",
      en: "A restaurant needs a site that conveys atmosphere in seconds and answers three guest questions: what, where, how to get in.",
    },
    approach: {
      ru: "Многостраничная структура, акцент на визуальную идентичность, адаптив под мобиль.",
      en: "Multi-page structure, visual identity focus, mobile-responsive.",
    },
    result: {
      ru: "Готовый сайт-витрина: гость сразу понимает концепцию заведения и может связаться или забронировать стол.",
      en: "Ready showcase site: guest immediately gets the concept and can contact or book a table.",
    },
    deliverables: {
      ru: ["Адаптивная вёрстка", "Страница меню", "Контакты и карта"],
      en: ["Responsive layout", "Menu page", "Contacts and map"],
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
      ru: "Внутренний dashboard для кафе и ресторана: заказы через QR-код, управление меню, статусы в реальном времени и аналитика по выручке.",
      en: "Internal dashboard for cafés and restaurants: QR-code orders, menu management, real-time statuses and revenue analytics.",
    },
    details: {
      ru: "CaféOS закрывает операционный цикл ресторана: приём заказов (приложение или QR-код), трекинг статусов, управление меню и ежедневная аналитика по выручке и популярным блюдам.",
      en: "CaféOS covers the full restaurant operational cycle: order intake (app or QR code), status tracking, menu management and daily analytics on revenue and popular dishes.",
    },
    challenge: {
      ru: "Владельцу ресторана нужен один инструмент вместо блокнота, мессенджера и таблиц: принять заказ, отследить статус, увидеть что продаётся.",
      en: "A restaurant owner needs one tool instead of a notepad, messenger and spreadsheets: take an order, track its status, see what's selling.",
    },
    approach: {
      ru: "Next.js + Node.js для быстрого UI и API, MongoDB для гибкого хранения меню и заказов, Chart.js для визуализации аналитики.",
      en: "Next.js + Node.js for fast UI and API, MongoDB for flexible menu and order storage, Chart.js for analytics visualization.",
    },
    result: {
      ru: "Администратор видит все активные заказы и статусы в реальном времени, управляет меню без кода, получает отчёт по выручке и топ-блюдам за любой день.",
      en: "Admin sees all active orders and statuses in real time, manages the menu without code and gets revenue and top-dish reports for any day.",
    },
    deliverables: {
      ru: ["Приём заказов через QR-код", "Статусы в реальном времени", "Управление меню", "Аналитика и отчёты по продажам"],
      en: ["QR-code order intake", "Real-time order statuses", "Menu management", "Sales analytics and reports"],
    },
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js", "TypeScript"],
    liveLink: null,
    githubLink: null,
    image: "/projects/cafe-dashboard.png",
  },
];
