import { NextResponse, type NextRequest } from 'next/server'
import { sessionChecker } from './utils/sessionChecker'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  const hasSession = await sessionChecker(req)

  if (!hasSession && path !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = { matcher: ['/login/:path*', '/english-tool'] }
