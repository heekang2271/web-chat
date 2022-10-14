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
