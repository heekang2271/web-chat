import { getCookie } from 'cookies-next';

import { COOKIE_KEY } from '../enum';

interface ConfigType {
  handler: Function;
  tokenRequired?: boolean;
}

export default function clientWithHandler<T, U>({ handler, tokenRequired = true }: ConfigType) {
  return async function (args: T, ctx?: any) {
    let token: string | undefined;

    if (tokenRequired) {
      token = getCookie(COOKIE_KEY.TOKEN, ctx) as string;
      if (!token) {
        return {
          result: false,
          error: '올바르지 않은 접근입니다.',
        };
      }
    }

    return (await handler(args, token)) as U;
  };
}
