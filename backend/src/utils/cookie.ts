import type { Context } from '~b/types/index.js';

export enum Cookie {
	sessionToken = 'sessionToken',
}

export function setCookie(ctx: Context, cookie: Cookie, value: string) {
	if (process.env.NODE_ENV === 'production') {
		void ctx.reply.setCookie(`__Secure-${cookie}`, value);
	} else {
		void ctx.reply.setCookie(cookie, value);
	}
}

export function getCookie(ctx: Context, cookie: Cookie) {
	if (process.env.NODE_ENV === 'production') {
		return ctx.request.cookies[`__Secure-${cookie}`];
	} else {
		return ctx.request.cookies[cookie];
	}
}
