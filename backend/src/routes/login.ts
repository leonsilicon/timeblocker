import bcrypt from 'bcrypt';
import { z } from 'zod';
import { authenticateClient, getCtxAccountId } from '~b/utils/auth.js';
import { throwTrpcError } from '~b/utils/error.js';
import { createRouter } from '~b/utils/index.js';
import { trpcError } from '~s/types/error.js';

export const loginRouter = createRouter()
	.mutation('login', {
		// Defines the values that the frontend needs to send
		input: z.object({
			email: z.string(),
			password: z.string(),
		}),
		async resolve({ ctx, input: { email, password } }) {
			// Finds the corresponding account in the PostgreSQL database
			const account = await ctx.prisma.account.findFirst({
				select: {
					passwordHash: true,
					id: true,
				},
				where: {
					email, // Selects the account entry in the database with the matching email
				},
			});

			// If the account can't be found, throw an error
			if (account === null) {
				throwTrpcError(trpcError.badEmailPassword);
			}

			// Compares the hash of the client-provided password with the password hash stored in the database
			// If it matches, authenticate the client by sending a sessionToken to the client.
			if (await bcrypt.compare(password, account.passwordHash)) {
				return authenticateClient(ctx, {
					accountId: account.id,
				});
			}
			// If the hash of the client-provided password doesn't match, throw an error
			else {
				throwTrpcError(trpcError.badEmailPassword);
			}
		},
	})
	.mutation('logout', {
		input: z.object({
			sessionToken: z.string(),
		}),
		async resolve({ ctx, input: { sessionToken } }) {
			await ctx.prisma.accountSessionToken.deleteMany({
				where: {
					token: sessionToken,
				},
			});
		},
	})
	.query('checkToken', {
		async resolve({ ctx }) {
			try {
				const _accountId = await getCtxAccountId(ctx);
				return true;
			} catch {
				return false;
			}
		},
	});
