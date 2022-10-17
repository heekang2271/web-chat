export enum COOKIE_KEY {
  TOKEN = 'user',
}

export const API_URL = {
  DEV_INIT_USER_TABLE: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dev/initUserTable`,
  DEV_INIT_FRIEND_TABLE: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dev/initFriendTable`,
  USER_REGISTER: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/register`,
  USER_ENTER: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/enter`,
  USER_GET_USER: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/getUser`,
};
