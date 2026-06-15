import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const integrations = await prisma.integration.findMany({
      where: {
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      gmail: integrations.some(
        (i) => i.provider === "GMAIL" && i.connected
      ),
      calendar: integrations.some(
        (i) => i.provider === "CALENDAR" && i.connected
      ),
    });
  } catch (error) {
    console.error("Error fetching integrations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
