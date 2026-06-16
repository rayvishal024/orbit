"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default  function LoginPage() {


  return (
    <main className="relative min-h-screen overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute right-[-200px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden border-r lg:flex lg:flex-col lg:justify-between lg:p-16">

          <div>

            <div className="mb-12 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>

              <span className="text-xl font-semibold">
                Orbit
              </span>
            </div>

            <h1 className="max-w-xl text-6xl font-bold tracking-tight">
              Email.
              <br />
              Calendar.
              <br />
              AI.
              <br />
              Finally together.
            </h1>

            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Orbit brings communication,
              scheduling and intelligence into
              a single workspace.
            </p>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border bg-card p-5">
              <p className="text-sm text-muted-foreground">
                AI Summary
              </p>

              <p className="mt-2 font-medium">
                4 emails require action today.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5">
              <p className="text-sm text-muted-foreground">
                Schedule
              </p>

              <p className="mt-2 font-medium">
                3 meetings and 1 interview.
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6">

          <div className="w-full max-w-md">

            <div className="rounded-3xl border bg-card/80 p-8 backdrop-blur">

              <div className="text-center">

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>

                <h2 className="text-3xl font-bold">
                  Welcome to Orbit
                </h2>

                <p className="mt-3 text-muted-foreground">
                  Continue with Google to connect
                  Gmail, Calendar and AI.
                </p>

              </div>

              <Button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/dashboard",
                  })
                }
                className="
                  mt-8
                  h-12
                  w-full
                  rounded-xl
                  font-medium
                  transition-all
                  hover:-translate-y-0.5
                "
              >
                Continue with Google →
              </Button>

              <div className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Gmail</span>
                <span>•</span>
                <span>Calendar</span>
                <span>•</span>
                <span>AI Assistant</span>
              </div>

              <p className="mt-8 text-center text-xs text-muted-foreground">
                By continuing, you agree to our
                Terms and Privacy Policy.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}