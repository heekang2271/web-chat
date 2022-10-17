import axios from 'axios';

import { API_URL, COOKIE_KEY } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';
import { removeCookies } from 'cookies-next';

export interface GetUserResult extends ApiResult {
  user: {
    uid: number;
    email: string;
    name: string;
  };
}

export default clientWithHandler<undefined, GetUserResult>({
  handler: async (_: undefined, token: string) => {
    const { data } = await axios.post(API_URL.USER_GET_USER, undefined, {
      headers: {
        Authorization: token,
      },
    });
    if (!data.result) {
      removeCookies(COOKIE_KEY.TOKEN);
      window.location.reload();
    }
    return data;
  },
  tokenRequired: true,
});
