import bcrypt from 'bcrypt';
import { z } from 'zod';
import { authenticateClient } from '~b/utils/auth.js';
import { createRouter } from '~b/utils/index.js';
import { AuthenticationMethod } from '~s/types/auth.js';

export const loginRouter = createRouter().mutation('login', {
	input: z.object({
		email: z.string(),
		password: z.string(),
		authenticationMethod: z.enum([
			AuthenticationMethod.cookie,
			AuthenticationMethod.header,
		]),
	}),
	async resolve({ ctx, input: { email, password, authenticationMethod } }) {
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
			return authenticateClient(ctx, {
				accountId: account.id,
				authenticationMethod,
			});
		} else {
			throw new Error('Incorrect account or password.');
		}
	},
});
