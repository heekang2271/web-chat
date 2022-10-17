import { API_URL } from '@libs/enum';
import useSWR from 'swr';
import getUserApi from '../api/getUserApi';

export default function useUser() {
  const { data } = useSWR(API_URL.USER_GET_USER, getUserApi);
  return data;
}
