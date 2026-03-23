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
    heroTitle: "Делаю сайты и автоматизацию, которые помогают бизнесу зарабатывать",
    heroText:
      "Я Михаил (mif), fullstack разработчик. Закрываю цикл от идеи до запуска: интерфейс, backend, интеграции и автоматизация. Фокус — скорость, прозрачность и практический результат.",
    heroPrimary: "Смотреть проекты",
    heroSecondary: "Связаться",
    projectsTitle: "Избранные проекты",
    projectsText:
      "Показываю не только код, но и логику работы: задача, подход и какой результат получает заказчик.",
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
    heroTitle: "I build websites and automation that help businesses grow",
    heroText:
      "I am Mikhail (mif), a fullstack developer. I handle the full cycle from idea to launch: interface, backend, integrations and automation. My focus is speed, clarity and practical business value.",
    heroPrimary: "View projects",
    heroSecondary: "Contact me",
    projectsTitle: "Selected projects",
    projectsText:
      "I present more than code: problem, approach and practical result for the client.",
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
    challenge: {
      ru: "У автора коротких видео теряется контроль тайминга и проверка длительности делается вручную.",
      en: "Short-form creators lose timing control and duration checks are done manually.",
    },
    approach: {
      ru: "Собрал Telegram-бота с автоматическими проверками лимитов и планировщиком уведомлений.",
      en: "Built a Telegram bot with automatic limit checks and scheduled reminders.",
    },
    result: {
      ru: "Сокращается ручная рутина перед публикацией и снижается риск выхода за лимиты платформ.",
      en: "Reduces pre-publish manual routine and lowers the risk of exceeding platform limits.",
    },
    deliverables: {
      ru: ["Telegram-бот", "Логика проверок тайминга", "Планировщик уведомлений"],
      en: ["Telegram bot", "Timing validation logic", "Notification scheduler"],
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
    challenge: {
      ru: "Нужна система, которая объединяет задачи, заметки и процессы фрилансера в одном месте.",
      en: "A system is needed to keep freelancer tasks, notes and workflows in one place.",
    },
    approach: {
      ru: "Спроектировал структуру ассистента и реализовал ключевые модули MVP для проверки гипотез.",
      en: "Designed the assistant architecture and implemented core MVP modules to validate hypotheses.",
    },
    result: {
      ru: "Получен рабочий прототип для теста сценариев и последующего масштабирования в полноценный продукт.",
      en: "Produced a working prototype to test scenarios and scale into a full product later.",
    },
    deliverables: {
      ru: ["MVP-архитектура", "База данных и базовая логика", "Сценарии использования"],
      en: ["MVP architecture", "Database and core logic", "Usage scenarios"],
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
    challenge: {
      ru: "Нужно отслеживать цены по выбранным товарам и быстро получать сигнал о выгодном изменении.",
      en: "Need to monitor selected products and quickly detect profitable price changes.",
    },
    approach: {
      ru: "Реализовал парсинг источников, логику сравнения и уведомления о динамике цены.",
      en: "Implemented source parsing, comparison logic and notifications about price dynamics.",
    },
    result: {
      ru: "Готовый инструмент мониторинга, который помогает принимать решение о покупке по фактической динамике.",
      en: "A complete monitoring tool that supports purchase decisions using real price history.",
    },
    deliverables: {
      ru: ["Скрипт мониторинга", "История цен", "Система уведомлений"],
      en: ["Monitoring script", "Price history", "Notification system"],
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
    challenge: {
      ru: "Ресторану нужен презентационный сайт, который быстро передает атмосферу, меню и упрощает контакт.",
      en: "A restaurant needs a presentation website that quickly conveys atmosphere, menu and contact options.",
    },
    approach: {
      ru: "Собрал структуру многостраничного сайта с акцентом на визуал, читабельность и мобильный UX.",
      en: "Built a multi-page structure focused on visual identity, readability and mobile UX.",
    },
    result: {
      ru: "Получился законченный сайт-витрина, который можно использовать как основу под реальный запуск.",
      en: "Delivered a complete showcase website that can serve as a base for a real launch.",
    },
    deliverables: {
      ru: ["UI-концепция", "Адаптивная верстка", "Страницы меню и контактов"],
      en: ["UI concept", "Responsive layout", "Menu and contact pages"],
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
    challenge: {
      ru: "Нужно ускорить производство коротких роликов и убрать повторяющиеся ручные этапы.",
      en: "Need to speed up short-video production and remove repetitive manual steps.",
    },
    approach: {
      ru: "Собрал скриптовый конвейер генерации роликов с автоматизацией базовых этапов.",
      en: "Built a script-based pipeline that automates key stages of short-video generation.",
    },
    result: {
      ru: "Демо-решение показывает, как сокращается время на базовое производство контента.",
      en: "The demo proves a reduction in baseline content production time.",
    },
    deliverables: {
      ru: ["Скрипт конвейера", "Автоматизированные шаги генерации", "Демо-сценарии"],
      en: ["Pipeline script", "Automated generation steps", "Demo scenarios"],
    },
    stack: ["Python", "Media processing", "Automation"],
  },
];
