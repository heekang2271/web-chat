import { NextApiRequest, NextApiResponse } from 'next';

import serverWithHandler, { ResponseType } from '@libs/server/serverWithHandler';
import { getCurrentTime } from '@libs/utils';
import db from '@libs/server/db';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { email, name, password } = req.body;

  try {
    const checkEmailData = await db.query(`SELECT uid FROM user WHERE EMAIL='${email}';`);
    if (checkEmailData.length > 0) {
      return res.json({
        result: false,
        error: '이미 가입된 이메일입니다.',
      });
    }

    const currentTime = getCurrentTime();
    await db.exec(
      `INSERT INTO user (email, name, password, created_at, modified_at) VALUES ('${email}', '${name}', '${password}', '${currentTime}', '${currentTime}');`
    );

    return res.json({
      result: true,
    });
  } catch {
    return res.json({
      result: false,
      error: '잠시후 다시 시도해주세요.',
    });
  }
}

export default serverWithHandler({ method: 'POST', handler });
