import { NextResponse } from "next/server";

/** Для проверок Railway / балансеров — быстрый ответ без логики. */
export function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
