export interface CreateStorageParams {
	prefixKey: string;
	key: string;
	storage: Storage;
	timeout?: null | number;
}

/**
 * @param prefixKey 前缀
 * @param key
 * @param storage 必须是 sessionStorage, localStorage
 * @param timeout
 */
export const StorageCache = ({
	prefixKey = '',
	key = '',
	storage = sessionStorage,
	timeout = null
}: Partial<CreateStorageParams>) => {
	const WebStorage = class WebStorage {
		private prefixKey: string;
		private storage: Storage;

		constructor() {
			this.storage = storage;
			this.prefixKey = prefixKey;
		}

		/**
		 * @param key
		 */
		private getKey(key: string) {
			return `${this.prefixKey}${key}`.toUpperCase();
		}

		/**
		 * 写入 storage
		 * @param key
		 * @param value
		 * @param expire 过期时间
		 */
		set(key: string, value: any, expire: number | null = timeout) {
			const stringData = JSON.stringify({
				value,
				time: Date.now(),
				expire: expire ? new Date().getTime() + expire * 1000 : null
			});
			this.storage.setItem(this.getKey(key), stringData);
		}

		/**
		 * 读取 storage
		 * @param key
		 * @param def
		 */
		get(key: string, def: any = null): any {
			const val = this.storage.getItem(this.getKey(key));
			if (!val) return def;
			const data = JSON.parse(val);
			const { value, expire } = data;
			if (!expire || expire >= new Date().getTime()) {
				return value;
			}
			this.remove(key);
			return def;
		}

		/**
		 * 移出 storage
		 * @param key
		 */
		remove(key: string) {
			this.storage.removeItem(this.getKey(key));
		}

		/**
		 * 移除所有
		 */
		clear(): void {
			this.storage.clear();
		}
	};

	return new WebStorage();
};
