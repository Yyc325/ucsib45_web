import type { Canceler, AxiosRequestConfig } from 'axios';
import axios from 'axios';

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, JSON.stringify(config.data), JSON.stringify(config.params)].join(
		''
	);

/**
 * 该方法用于防止用户多次触发同个请求, 若为同个请求清除上一个
 */
export class AxiosCancel {
	/**
	 * 添加请求等待信息
	 * @param config
	 */
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.has(url)) {
					// 如果没有当前请求就去添加
					pendingMap.set(url, cancel);
				}
			});
	}

	/**
	 * @description: 清除所有等待请求
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && Object.prototype.toString.call(cancel) === '[object Function]' && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * 移出请求
	 * @param {Object} config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);

		if (pendingMap.has(url)) {
			// If there is a current request identifier in pending,
			// the current request needs to be cancelled and removed
			const cancel = pendingMap.get(url);
			cancel && cancel(url);
			pendingMap.delete(url);
		}
	}

	/**
	 * @description: 重置
	 */
	reset(): void {
		pendingMap = new Map<string, Canceler>();
	}
}
