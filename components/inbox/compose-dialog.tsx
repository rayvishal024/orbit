"use client";

import { useState } from "react";

import {
     Dialog,
     DialogContent,
     DialogHeader,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ComposeDialog() {
     const [open, setOpen] =
          useState(false);

     const [loading, setLoading] =
          useState(false);

     const [form, setForm] =
          useState({
               to: "",
               cc: "",
               bcc: "",
               subject: "",
               body: "",
          });

     async function onSend() {
          try {
               setLoading(true);

               const response =
                    await fetch(
                         "/api/gmail/send",
                         {
                              method: "POST",
                              headers: {
                                   "Content-Type":
                                        "application/json",
                              },
                              body: JSON.stringify(
                                   form
                              ),
                         }
                    );

               if (!response.ok) {
                    throw new Error(
                         "Failed to send email"
                    );
               }

               setOpen(false);

               setForm({
                    to: "",
                    cc: "",
                    bcc: "",
                    subject: "",
                    body: "",
               });
          } catch (error) {
               console.error(error);
          } finally {
               setLoading(false);
          }
     }

     return (
          <Dialog
               open={open}
               onOpenChange={setOpen}
          >
               <DialogTrigger>
                    <Button className="w-full">
                         Compose
                    </Button>
               </DialogTrigger>

               <DialogContent className="sm:max-w-3xl">
                    <DialogHeader>
                         <DialogTitle>
                              New Message
                         </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                         <Input
                              placeholder="To"
                              value={form.to}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        to: e.target.value,
                                   })
                              }
                         />

                         <div className="grid grid-cols-2 gap-3">
                              <Input
                                   placeholder="Cc"
                                   value={form.cc}
                                   onChange={(e) =>
                                        setForm({
                                             ...form,
                                             cc: e.target.value,
                                        })
                                   }
                              />

                              <Input
                                   placeholder="Bcc"
                                   value={form.bcc}
                                   onChange={(e) =>
                                        setForm({
                                             ...form,
                                             bcc: e.target.value,
                                        })
                                   }
                              />
                         </div>

                         <Input
                              placeholder="Subject"
                              value={form.subject}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        subject:
                                             e.target.value,
                                   })
                              }
                         />

                         <Textarea
                              className="
                                   min-h-[350px]
                                   resize-none
                              "
                              placeholder="Write your message..."
                              value={form.body}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        body: e.target.value,
                                   })
                              }
                         />

                         <div className="flex justify-end">
                              <Button
                                   disabled={
                                        loading ||
                                        !form.to ||
                                        !form.subject
                                   }
                                   onClick={onSend}
                              >
                                   {loading
                                        ? "Sending..."
                                        : "Send Email"}
                              </Button>
                         </div>
                    </div>
               </DialogContent>
          </Dialog>
     );
}