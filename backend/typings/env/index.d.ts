/* eslint-disable @typescript-eslint/naming-convention */

declare namespace NodeJS {
	export interface ProcessEnv {
		CLIENT_URL: string;
		APP_SECRET: string;

		HCAPTCHA_SECRET_KEY: string;
		RECAPTCHA_SECRET_KEY: string;

		GMAIL_CLIENT_ID: string;
		GMAIL_CLIENT_SECRET: string;
		GMAIL_REFRESH_TOKEN: string;
	}
}
