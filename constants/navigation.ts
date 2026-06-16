import {
     LayoutDashboard,
     Inbox,
     Calendar,
     Search,
     Settings,
     Send,
     Star,
     Trash2,
} from "lucide-react";

export const navigation = [
     {
          title: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
     },
     {
          title: "Mail",
          href: "/mail",
          icon: Inbox,

          children: [
               {
                    title: "Inbox",
                    href: "/mail?folder=inbox",
                    icon: Inbox,
               },
               {
                    title: "Sent",
                    href: "/mail?folder=sent",
                    icon: Send,
               },
               {
                    title: "Starred",
                    href: "/mail?folder=starred",
                    icon: Star,
               },
               {
                    title: "Trash",
                    href: "/mail?folder=trash",
                    icon: Trash2,
               },
          ],
     },
     {
          title: "Calendar",
          href: "/calendar",
          icon: Calendar,
     },
     {
          title: "Search",
          href: "/search",
          icon: Search,
     },
     {
          title: "Settings",
          href: "/settings",
          icon: Settings,
     },
];