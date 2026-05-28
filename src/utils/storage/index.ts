import type { CreateStorageParams } from '@/utils/storage/storage';
import { StorageCache } from '@/utils/storage/storage';
import pkg from '../../../package.json';
export type Options = Partial<CreateStorageParams>;
// 默认存储
const DEFAULT_CACHE_TIME = null;
// 限时存储 3 天
const LIMIT_CACHE_TIME = 60 * 60 * 24 * 3;

const createOptions = (
	storage: Storage,
	options: Options = {
		key: '',
		timeout: null
	}
): Options => {
	return {
		storage,
		prefixKey: `${import.meta.env.VITE_GLOB_APP_TITLE}__${pkg.version}__`,
		...options
	};
};

const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
	return StorageCache(createOptions(storage, options));
};

export const WebStorage = StorageCache(createOptions(sessionStorage));

export const createLocalStorage = (options: Options = {}) => {
	return createStorage(localStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};

export const createSessionStorage = (options: Options = {}) => {
	return createStorage(sessionStorage, { ...options, timeout: DEFAULT_CACHE_TIME });
};
