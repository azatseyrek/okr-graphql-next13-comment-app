import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_NAME } from './constants';

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  console.log(path, 'this is path ------');

  // If it's the root path, just render it
  if (path === '/') {
    return NextResponse.next();
  }

  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);

  console.log('token from middleware', token);

  if (!token && path === '/posts') {
    return NextResponse.redirect(new URL('auth/login', req.url));
  } else if (
    token &&
    (path.includes('auth/login') || path.includes('auth/register'))
  ) {
    return NextResponse.redirect(new URL('/posts', req.url));
  }

  return NextResponse.next();
}
