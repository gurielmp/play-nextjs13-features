import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const isLogin = true
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/about/profile/:path*"
  ]
}