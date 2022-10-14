import axios from 'axios';

export default async function getTest() {
  try {
    const data = await axios.post('/api/test');

    return data.data;
  } catch {
    return null;
  }
}
