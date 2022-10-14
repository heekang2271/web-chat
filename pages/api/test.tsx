// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@libs/server/db';

type Data = {
  result: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const data = db.query('SELECT * FROM user;');
    console.log(data);
    res.status(200).json({
      result: true,
    });
  } catch {
    res.status(200).json({
      result: false,
    });
  }
}
