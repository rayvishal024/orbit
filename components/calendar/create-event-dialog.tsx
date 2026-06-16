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

export function CreateEventDialog() {
     const [open, setOpen] =
          useState(false);

     const [loading, setLoading] =
          useState(false);

     const [form, setForm] =
          useState({
               title: "",
               description: "",
               start: "",
               end: "",
          });

     async function onCreate() {
          try {
               setLoading(true);

               const response = await fetch(
                    "/api/calendar/events",
                    {
                         method: "POST",
                         headers: {
                              "Content-Type":
                                   "application/json",
                         },
                         body: JSON.stringify(form),
                    }
               );

               if (!response.ok) {
                    const error =
                         await response.text();

                    console.error(error);

                    alert(
                         "Failed to create event"
                    );

                    return;
               }

               const result =
                    await response.json();

               console.log(result);

               setOpen(false);

               setForm({
                    title: "",
                    description: "",
                    start: "",
                    end: "",
               });

               window.location.reload();
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
                    <Button>
                        + Create Event
                    </Button>
               </DialogTrigger>

               <DialogContent>
                    <DialogHeader>
                         <DialogTitle>
                              New Event
                         </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3">
                         <Input
                              placeholder="Title"
                              value={form.title}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        title: e.target.value,
                                   })
                              }
                         />

                         <Input
                              placeholder="Description"
                              value={form.description}
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
                                        start: e.target.value,
                                   })
                              }
                         />

                         <Input
                              type="datetime-local"
                              value={form.end}
                              onChange={(e) =>
                                   setForm({
                                        ...form,
                                        end: e.target.value,
                                   })
                              }
                         />

                         <Button
                              onClick={onCreate}
                              disabled={loading}
                         >
                              {loading
                                   ? "Creating..."
                                   : "Create Event"}
                         </Button>
                    </div>
               </DialogContent>
          </Dialog>
     );
}