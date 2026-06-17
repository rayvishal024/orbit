export { auth as middleware } from "@/auth";

export const config = {
     matcher: [
          "/dashboard/:path*",
          "/mail/:path*",
          "/calendar/:path*",
          "/sent/:path*",
          "/search/:path*",
          "/settings/:path*",
     ],
};