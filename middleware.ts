export { auth as middleware } from "@/auth";

export const config = {
     matcher: [
          "/dashboard/:path*",
          "/inbox/:path*",
          "/calendar/:path*",
          "/search/:path*",
          "/settings/:path*",
     ],
};