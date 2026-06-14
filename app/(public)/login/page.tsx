import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: "/dashboard",
          });
        }}
      >
        <button
          className="rounded-lg border px-6 py-3"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}