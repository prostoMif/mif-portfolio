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

### Railway

Проект собирается в режиме **`output: "standalone"`**: после `npm run build` старт — **`npm run start`** (скрипт `scripts/run-standalone.mjs` принудительно ставит **`HOSTNAME=0.0.0.0`**, иначе в контейнере часто ломает доступ из‑за системной переменной `HOSTNAME`). Порт берётся из **`PORT`** (Railway подставляет сам).

#### `Application failed to respond`

Обычно: деплой «зелёный», но процесс падает или не отвечает на health check.

1. **Deployments** → последний деплой → **View logs** — ищи `Error`, `Cannot find module`, `EADDRINUSE`, stack trace.
2. **Settings** → **Deploy** → **Start Command** должно быть **`npm run start`** (или явно `node .next/standalone/server.js` из корня репозитория).
3. **Root Directory** в Railway — корень репозитория, где лежит `package.json` (если репо не монорепо — оставь пустым).
4. Переменная **`NODE_ENV=production`** на Railway обычно выставляется сама; `PORT` не трогай.
5. После пуша изменений сделай **Redeploy**.

#### `ERR_CONNECTION_TIMED_OUT`

1. **Settings** → **Networking** → сгенерируй **Public URL** (`*.up.railway.app`).
2. Логи деплоя — нет ли падения при старте.
3. Свой домен: **CNAME** по инструкции Railway, подождать DNS.
4. С одной сети не открывается — проверь с мобильного интернета или VPN (маршрут/блокировки).
