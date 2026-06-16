import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { getThreads } from "@/lib/gmail/service";

export async function GET() {
     try {
          const session = await auth();

          if (!session?.user?.id) {
               return NextResponse.json(
                    { error: "Unauthorized" },
                    { status: 401 }
               );
          }

          const threads = await getThreads(
               session.user.id
          );

          return NextResponse.json(threads);
     } catch (error) {
          console.error(error);

          return NextResponse.json(
               { error: "Failed to load inbox" },
               { status: 500 }
          );
     }
}