import type { Context } from '~b/types/context.js';
import type { CustomHttpHeader } from '~b/types/http.js';

export function getCustomHttpHeader(
	ctx: Context,
	header: CustomHttpHeader
): string | undefined {
	return ctx.request.headers[header]?.[0];
}
