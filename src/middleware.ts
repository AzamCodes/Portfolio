// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   const protectedPaths = ['/admin/add-blog'];
//   if (protectedPaths.includes(req.nextUrl.pathname)) {
//     const authHeader = req.headers.get('authorization');
//     if (!authHeader) return NextResponse.redirect(new URL('/unauthorized', req.url));

//     const [user, pass] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//     if (
//       user !== process.env.ADMIN_USERNAME ||
//       pass !== process.env.ADMIN_PASSWORD
//     ) {
//       return NextResponse.redirect(new URL('/unauthorized', req.url));
//     }
//   }

//   return NextResponse.next();
// }
// middleware.ts
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Check if the URL starts with "/admin"
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Retrieve the "admin-auth" cookie set by your login API
    const adminAuth = req.cookies.get("admin-auth");
    // If the cookie doesn't exist or doesn't match the expected value, redirect to the homepage.
    if (!adminAuth || adminAuth.value !== "true") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}

// Explicit matcher configuration: protects all routes under /admin
export const config = {
  matcher: ["/admin/:path*"],
};
