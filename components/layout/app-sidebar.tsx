"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";
import { ComposeDialog } from "@/components/inbox/compose-dialog";

export function AppSidebar() {
     const pathname = usePathname();

     return (
          <aside className="w-64 border-r bg-background">
               <div className="p-6">
                    <h1 className="text-xl font-bold">
                         Orbit
                    </h1>
               </div>

               <nav className="space-y-2 px-3">
                    {navigation.map((item) => {
                         const Icon = item.icon;

                         const active =
                              item.href === "/mail"
                                   ? pathname.startsWith("/mail")
                                   : pathname === item.href;

                         return (
                              <div key={item.href}>
                                   <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${active
                                                  ? "bg-primary text-primary-foreground"
                                                  : "hover:bg-muted"
                                             }`}
                                   >
                                        <Icon size={18} />
                                        {item.title}
                                   </Link>

                                   {item.title === "Mail" &&
                                        pathname.startsWith("/mail") && (
                                             <div className="mt-3 ml-6 space-y-1">
                                                  <ComposeDialog />

                                                  <div className="space-y-1 pt-2">
                                                       {item.children?.map(
                                                            (folder) => {
                                                                 const FolderIcon =
                                                                      folder.icon;

                                                                 const isFolderActive =
                                                                      pathname +
                                                                      window.location.search ===
                                                                      folder.href;

                                                                 return (
                                                                      <Link
                                                                           key={
                                                                                folder.href
                                                                           }
                                                                           href={
                                                                                folder.href
                                                                           }
                                                                           className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${isFolderActive
                                                                                     ? "bg-muted font-medium text-foreground"
                                                                                     : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                                                }`}
                                                                      >
                                                                           <FolderIcon
                                                                                size={
                                                                                     14
                                                                                }
                                                                           />
                                                                           {
                                                                                folder.title
                                                                           }
                                                                      </Link>
                                                                 );
                                                            }
                                                       )}
                                                  </div>
                                             </div>
                                        )}
                              </div>
                         );
                    })}
               </nav>
          </aside>
     );
}