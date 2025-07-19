import { type NextRequest, NextResponse } from 'next/server';

console.log('✅ Middleware is running...');

export function middleware(req: NextRequest) {
  console.log('Middleware executing for:', req.nextUrl.pathname);

  const authCookie = req.cookies.get('auth')?.value;
  const isLoginPage = req.nextUrl.pathname.startsWith('/login');

  if (!authCookie && !isLoginPage) {
    console.log('🔒 Redirecting to /login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  console.log('✅ Access granted:', req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/protected', '/church', '/venue', '/form', '/contact'],
};
