"use client";

import { useState } from "react";

export function ReplyBox({
     to,
     subject,
     threadId,
}: {
     to: string;
     subject: string;
     threadId: string;
}) {
     const [body, setBody] =
          useState("");

     const [sending, setSending] =
          useState(false);

     async function handleSend() {
          setSending(true);

          await fetch(
               "/api/gmail/reply",
               {
                    method: "POST",
                    headers: {
                         "Content-Type":
                              "application/json",
                    },
                    body: JSON.stringify({
                         to,
                         subject: `Re: ${subject}`,
                         body,
                         threadId,
                    }),
               }
          );

          setBody("");
          setSending(false);
     }

     return (
          <div className="border-t p-4">
               <textarea
                    value={body}
                    onChange={(e) =>
                         setBody(e.target.value)
                    }
                    placeholder="Reply..."
                    className="w-full min-h-[120px] rounded border p-3"
               />

               <button
                    onClick={handleSend}
                    disabled={sending}
                    className="mt-3 rounded border px-4 py-2"
               >
                    {sending
                         ? "Sending..."
                         : "Send Reply"}
               </button>
          </div>
     );
}