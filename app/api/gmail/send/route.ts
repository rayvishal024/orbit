import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { sendEmail } from "@/lib/gmail/service";


export async function POST(
     request: Request
) {
     try {
          const session =
               await auth();

          if (!session?.user?.id) {
               return NextResponse.json(
                    {
                         error:
                              "Unauthorized",
                    },
                    {
                         status: 401,
                    }
               );
          }

          const body =
               await request.json();

          await sendEmail(
               session.user.id,
               body
          );

          return NextResponse.json({
               success: true,
          });
     } catch (error) {
          console.error(error);

          return NextResponse.json(
               {
                    error:
                         "Failed to send email",
               },
               {
                    status: 500,
               }
          );
     }
}

