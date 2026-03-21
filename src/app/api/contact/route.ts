import { NextResponse } from "next/server";

const TG_API = "https://api.telegram.org/bot";

/** Лимиты Telegram и защита от слишком длинных полей */
const MAX_NAME = 200;
const MAX_MESSAGE = 3500;

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const body = data as { name?: unknown; message?: unknown };
  const name =
    typeof body.name === "string" ? body.name.trim().slice(0, MAX_NAME) : "";
  const message =
    typeof body.message === "string"
      ? body.message.trim().slice(0, MAX_MESSAGE)
      : "";

  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error(
      "[contact] Задай TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local",
    );
    return NextResponse.json({ ok: false, error: "config" }, { status: 503 });
  }

  const text =
    `📩 Портфолио mif.dev\n\n` +
    `Имя: ${name}\n\n` +
    `Сообщение:\n${message}`;

  const telegramUrl = `${TG_API}${token}/sendMessage`;

  let tgRes: Response;
  try {
    tgRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text.slice(0, 4096),
        disable_web_page_preview: true,
      }),
    });
  } catch (e) {
    console.error("[contact] fetch Telegram failed", e);
    return NextResponse.json({ ok: false, error: "telegram" }, { status: 502 });
  }

  const tgJson = (await tgRes.json().catch(() => ({}))) as {
    ok?: boolean;
    description?: string;
  };

  if (!tgRes.ok || !tgJson.ok) {
    console.error("[contact] Telegram API:", tgJson);
    return NextResponse.json({ ok: false, error: "telegram" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
