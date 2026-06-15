"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";

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

                         const active = pathname === item.href;

                         return (
                              <Link
                                   key={item.href}
                                   href={item.href}
                                   className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${active
                                             ? "bg-primary text-white"
                                             : "hover:bg-muted"
                                        }`}
                              >
                                   <Icon size={18} />
                                   {item.title}
                              </Link>
                         );
                    })}
               </nav>

          </aside>
     );
}