import * as trpc from '@trpc/server';
import type { Context } from '~b/types/index.js';

export function createRouter() {
	return trpc.router<Context>();
}
