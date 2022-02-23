import bcrypt from 'bcrypt';
import { z } from 'zod';
import { authenticateClient } from '~b/utils/auth.js';
import { throwTrpcError } from '~b/utils/error.js';
import { createRouter } from '~b/utils/index.js';
import { trpcError } from '~s/types/error.js';

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
			throwTrpcError(trpcError.badEmailPassword);
		}

		if (await bcrypt.compare(password, account.passwordHash)) {
			return authenticateClient(ctx, {
				accountId: account.id,
			});
		} else {
			throwTrpcError(trpcError.badEmailPassword);
		}
	},
});
