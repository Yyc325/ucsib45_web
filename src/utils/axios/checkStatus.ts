/**
 * 状态码
 * @param status
 * @param msg
 */
export function checkStatus(status: number, msg: string): string {
  switch (status) {
    case 400:
      return `${msg}`;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
    case 403:
    case 404:
    case 405:
    case 408:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 505:
      return msg;
    default:
      return "";
  }
}
