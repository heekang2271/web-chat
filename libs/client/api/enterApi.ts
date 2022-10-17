import axios from 'axios';
import { setCookie } from 'cookies-next';

import { API_URL, COOKIE_KEY } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';

interface EnterParams {
  email: string;
  password: string;
}

interface EnterResult extends ApiResult {}

export default clientWithHandler<EnterParams, EnterResult>({
  handler: async ({ email, password }: EnterParams) => {
    const { data } = await axios.post(API_URL.USER_ENTER, {
      email,
      password,
    });

    if (data.result) {
      setCookie(COOKIE_KEY.TOKEN, data.token);
    }

    return data;
  },
  tokenRequired: false,
});
