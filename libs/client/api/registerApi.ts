import axios from 'axios';

import { API_URL } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';

interface RegisterApiParams {
  email: string;
  name: string;
  password: string;
}

interface RegisterApiResult extends ApiResult {}

export default clientWithHandler<RegisterApiParams, RegisterApiResult>({
  handler: async ({ email, name, password }: RegisterApiParams) => {
    const { data } = await axios.post(API_URL.USER_REGISTER, {
      email,
      name,
      password,
    });

    return data;
  },
  tokenRequired: false,
});
