import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Orbit</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your AI-powered communication workspace</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>📧 Inbox</CardTitle>
            <CardDescription>Manage your emails</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Connect Gmail in settings to view your messages.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📅 Calendar</CardTitle>
            <CardDescription>View your events</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Connect Google Calendar in settings to manage your schedule.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⚙️ Settings</CardTitle>
            <CardDescription>Configure integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/settings" className="text-sm text-blue-600 hover:underline">
              Go to Settings →
            </Link>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}