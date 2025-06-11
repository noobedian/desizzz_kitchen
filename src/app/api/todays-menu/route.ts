import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const KEY = "todays-menu";

export async function GET() {
  // Only return the menu if it exists and is valid, otherwise return an empty array (not a fallback section)
  const menu = await kv.get(KEY);
  if (
    Array.isArray(menu) &&
    menu.every(
      (section) =>
        typeof section === "object" &&
        typeof section.title === "string" &&
        Array.isArray(section.dishes)
    )
  ) {
    return NextResponse.json({ menu });
  }
  // If nothing is set, return an empty array (no default/fallback section)
  return NextResponse.json({ menu: [] });
}

export async function POST(req: Request) {
  const data = await req.json();
  // Validate menu structure before saving
  if (
    Array.isArray(data.menu) &&
    data.menu.every(
      (section: { title: string; dishes: any[] }) =>
        typeof section === "object" &&
        typeof section.title === "string" &&
        Array.isArray(section.dishes)
    )
  ) {
    await kv.set(KEY, data.menu);
    return NextResponse.json({ success: true });
  }
  // If invalid, do not overwrite and return error
  return NextResponse.json({ success: false, error: "Invalid menu structure" }, { status: 400 });
}
