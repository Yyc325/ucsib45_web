import type { AxiosRequestConfig } from "axios";
import type { AxiosTransform } from "@/utils/axios/axiosTransform";

export interface RequestOptions {
  // 是否添加时间戳
  joinTime?: boolean;
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string;
  // 是否加入url
  joinPrefix?: boolean;
  // 请求参数拼接到 url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  // 是否解析成 JSON
  isParseToJSON?: boolean;
  // 是否显示成功信息
  isShowSuccessMessage?: boolean;
  // 是否显示失败信息
  isShowErrorMessage?: boolean;
  // 成功的文本信息
  successMessageText?: string;
  // 错误的文本信息
  errorMessageText?: string;
  // 不进行任何处理，直接返回
  isTransformResponse?: boolean;
  // 是否返回原生响应头
  isReturnNativeResponse?: boolean;
  // 错误消息提示类型
  errorMessageMode?: "none" | "modal";
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface Result<T = any> {
  code: number;
  type?: "success" | "error" | "warning";
  message: string;
  result?: T;
  response?: T;
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * @description: 请求结果集
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = -1,
  TIMEOUT = 10042,
  TYPE = "success",
}

/**
 * @description:  常用的 contentType 类型
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // json
  TEXT = "text/plain;charset=UTF-8",
  // form-data 一般配合qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  上传
  FORM_DATA = "multipart/form-data",
}

/**
 * 通用数据类型
 */
interface ActionResult<T> {
  success: boolean;
  message: string;
  data: T;
}

export { ActionResult };
