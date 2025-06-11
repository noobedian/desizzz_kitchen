import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const KEY = "todays-menu";

export async function GET() {
  const menu = await kv.get(KEY);
  return NextResponse.json({ menu: menu || [{ title: "Today's Specials", dishes: [] }] });
}

export async function POST(req: Request) {
  const data = await req.json();
  if (Array.isArray(data.menu)) {
    await kv.set(KEY, data.menu);
  }
  return NextResponse.json({ success: true });
}
