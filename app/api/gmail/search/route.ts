import { auth } from "@/auth";
import { searchThreads } from "@/lib/gmail";

export async function GET(
     request: Request
) {
     const session =
          await auth();

     if (!session?.user?.id) {
          return Response.json(
               { error: "Unauthorized" },
               { status: 401 }
          );
     }

     const { searchParams } =
          new URL(request.url);

     const q =
          searchParams.get("q") ?? "";

     const threads =
          await searchThreads(
               session.user.id,
               q
          );

     return Response.json(
          threads
     );
}