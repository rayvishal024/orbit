import { auth } from "@/auth";

import { getUserIntegrations } from "@/lib/integrations/get-user-integrations";

import { IntegrationCard } from "@/components/settings/integration-card";

export default async function SettingsPage() {
  const session = await auth();

  console.log("session :-", session)
  const integrations = await getUserIntegrations(session!.user.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Connected Accounts
        </h1>

        <p className="text-muted-foreground">
          Manage Gmail and Calendar
          connections.
        </p>
      </div>

      <IntegrationCard
        title="Gmail"
        description="Read, search and send emails"
        connected={integrations.gmail}
      />

      <IntegrationCard
        title="Google Calendar"
        description="Manage events and meetings"
        connected={integrations.calendar}
      />
    </div>
  );
}