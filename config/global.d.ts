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
