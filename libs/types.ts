export interface ApiResult {
  result: boolean;
  error?: string;
}

export interface User {
  uid: number;
  email: string;
  name: string;
}
