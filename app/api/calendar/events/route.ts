import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { createEvent } from "@/lib/calendar/create-event";

export async function POST(
     request: Request
) {
     const session = await auth();

     if (!session?.user?.id) {
          return NextResponse.json(
               {},
               { status: 401 }
          );
     }

     const body = await request.json();

     const event = await createEvent({
          userId: session.user.id,
          title: body.title,
          description: body.description,
          start: body.start,
          end: body.end,
     });

     console.dir(event, {
          depth: null,
     });

     return NextResponse.json(event);
}