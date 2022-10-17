import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import serverWithHandler, { ResponseType } from '@libs/server/serverWithHandler';
import db from '@libs/server/db';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { email, password } = req.body;

  try {
    const userList = await db.query(`SELECT * FROM user WHERE email='${email}';`);
    if (userList.length === 0) {
      return res.json({
        result: false,
        error: '이메일 혹은 비밀번호가 일치하지 않습니다.',
      });
    }

    const user = userList[0];
    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
      return res.json({
        result: false,
        error: '이메일 혹은 비밀번호가 일치하지 않습니다.',
      });
    }

    const token = jwt.sign(
      {
        uid: user.uid,
        email: user.email,
        name: user.name,
      },
      process.env.SECRET_KEY as string
    );

    return res.json({
      result: true,
      token,
    });
  } catch {
    return res.json({
      result: false,
      error: '잠시후 다시 시도해주세요.',
    });
  }
}

export default serverWithHandler({ method: 'POST', handler });
