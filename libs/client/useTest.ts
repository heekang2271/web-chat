import useSWR from 'swr';
import getTest from './api/getTest';

export default function useTest() {
  const { data } = useSWR('/api/test', getTest);

  return data;
}
