import type { Context } from '~b/types/index.js';

export enum Cookie {
	sessionToken = 'sessionToken',
}

export async function setCookie(ctx: Context, cookie: Cookie, value: string) {
	await ctx.reply.setCookie(`__Secure-${cookie}`, value);
}

export function getCookie(ctx: Context, cookie: Cookie) {
	return ctx.request.cookies[`__Secure-${cookie}`];
}
