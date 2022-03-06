import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createRouter } from '~b/utils/router.js';
import { createAccount } from '~b/utils/registration.js';
import { throwTrpcError } from '~b/utils/error.js';
import { trpcError } from '~s/types/error.js';
import { authenticateClient } from '~b/utils/auth.js';

export const registrationRouter = createRouter().mutation('register', {
	input: z.object({
		email: z.string(),
		password: z.string(),
	}),
	async resolve({ ctx, input: { email, password } }) {
		// Retrieves the number of accounts with the same email in the database
		// (i.e. either 0 or 1, since emails have to be unique)
		const count = await ctx.prisma.account.count({
			where: {
				email,
			},
		});

		// If the email already exists in the database, throw an error
		if (count !== 0) {
			throwTrpcError(trpcError.emailAlreadyExists);
		}

		// Hash the user's password using the bcrypt algorithm
		const passwordHash = await bcrypt.hash(password, 10);

		// Create a new account (the createAccount function creates a new account entry in the database)
		const accountId = await createAccount(ctx, {
			email,
			passwordHash,
		});

		// Generate a session token for the client and associate it with the accountId
		const { sessionToken } = await authenticateClient(ctx, {
			accountId,
		});

		// Return the account ID and session token to the client
		return { accountId, sessionToken };
	},
});
