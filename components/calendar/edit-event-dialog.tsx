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

import { CalendarEvent }
     from "@/types/calendar";

interface Props {
     event: CalendarEvent;
}

export function EditEventDialog({
     event,
}: Props) {
     const [open, setOpen] =
          useState(false);

     const [loading, setLoading] =
          useState(false);

     const [form, setForm] =
          useState({
               title: event.title,
               description:
                    event.description ?? "",

               start:
                    event.start.slice(
                         0,
                         16
                    ),

               end:
                    event.end.slice(
                         0,
                         16
                    ),
          });

     async function onUpdate() {
          try {
               setLoading(true);

               console.log("form :", form);
               const response =
                    await fetch(
                         `/api/calendar/events/${event.id}`,
                         {
                              method: "PATCH",

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
                         "Failed to update"
                    );
               }

               setOpen(false);

               window.location.reload();
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
                    <Button
                         size="sm"
                         variant="outline"
                    >
                         Edit
                    </Button>
               </DialogTrigger>

               <DialogContent>
                    <DialogHeader>
                         <DialogTitle>
                              Edit Event
                         </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                         <Input
                              placeholder="Title"
                              value={form.title}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        title:
                                             e.target.value,
                                   })
                              }
                         />

                         <Input
                              placeholder="Description"
                              value={
                                   form.description
                              }
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        description:
                                             e.target.value,
                                   })
                              }
                         />

                         <Input
                              type="datetime-local"
                              value={form.start}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        start:
                                             e.target.value,
                                   })
                              }
                         />

                         <Input
                              type="datetime-local"
                              value={form.end}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        end:
                                             e.target.value,
                                   })
                              }
                         />

                         <Button
                              onClick={onUpdate}
                              disabled={loading}
                         >
                              {loading
                                   ? "Updating..."
                                   : "Update Event"}
                         </Button>
                    </div>
               </DialogContent>
          </Dialog>
     );
}