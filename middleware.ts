import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
