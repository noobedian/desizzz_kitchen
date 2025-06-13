import { kv } from "@vercel/kv";
import { headers } from "next/headers";

export const runtime = "edge";

export async function GET() {
  const headersList = headers();
  const accept = headersList.get("accept");

  if (accept?.includes("text/event-stream")) {
    const stream = new ReadableStream({
      async start(controller) {
        const sendMenu = async () => {
          try {
            let menu = await kv.get("todays-menu");
            if (typeof menu === "string") {
              menu = JSON.parse(menu);
            }
            controller.enqueue(`data: ${JSON.stringify({ menu })}\n\n`);
          } catch (error) {
            controller.enqueue(`data: ${JSON.stringify({ menu: [] })}\n\n`);
          }
        };

        // Send initial menu
        await sendMenu();

        // Subscribe to menu updates
        const unsubscribe = await kv.subscribe("todays-menu-updates", async () => {
          await sendMenu();
        });
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  return new Response("Accepts EventStream requests only", { status: 400 });
}
