import { NextRequest, NextResponse } from 'next/server';

import { REGISTER_USER_MUTATION } from '@/graphql/mutations';
import { IS_USER_EXIST } from '@/graphql/queries';
import Hasura from '@/utils/clients/hasura';
import { signAccessToken } from '@/utils/helpers';
import bcrypt from 'bcrypt';

interface IUser {
  id?: string;
}

interface INewUser {
  insert_users_one: {
    fullName: string;
    email: string;
    password: string;
  };
}

export const POST = async (request: NextRequest) => {
  try {
    const requestData = await request.json();
    const { email, password, fullName } = requestData.input.data;

    if (!email || !password || !fullName) {
      return NextResponse.json(
        {
          accessToken: null,
          message: 'All fields are required',
        },
        { status: 400 },
      );
    }

    const userExistResponse = await Hasura.request(IS_USER_EXIST, { email });
    const { users } = userExistResponse as { users: IUser[] };

    if (users.length > 0) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser: INewUser = await Hasura.request(REGISTER_USER_MUTATION, {
      email,
      password: hashedPassword,
      fullName,
    });

    const accessToken = await signAccessToken(newUser.insert_users_one);

    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json(
      {
        accessToken: null,
        message: 'Error occurred while processing the request',
      },
      { status: 500 },
    );
  }
};
