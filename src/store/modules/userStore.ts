import { defineStore } from "pinia";
import { createLocalStorage } from "@/utils/storage";

import store from "@/store";

interface UserStore {
  token?: string | null;
  userInfo: any;
}

const ls = createLocalStorage();
export const useUserStore = defineStore({
  id: "app-user-store",
  state: (): UserStore => ({
    token: "",
    userInfo: null,
  }),
  getters: {
    getToken(): string {
      return this.token || ls.get("TOKEN");
    },
    getUserInfo(): any {
      return this.userInfo || ls.get("USER_INFO");
    },
  },
  actions: {
    // pinia store 赋的值与初始值一样时无法检测到数据变化, 此处加了 null 类型以便清空
    setToken(token: string | null) {
      this.token = token;
      ls.set("TOKEN", token);
    },
    setUserInfo(info) {
      this.userInfo = info;
      ls.set("USER_INFO", info);
    },
  },
});
export function useUserStoreWithOut() {
  return useUserStore(store);
}
