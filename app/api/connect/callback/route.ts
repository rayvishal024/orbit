import { NextRequest, NextResponse } from "next/server";

// CRITICAL: Must be named exactly "GET"
export async function GET(request: NextRequest) {
     const { searchParams } = new URL(request.url);
     const code = searchParams.get("code");
     const state = searchParams.get("state"); // Optional: if you used states

     if (!code) {
          return NextResponse.json({ error: "No authorization code found" }, { status: 400 });
     }

     try {
          // 1. Exchange this 'code' for your tokens using your OAuth client
          // 2. Save the access/refresh tokens to your database via Prisma

          console.log("Authorization code received successfully:", code);

          // 3. Redirect back to your dashboard configuration page
          return NextResponse.redirect(new URL("/dashboard", request.url));

     } catch (error) {
          console.error("Error exchanging OAuth code:", error);
          return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
     }
}