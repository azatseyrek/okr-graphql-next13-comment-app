import { NextRequest, NextResponse } from 'next/server';

import { REGISTER_USER_MUTATION } from '@/graphql/mutations';
import { IS_USER_EXIST } from '@/graphql/queries';
import Hasura from '@/utils/clients/hasura';
import { signAccessToken } from '@/utils/helpers';
import bcrypt from 'bcrypt';

interface IUsers {
  users: {
    id?: string;
  }[];
}

interface INewUser {
  insert_users_one: {
    fullName: string;
    email: string;
    password: string;
  };
}

export const POST = async (request: NextRequest) => {
  const res = await request.json();
  const { email, password, fullName } = res.input.data;

  if (!email || !password || !fullName) {
    return NextResponse.json({
      accesToken: null,
      message: 'all fields are required',
    });
  }

  try {
    const response = await Hasura.request(IS_USER_EXIST, {
      email,
    });

    const { users } = response as IUsers;

    if (users.length > 0) {
      return NextResponse.json({ message: 'email already exists' });
    } else {
      //   return NextResponse.json({ message: 'email doesnt exists' });
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser: INewUser = await Hasura.request(REGISTER_USER_MUTATION, {
        email,
        password: hashedPassword,
        fullName,
      });
      console.log(newUser, 'new user -------');
      const accessToken = await signAccessToken(newUser.insert_users_one);
      return NextResponse.json({ accessToken });
    }
  } catch (e) {
    return NextResponse.json({
      accessToken: null,
      message: 'error for checking is email exists',
    });
  }
};
