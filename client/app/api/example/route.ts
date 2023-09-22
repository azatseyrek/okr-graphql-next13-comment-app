import { NextRequest, NextResponse } from 'next/server';

import { REGISTER_USER_MUTATION } from '@/graphql/mutations';
import { GET_ALL_POSTS, IS_USER_EXIST } from '@/graphql/queries';
import Hasura from '@/utils/clients/hasura';

interface IUsers {
  users: {
    id?: string;
  }[];
}

export const GET = async () => {
  const posts = await Hasura.request(GET_ALL_POSTS);
  return NextResponse.json({ posts }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const { email } = await request.json();
  console.log(email);
  try {
    const response = await Hasura.request(IS_USER_EXIST, {
      email,
    });

    const { users } = response as IUsers;

    if (users.length > 0) {
      return NextResponse.json({ message: 'email already exists' });
    } else {
      //   return NextResponse.json({ message: 'email doesnt exists' });
      const newUser = await Hasura.request(REGISTER_USER_MUTATION, {
        email,
        password: '123123aaa',
        fullName: 'Miran Ali',
      });
      console.log(newUser);
      return NextResponse.json({ message: 'new user created' });
    }
  } catch (e) {
    return NextResponse.json({ message: 'error for checking is email exists' });
  }
};
