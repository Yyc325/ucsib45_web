import { LoginData } from "@/types/login";
import Axios from "@/utils/axios";

// 登录

export const Login = (data: LoginData) => {
  return Axios.request({
    url: "user/login",
    method: "POST",
    data,
  });
};
// 获取用户信息

export const getUserInfo = () => {
  return Axios.request({
    url: "user/getUserInfo",
    method: "GET",
  });
};
