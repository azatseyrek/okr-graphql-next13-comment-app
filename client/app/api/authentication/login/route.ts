import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_NAME } from '@/constants';
import { LOGIN_USER_QUERY } from '@/graphql/queries';
import Hasura from '@/utils/clients/hasura';
import { signAccessToken } from '@/utils/helpers';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';

interface IUser {
  id: string;
  password: string;
  email: string;
}

export const POST = async (request: NextRequest) => {
  try {
    const requestData = await request.json();
    const { email, password } = requestData.input.data;

    if (!email || !password) {
      return NextResponse.json(
        {
          accessToken: null,
          message: 'All fields are required',
        },
        { status: 400 },
      );
    }

    const { users } = (await Hasura.request(LOGIN_USER_QUERY, { email })) as {
      users: IUser[];
    };

    if (users.length === 0) {
      return NextResponse.json(
        {
          accessToken: null,
          message: "Email doesn't exist",
        },
        { status: 404 },
      );
    }

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          accessToken: null,
          message: 'Password is incorrect',
        },
        { status: 401 },
      );
    }

    const accessToken = await signAccessToken(user);

    const serialized = serialize(COOKIE_NAME, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return NextResponse.json(
      { accessToken },
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
        accessToken: null,
        message: 'An error occurred',
      },
      { status: 500 },
    );
  }
};
