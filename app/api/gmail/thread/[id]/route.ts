import { NextResponse } from "next/server";

import { auth } from "@/auth";

import { getThread } from "@/lib/gmail/service";

export async function GET(
     request: Request,
     {
          params,
     }: {
          params: Promise<{
               id: string;
          }>;
     }
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

          const { id } =
               await params;

          const thread =
               await getThread(
                    session.user.id,
                    id
               );

          return NextResponse.json(
               thread
          );
     } catch (error) {
          console.error(error);

          return NextResponse.json(
               {
                    error:
                         "Failed to load thread",
               },
               {
                    status: 500,
               }
          );
     }
}