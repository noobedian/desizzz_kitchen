import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const KEY = "todays-menu";

export async function GET() {
  try {
    const menu = await kv.get(KEY);
    if (
      Array.isArray(menu) &&
      menu.every(
        (section) =>
          section &&
          typeof section === "object" &&
          typeof section.title === "string" &&
          Array.isArray(section.dishes)
      )
    ) {
      return NextResponse.json({ menu });
    }
    return NextResponse.json({ menu: [] });
  } catch (error) {
    return NextResponse.json({ menu: [], error: "Failed to fetch menu" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (
      Array.isArray(data.menu) &&
      data.menu.every(
        (section: { title: string; dishes: any[] }) =>
          section &&
          typeof section === "object" &&
          typeof section.title === "string" &&
          Array.isArray(section.dishes)
      )
    ) {
      await kv.set(KEY, data.menu);
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, error: "Invalid menu structure" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save menu" }, { status: 500 });
  }
}
