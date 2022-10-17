import { NextApiRequest, NextApiResponse } from 'next';

import serverWithHandler, { ResponseType } from '@libs/server/serverWithHandler';
import db from '@libs/server/db';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  try {
    await db.exec('DROP TABLE user;');
    await db.exec(`
      CREATE TABLE user (
        uid INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(50),
        name VARCHAR(20),
        password VARCHAR(300),
        created_at DATETIME,
        modified_at DATETIME,
        CONSTRAINT user_PK PRIMARY KEY(uid)
      );
    `);

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
