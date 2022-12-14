import axios from 'axios';

import { API_URL, COOKIE_KEY } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';
import { setCookie } from 'cookies-next';

interface RegisterApiParams {
  email: string;
  name: string;
  password: string;
}

export interface RegisterApiResult extends ApiResult {
  token?: string;
}

export default clientWithHandler<RegisterApiParams, RegisterApiResult>({
  handler: async ({ email, name, password }: RegisterApiParams) => {
    const { data } = await axios.post(API_URL.USER_REGISTER, {
      email,
      name,
      password,
    });

    if (data.result) {
      setCookie(COOKIE_KEY.TOKEN, data.token);
    }

    return data;
  },
  tokenRequired: false,
});
