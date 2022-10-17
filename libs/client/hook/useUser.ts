import { API_URL } from '@libs/enum';
import useSWR from 'swr';
import getUserApi, { GetUserResult } from '../api/getUserApi';

export default function useUser() {
  const { data } = useSWR(API_URL.USER_GET_USER, getUserApi);

  if (data && data!.result) {
    return (data as GetUserResult).user;
  }
  return undefined;
}
