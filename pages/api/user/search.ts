import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

import serverWithHandler, { ResponseType } from '@libs/server/serverWithHandler';
import { User } from '@libs/types';
import db from '@libs/server/db';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { email } = req.body;
  try {
    const token = req.headers.authorization;

    if (token) {
      const user = jwt.decode(token) as User;
      if (user && user.uid) {
        const targetUserList = await db.query(`SELECT * FROM user WHERE email='${email}';`);

        if (targetUserList.length === 0) {
          return res.json({
            result: true,
            user: undefined,
            isFriend: false,
          });
        }

        const targetUser = targetUserList[0];
        const isFriend = await db.query(
          `SELECT * FROM friend WHERE user_uid=${user.uid} AND target_uid=${targetUser.uid};`
        );

        return res.json({
          result: true,
          user: targetUser,
          isFriend: isFriend.length > 0,
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
