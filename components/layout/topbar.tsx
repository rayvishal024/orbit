import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

export function Topbar() {
     return (
          <header className="flex h-14 items-center justify-end border-b px-6">
               <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <UserMenu />
               </div>
          </header>
     );
}