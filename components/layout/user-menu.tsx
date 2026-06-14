"use client";

import { signOut } from "next-auth/react";

export function UserMenu() {
     return (
          <button
               onClick={() =>
                    signOut({
                         callbackUrl: "/login",
                    })
               }
               className="rounded-lg border px-4 py-2"
          >
               Logout
          </button>
     );
}