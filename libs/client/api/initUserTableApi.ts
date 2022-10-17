import axios from 'axios';

import { API_URL } from '@libs/enum';
import { ApiResult } from '@libs/types';
import clientWithHandler from '../clientWithHandler';

interface EnterResult extends ApiResult {}

export default clientWithHandler<undefined, EnterResult>({
  handler: async () => {
    const { data } = await axios.post(API_URL.DEV_INIT_USER_TABLE);

    return data;
  },
  tokenRequired: false,
});
