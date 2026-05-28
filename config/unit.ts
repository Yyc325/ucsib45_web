import { readFileSync } from "fs";
import { resolve } from "path";
import { parse } from "dotenv";
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_PORT: number;
  VITE_BASE_PATH: string;
  VITE_OPEN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_PACKAGE_NAME: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_GLOB_API_URL: string;
  VITE_GLOB_API_URL_PREFIX: string;
  VITE_GLOB_UPLOAD_URL: string;
  VITE_GLOB_IMG_URL: string;
  // VITE_GLOB_IMG_URL: string;
  VITE_PROXY: [string, string][];
  // VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  // VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}
export function isDevFn(mode: string): boolean {
  return mode === "development";
}

export function isProdFn(mode: string): boolean {
  return mode === "production";
}

/**
 * 是否生成预览包
 */
export function isReportMode(): boolean {
  return process.env.REPORT === "true";
}

// 将所有环境变量配置文件读取到 process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY" && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = "";
      }
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
}

/**
 * 从指定的前缀开始获取环境变量
 * @param match 前缀
 * @param confFiles 配置文件
 */
export function getEnvConfig(
  match = "VITE_GLOB_",
  confFiles = [".env", ".env.production"]
) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = parse(readFileSync(resolve(process.cwd(), item)));
      envConfig = { ...envConfig, ...env };
    } catch (error) {}
  });

  Object.keys(envConfig).forEach((key) => {
    const reg = new RegExp(`^(${match})`);
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

/**
 * 获取用户根目录
 * @param dir 文件路径
 */
export function getRootPath(...dir: string[]) {
  return resolve(process.cwd(), ...dir);
}
