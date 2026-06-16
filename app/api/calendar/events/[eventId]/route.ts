import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { deleteEvent } from "@/lib/calendar/delete-event";
import { updateEvent }
     from "@/lib/calendar/update-event";

interface Props {
     params: Promise<{
          eventId: string;
     }>;
}

export async function DELETE(
     request: Request,
     { params }: Props
) {
     const session = await auth();

     if (!session?.user?.id) {
          return NextResponse.json(
               {},
               { status: 401 }
          );
     }

     const { eventId } =
          await params;

     await deleteEvent(
          session.user.id,
          eventId
     );

     return NextResponse.json({
          success: true,
     });
}

export async function PATCH(
     request: Request,
     { params }: Props
) {
     const session = await auth();

     if (!session?.user?.id) {
          return NextResponse.json(
               {},
               { status: 401 }
          );
     }

     const body =
          await request.json();

     const { eventId } =
          await params;

     const event =
          await updateEvent({
               userId: session.user.id,
               eventId,

               title: body.title,
               description:
                    body.description,

               start: body.start,
               end: body.end,
          });

     return NextResponse.json(
          event
     );
}