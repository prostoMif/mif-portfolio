import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  if (!data?.name || !data?.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
