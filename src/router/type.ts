import type { RouteRecordRaw, RouteMeta } from "vue-router";
import { defineComponent } from "vue";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

interface Meta extends RouteMeta {
  // 名称
  title: string;
  // 图标
  icon?: string | any;
  // 描述
  description?: string;
  // 查询按钮连接
  inquireLink?: string;
  // 层级
  permsLevel?: number;
  // 是否不缓存
  keepAlive?: boolean;
  // 隐藏, 在侧边栏不显示
  hidden?: boolean;
  // 是否禁用, 在面包屑不显示
  beEnabledState?: boolean;
  // 是否显示面包屑
  isBreadcrumb?: boolean;
  // 是否忽略权限
  ignoreAuth?: boolean;
  // 跳转地址
  frameSrc?: string;
  // 外部链接跳转
  externalLink?: string;
  // 子路由的访问权限
  permissions?: string[];
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  path: string;
  name?: string;
  redirect?: string;
  component?: Component | string;
  children?: AppRouteRecordRaw[];
  // 一个页面或视图对应多个路由会使用
  components?: Component;
  props?: any;
  fullPath?: string;
  meta: Meta;
}
