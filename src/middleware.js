import { NextResponse } from "next/server"

export function middleware(request) {
  // Cek apakah request ke halaman admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Dalam production, tambahkan validasi session/token yang lebih kuat
    // Untuk sekarang, kita biarkan client-side handle authentication
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
