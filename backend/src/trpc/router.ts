import trpc from '@trpc/server';
import type { Context } from '~/types/index.js';

export const appRouter = trpc
	.router<Context>()
	.mutation('register', {
		resolve() {},
	})
	.mutation('login', {
		resolve({ ctx }) {
			ctx.prisma
		}
	});

export type AppRouter = typeof appRouter;
