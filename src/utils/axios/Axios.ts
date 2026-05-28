import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CreateAxiosOptions, RequestOptions, Result } from '@/utils/axios/types';

import axios from 'axios';
import { cloneDeep } from 'lodash-es';
import { AxiosCancel } from '@/utils/axios/axiosCancel';

/**
 * @description: axios 封装模块
 */
export class VAxios {
	private axiosInstance: AxiosInstance;
	private options: CreateAxiosOptions;

	constructor(options: CreateAxiosOptions) {
		this.options = options;
		this.axiosInstance = axios.create(options);
		this.setupInterceptors();
	}

	/**
	 * @description: 创建 axios 实例
	 */
	private createAxios(config: CreateAxiosOptions): void {
		this.axiosInstance = axios.create(config);
	}

	/**
	 * 数据处理变化
	 */
	private getTransform() {
		const { transform } = this.options;
		return transform;
	}

	/**
	 * 获取 axios 实例
	 */
	getAxios(): AxiosInstance {
		return this.axiosInstance;
	}

	/**
	 * @description: 重新配置 axios
	 */
	configAxios(config: CreateAxiosOptions) {
		if (!this.axiosInstance) {
			return;
		}
		this.createAxios(config);
	}

	/**
	 * @description: 设置通用header
	 */
	setHeader(headers: any): void {
		if (!this.axiosInstance) {
			return;
		}
		Object.assign(this.axiosInstance.defaults.headers, headers);
	}

	/**
	 * @description: 拦截配置
	 */
	private setupInterceptors() {
		const transform = this.getTransform();
		if (!transform) {
			return;
		}

		const {
			requestInterceptors,
			requestInterceptorsCatch,
			responseInterceptors,
			responseInterceptorsCatch
		} = transform;

		const axiosCanceler = new AxiosCancel();

		// 请求拦截器配置处理
		this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
			const { headers: { ignoreCancelToken } = { ignoreCancelToken: false } } = config;
			!ignoreCancelToken && axiosCanceler.addPending(config);
			if (requestInterceptors && typeof requestInterceptors === 'function') {
				config = requestInterceptors(config);
			}
			return config;
		}, undefined);

		// 请求拦截器错误捕获
		requestInterceptorsCatch &&
			typeof requestInterceptorsCatch === 'function' &&
			this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);

		// 响应结果拦截器处理
		this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
			res && axiosCanceler.removePending(res.config);
			if (responseInterceptors && typeof responseInterceptors === 'function') {
				res = responseInterceptors(res);
			}
			return res;
		});

		// 响应结果拦截器错误捕获
		responseInterceptorsCatch &&
			typeof responseInterceptorsCatch === 'function' &&
			this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch);
	}

	/**
	 * @description: 请求方法
	 */
	request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
		let conf: AxiosRequestConfig = cloneDeep(config);

		const transform = this.getTransform();

		const { requestOptions } = this.options;

		const opt: RequestOptions = Object.assign({}, requestOptions, options);

		const { beforeRequestHook, requestCatch, transformRequestData } = transform || {};

		if (beforeRequestHook && typeof beforeRequestHook === 'function') {
			conf = beforeRequestHook(conf, opt);
		}

		return new Promise((resolve, reject) => {
			this.axiosInstance
				.request<any, AxiosResponse<Result>>(conf)
				.then((res: AxiosResponse<Result>) => {
					// 请求是否被取消
					const isCancel = axios.isCancel(res);
					if (
						transformRequestData &&
						typeof transformRequestData === 'function' &&
						!isCancel
					) {
						const ret = transformRequestData(res, opt);
						// ret !== undefined ? resolve(ret) : reject(new Error('request error!'));
						return resolve(ret);
					}
					reject(res as unknown as Promise<T>);
				})
				.catch((e: Error) => {
					if (requestCatch && typeof requestCatch === 'function') {
						reject(requestCatch(e));
						return;
					}
					reject(e);
				});
		});
	}
}
