import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body.input.data);

  return NextResponse.json({ accessToken: 'accesTokenRegister' });
};
