import { NextResponse } from 'next/server';

import { COOKIE_NAME } from '@/constants';
import { serialize } from 'cookie';

export const POST = async () => {
  try {
    const serialized = serialize(COOKIE_NAME, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    return NextResponse.json(
      { message: 'Logout successful' },
      {
        status: 200,
        headers: {
          'Set-Cookie': serialized,
        },
      },
    );
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json(
      {
        message: 'An error occurred',
      },
      { status: 500 },
    );
  }
};
