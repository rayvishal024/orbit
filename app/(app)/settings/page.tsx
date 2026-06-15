import { auth } from "@/auth";
import { getUserIntegrations } from "@/lib/integrations/get-user-integrations";
import { IntegrationCard } from "@/components/settings/integration-card";

export default async function SettingsPage() {
  const session = await auth();
  const integrations = await getUserIntegrations(session!.user.id);
  console.log("Integration :", integrations);
  console.log("session", session);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Connected Accounts</h1>
        <p className="text-muted-foreground">
          Manage your Gmail and Google Calendar connections.
        </p>
      </div>

      <div className="space-y-4">
        <IntegrationCard
          title="Gmail"
          description="Read, search and send emails"
          connected={integrations.gmail}
          pluginName="gmail"
        />

        <IntegrationCard
          title="Google Calendar"
          description="Manage events and meetings"
          connected={integrations.calendar}
          pluginName="googlecalendar"
        />
      </div>
    </div>
  );
}