# mif — портфолио

Next.js + Tailwind, двуязычность `ru` / `en`.

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000) — редирект на `/ru`.

## Форма → Telegram (опционально)

На сайте форма **скрыта** по умолчанию. Чтобы включить: в `src/lib/content.ts` поставь `CONTACT_FORM_ENABLED = true`.

1. Создай бота в Telegram: **@BotFather** → `/newbot` → скопируй **токен**.
2. Узнай **свой chat_id**:
   - напиши боту [@userinfobot](https://t.me/userinfobot) и скопируй `Id`,  
   - или напиши своему новому боту `/start`, затем открой в браузере (подставь токен):
     `https://api.telegram.org/bot<ТОКЕН>/getUpdates`  
     и найди `"chat":{"id": ...`.
3. В корне проекта создай файл **`.env.local`** (не коммить):

```env
TELEGRAM_BOT_TOKEN=твой_токен_от_BotFather
TELEGRAM_CHAT_ID=твой_chat_id
```

4. Перезапусти `npm run dev` и проверь форму на странице **Контакты**.

На **Vercel**: Project → Settings → Environment Variables — те же имена переменных.

## Деплой

Подойдёт [Vercel](https://vercel.com): импорт репозитория, добавь `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в настройках проекта.
