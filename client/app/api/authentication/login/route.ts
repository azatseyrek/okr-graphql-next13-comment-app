import type { NextApiRequest, NextApiResponse } from 'next';

import Hasura from '@/utils/clients/hasura';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({ message: 'Hello from Next.js!' });
}
