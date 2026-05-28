import type { RegisterData } from "@/types/register";
import Axios from "@/utils/axios";
// 登录

export const Register = (data: RegisterData) => {
  return Axios.request({
    url: "user/createUser",
    method: "POST",
    data,
  });
};
