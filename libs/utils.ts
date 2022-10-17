export function convertZeroFormat(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

export function getCurrentTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = convertZeroFormat(date.getMonth() + 1);
  const day = convertZeroFormat(date.getDate());

  const hours = convertZeroFormat(date.getHours());
  const minutes = convertZeroFormat(date.getMinutes());
  const seconds = convertZeroFormat(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

interface Validation {
  email?: string;
  name?: string;
  password?: string;
}

export function validation({ email, name, password }: Validation) {
  if (email !== undefined && !email.match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    return {
      result: false,
      message: '올바른 이메일 형식이 아닙니다.',
      target: 'email',
    };
  }

  if (name !== undefined && !name.match(/^[ㄱ-ㅎ가-힣a-zA-Z][ㄱ-ㅎ가-힣a-zA-Z]{0,8}[ㄱ-ㅎ가-힣a-zA-Z]$/)) {
    return {
      result: false,
      message: '2~10자의 한글, 영어만 입력 가능합니다.',
      target: 'name',
    };
  }

  if (password !== undefined && !password.match(/^.{8,32}$/)) {
    return {
      result: false,
      message: '올바른 비밀번호를 입력해주세요.',
      target: 'password',
    };
  }

  return {
    result: true,
  };
}
