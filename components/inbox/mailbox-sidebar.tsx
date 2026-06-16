import Link from "next/link";
import {
     Inbox,
     Send,
     Star,
     Trash2,
} from "lucide-react";

import { ComposeDialog } from "@/components/inbox/compose-dialog";

const folders = [
     {
          name: "Inbox",
          href: "/mail?folder=inbox",
          icon: Inbox,
     },
     {
          name: "Sent",
          href: "/mail?folder=sent",
          icon: Send,
     },
     {
          name: "Starred",
          href: "/mail?folder=starred",
          icon: Star,
     },
     {
          name: "Trash",
          href: "/mail?folder=trash",
          icon: Trash2,
     },
];

export function MailboxSidebar() {
     return (
          <aside className="h-full p-4">
               <div className="mb-6">
                    <ComposeDialog />
               </div>

               <nav className="space-y-1">
                    {folders.map((folder) => {
                         const Icon = folder.icon;

                         return (
                              <Link
                                   key={folder.name}
                                   href={folder.href}
                                   className="
                flex items-center gap-3
                rounded-lg px-3 py-2
                text-sm
                hover:bg-muted
                transition-colors
              "
                              >
                                   <Icon size={16} />
                                   <span>{folder.name}</span>
                              </Link>
                         );
                    })}
               </nav>
          </aside>
     );
}