import axios from 'axios';

import { API_URL, COOKIE_KEY } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';
import { removeCookies } from 'cookies-next';

interface EnterResult extends ApiResult {}

export default clientWithHandler<undefined, EnterResult>({
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
