import axios from 'axios';
import { setCookie } from 'cookies-next';

import { API_URL, COOKIE_KEY } from '@libs/enum';
import { ApiResult, User } from '@libs/types';
import clientWithHandler from '../clientWithHandler';

interface SearchUserParams {
  email: string;
}

export interface SearchUserResult extends ApiResult {
  user: User;
  isFavorite: boolean;
}

export default clientWithHandler<SearchUserParams, SearchUserResult>({
  handler: async ({ email }: SearchUserParams, token: string) => {
    const { data } = await axios.post(
      API_URL.USER_SEARCH,
      {
        email,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data;
  },
  tokenRequired: true,
});
