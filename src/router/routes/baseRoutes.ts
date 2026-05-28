// 无需权限的基础路由

import { AppRouteRecordRaw } from "../type";
import { ComponentCanstants } from "@/router/constants";
export const baseRoutes = [
  {
    path: "/login", // 路由的访问路径
    name: "Login", // 路由名称 可用于路由跳转
    component: ComponentCanstants["LOGIN"], // 组件动态引用
    meta: {
      title: "登录页", // 页面标题
    },
  },
] as AppRouteRecordRaw[];
