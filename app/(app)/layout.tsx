import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { Topbar } from "@/components/layout/topbar";

export default async function AppLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     const session = await auth();

     if (!session) {
          redirect("/login");
     }

     return (
          <div className="flex h-screen">
               <AppSidebar />

               <div className="flex flex-1 flex-col">
                    <Topbar />

                    <main className="flex-1 overflow-auto p-6">
                         {children}
                    </main>
               </div>
          </div>
     );
}