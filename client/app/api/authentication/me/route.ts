import { NextRequest, NextResponse } from 'next/server';

import { verifyToken } from '@/utils/helpers';

interface HasuraClaims {
  'x-hasura-allowed-roles': string[];
  'x-hasura-default-role': string;
  'x-hasura-user-id': string;
}

interface IDecoded {
  'https://hasura.io/jwt/claims': HasuraClaims;
  email: string;
  fullName: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
}

export const POST = async (request: NextRequest) => {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return NextResponse.json('No token provided', { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  if (token) {
    try {
      const decoded = (await verifyToken(
        token,
        process.env.JWT_SECRET as string,
      )) as IDecoded;
      return NextResponse.json({
        user_id: decoded.aud,
        fullName: decoded.fullName,
      });
    } catch (error) {
      console.error('JWT verification error:', error);
      return NextResponse.json('Invalid token', { status: 401 });
    }
  } else {
    return NextResponse.json('Invalid token', { status: 401 });
  }
};
