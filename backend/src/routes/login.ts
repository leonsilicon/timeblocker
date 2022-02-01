import bcrypt from 'bcrypt';
import { z } from 'zod';
import { createRouter, createSessionToken } from '~/utils/index.js';

export const loginRouter = createRouter().mutation('login', {
	input: z.object({
		email: z.string(),
		password: z.string(),
	}),
	async resolve({ ctx, input: { email, password } }) {
		const account = await ctx.prisma.account.findFirst({
			select: {
				passwordHash: true,
				id: true,
			},
			where: {
				email,
			},
		});

		if (account === null) {
			throw new Error('Incorrect account or password.');
		}

		if (await bcrypt.compare(password, account.passwordHash)) {
			return createSessionToken(ctx, account.id);
		} else {
			throw new Error('Incorrect account or password.');
		}
	},
});
