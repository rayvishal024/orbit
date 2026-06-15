import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form action={async () => {
          "use server";
          await signIn("google", {redirectTo: "/dashboard",
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

// "use client"

// import { signIn } from "next-auth/react";

// export default function SignIn() {
//   return (
//     <div>
//       <div className="bg-zinc-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
//         <div className="relative min-h font-[Geist,Inter,sans-serif] bg-zinc-950 text-neutral-50 p-12 w-full overflow-hidden">
//           <div className="bg-[radial-gradient(circle_at_center,oklch(0.546_0.245_262.881/.06),transparent_34%)] absolute inset-0" />
//           <div className="bg-[radial-gradient(circle_at_center,transparent_0_170px,oklch(1_0_0/.06)_171px_172px,transparent_173px_250px,oklch(1_0_0/.05)_251px_252px,transparent_253px_330px,oklch(1_0_0/.04)_331px_332px,transparent_333px)] absolute inset-0" />
//           <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/40 border-1 border-solid absolute w-190 h-190" />
//           <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/30 border-1 border-solid absolute w-140 h-140" />
//           <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white/20 border-1 border-solid absolute w-90 h-90" />
//           <div className="left-1/2 top-[18%] -translate-x-1/2 rounded-full border-white/20 border-1 border-solid absolute w-225 h-225" />
//           <div className="left-[18%] top-[22%] rounded-full border-white/20 border-1 border-solid absolute w-155 h-155" />
//           <div className="left-[58%] top-[28%] rounded-full border-white/20 border-1 border-solid absolute w-130 h-130" />
//           <div className="relative z-10 min-h-[932px] flex justify-center items-center">
//             <div className="rounded-[10px] bg-zinc-900 text-neutral-50 border-white/10 border-1 border-solid p-10 w-100">
//               <div className="text-center flex flex-col items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="size-5 rounded-full border-[#155dfc] border-2 border-solid flex justify-center items-center">
//                     <div className="size-2 rounded-full bg-[#155dfc]" />
//                   </div>
//                   <div className="font-bold text-neutral-50 text-lg leading-7 tracking-[-0.32px]">
//                     Orbit
//                   </div>
//                 </div>
//                 <div className="bg-white/10 w-full h-px" />
//                 <div className="flex flex-col items-center gap-2">
//                   <div className="font-bold text-neutral-50 text-[22px] tracking-[-0.48px]">
//                     Sign in to Orbit
//                   </div>
//                   <div className="max-w-[320px] text-[#9f9fa9] text-[13px] leading-5">
//                     Connect your Google account to get started. No password
//                     required.
//                   </div>
//                 </div>
//                 <div className="h-7" />
//                 <button
//                   onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
//                   className="transition-colors font-medium rounded-md bg-zinc-800 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid flex px-4 justify-center items-center gap-3 w-full h-11">
//                   <svg
//                     aria-hidden="true"
//                     className="size-4 shrink-0"
//                     viewBox="0 0 48 48"
//                   >
//                     <path
//                       d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.315 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.038l5.657-5.657C34.075 6.053 29.327 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
//                       fill="#FFC107"
//                     />
//                     <path
//                       d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.038l5.657-5.657C34.075 6.053 29.327 4 24 4c-7.682 0-14.354 4.337-17.694 10.691z"
//                       fill="#FF3D00"
//                     />
//                     <path
//                       d="M24 44c5.225 0 9.89-2.001 13.409-5.272l-6.19-5.238C29.184 35.091 26.715 36 24 36c-5.294 0-9.618-3.315-11.286-7.946l-6.522 5.025C9.49 39.556 16.227 44 24 44z"
//                       fill="#4CAF50"
//                     />
//                     <path
//                       d="M43.611 20.083H42V20H24v8h11.303c-1.01 2.857-2.967 5.192-5.084 6.49l.003-.002 6.19 5.238C35.972 39.36 44 33 44 24c0-1.341-.138-2.651-.389-3.917z"
//                       fill="#1976D2"
//                     />
//                   </svg>
//                   <span>Continue with Google</span>
//                 </button>
//                 <div className="text-center text-[#9f9fa9] text-[11px] leading-5 pt-1">
//                   By continuing, you agree to Orbit's
//                   <span className="underline-offset-2 underline text-[#155dfc]">
//                     Terms of Service
//                   </span>
//                   and
//                   <span className="underline-offset-2 underline text-[#155dfc]">
//                     Privacy Policy
//                   </span>
//                   .
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="left-1/2 -translate-x-1/2 text-center text-[#9f9fa9] text-[11px] leading-5 absolute bottom-8">
//             🔒 Secured with OAuth 2.0 — Orbit never stores your Google password.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
