import trpc from '@trpc/server';
import z from 'zod';
import bcrypt from 'bcrypt';
import type { Context } from '~/types/index.js';

export const appRouter = trpc
	.router<Context>()
	.mutation('register', {
		resolve() { },
	})
	.mutation('login', {
		input: z.object({
			email: z.string(),
			password: z.string(),
		}),
		async resolve({ ctx, input: { email, password } }) {
			const account = await ctx.prisma.account.findFirst({
				select: {
					passwordHash: true,
				},
				where: {
					email,
				},
			});

			if (account === null) {
				throw new Error('Account not found.');
			}

			await bcrypt.compare(password, account.passwordHash);
		},
	});

export type AppRouter = typeof appRouter;
