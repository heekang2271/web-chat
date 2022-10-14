import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  result: boolean;
  error?: string;
  [key: string]: any;
}

interface ConfigType {
  method: 'GET' | 'POST';
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ method, handler }: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    if (req.method && method !== req.method) {
      return res.status(405).end();
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
