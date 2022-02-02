/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BACKEND_URL: string;
	readonly VITE_RECAPTCHA_SITE_KEY: string;
	readonly VITE_HCAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
