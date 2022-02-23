import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createRouter } from '~b/utils/router.js';
import { createAccount } from '~b/utils/registration.js';
import { throwTrpcError } from '~b/utils/error.js';
import { trpcError } from '~s/types/error.js';

export const registrationRouter = createRouter().mutation('register', {
	input: z.object({
		email: z.string(),
		password: z.string(),
	}),
	async resolve({ ctx, input: { email, password } }) {
		const count = await ctx.prisma.account.count({
			where: {
				email,
			},
		});

		if (count !== 0) {
			throwTrpcError(trpcError.emailAlreadyExists);
		}

		const passwordHash = await bcrypt.hash(password, 10);

		const sessionToken = await createAccount(ctx, {
			email,
			passwordHash,
		});

		return { sessionToken };
	},
});
