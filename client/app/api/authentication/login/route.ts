import { NextRequest, NextResponse } from 'next/server';

import { REGISTER_USER_MUTATION } from '@/graphql/mutations';
import { GET_ALL_POSTS, IS_USER_EXIST } from '@/graphql/queries';
import Hasura from '@/utils/clients/hasura';

export const GET = async () => {
  const posts = await Hasura.request(GET_ALL_POSTS);
  return NextResponse.json({ posts }, { status: 200 });
};

export const POST = async () => {
  return NextResponse.json({ accessToken: 'accesTokenLogin' });
};
