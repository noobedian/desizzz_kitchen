import { NextResponse } from "next/server";

let todaysMenu: any[] = []; // In-memory for demo; resets on serverless cold start

export async function GET() {
  return NextResponse.json({ menu: todaysMenu });
}

export async function POST(req: Request) {
  const data = await req.json();
  todaysMenu = data.menu;
  return NextResponse.json({ success: true });
}
