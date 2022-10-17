import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

import serverWithHandler, { ResponseType } from '@libs/server/serverWithHandler';
import { User } from '@libs/types';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  try {
    const token = req.headers.authorization;

    if (token) {
      const user = jwt.decode(token) as User;
      if (user && user.uid) {
        return res.json({
          result: true,
          user,
        });
      }
    }

    return res.json({
      result: false,
    });
  } catch {
    return res.json({
      result: false,
      error: '잠시후 다시 시도해주세요.',
    });
  }
}

export default serverWithHandler({ method: 'POST', handler });
