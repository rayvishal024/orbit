import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { sendEmail } from "@/lib/gmail";

export async function POST(
     request: NextRequest
) {
     const session = await auth();

     if (!session?.user?.id) {
          return NextResponse.json(
               { error: "Unauthorized" },
               { status: 401 }
          );
     }

     const body = await request.json();

     await sendEmail(
          session.user.id,
          {
               to: body.to,
               subject: body.subject,
               body: body.body,
               threadId: body.threadId,
          }
     );

     return NextResponse.json({
          success: true,
     });
}