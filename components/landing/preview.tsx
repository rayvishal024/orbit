export function Preview() {
     return (
          <section className="py-32">
               <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                         <p className="text-primary font-medium">
                              PRODUCT
                         </p>

                         <h2 className="mt-4 text-5xl font-bold">
                              One Workspace.
                              <br />
                              Three Systems.
                         </h2>

                         <p className="mt-6 text-muted-foreground">
                              Email, Calendar and AI finally working together.
                         </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">

                         <div className="rounded-3xl border bg-card p-6">
                              <h3 className="font-semibold">
                                   Inbox
                              </h3>

                              <div className="mt-6 space-y-3">

                                   <div className="rounded-xl border p-3">
                                        Google Security Alert
                                   </div>

                                   <div className="rounded-xl border p-3">
                                        Interview Invitation
                                   </div>

                                   <div className="rounded-xl border p-3">
                                        GitHub Notification
                                   </div>

                              </div>
                         </div>

                         <div className="rounded-3xl border bg-card p-6">
                              <h3 className="font-semibold">
                                   Calendar
                              </h3>

                              <div className="mt-6 space-y-3">

                                   <div className="rounded-xl border p-3">
                                        10:00 Team Standup
                                   </div>

                                   <div className="rounded-xl border p-3">
                                        2:00 Product Review
                                   </div>

                                   <div className="rounded-xl border p-3">
                                        5:00 Interview
                                   </div>

                              </div>
                         </div>

                         <div className="rounded-3xl border bg-card p-6">
                              <h3 className="font-semibold">
                                   AI Assistant
                              </h3>

                              <div className="mt-6 rounded-xl border p-4">

                                   <p className="text-sm text-muted-foreground">
                                        AI Summary
                                   </p>

                                   <p className="mt-2">
                                        3 emails require action.
                                   </p>

                              </div>
                         </div>

                    </div>
               </div>
          </section>
     );
}