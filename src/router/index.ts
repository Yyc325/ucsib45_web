import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import localRoutes from "./routes/localRoutes";
import { baseRoutes } from "./routes/baseRoutes";
import { PageEnum } from "./constants/canstants";
import { useUser } from "@/hooks/useUser";
import { getUserInfo } from "@/apis/login";

const routes = [...localRoutes, ...baseRoutes] as any[];
const noPermissionsPath = [PageEnum.BASE_LOGIN, PageEnum.BASE_REGISTER] as any;
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export const  setupRouter =  (app: App<Element>) => {
  router.beforeEach((to, from, next) => {
      next();
  });
  router.afterEach((to, from) => {
    if (typeof to.meta.title === "string") {
      document.title = to.meta.title;
    } else {
      // 提供一个默认值或者错误处理
      document.title = "首页";
    }
    // window.location.reload();
  });
  app.use(router);
};
