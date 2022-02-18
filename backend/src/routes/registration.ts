import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createRouter } from '~b/utils/router.js';
import { authenticateClient } from '~b/utils/auth.js';
import { createAccount } from '~b/utils/registration.js';
import { throwTrpcError } from '~b/utils/error.js';
import { trpcError } from '~s/types/error.js';

export const registrationRouter = createRouter()
	.mutation('createRegistrationRequest', {
		input: z.object({
			email: z.string(),
			password: z.string(),
		}),
		async resolve({ ctx, input: { email, password } }) {
			const passwordHash = await bcrypt.hash(password, 10);

			// Automatically create accounts that end in example.com
			if (email.endsWith('@example.com')) {
				await createAccount(ctx, {
					email,
					passwordHash,
				});
			}
			// Otherwise send an email to the account holder
			else {
				// For the ICS IA, don't support registration via email
				throwTrpcError(trpcError.notAtExampleEmail);
				// await ctx.prisma.accountRegistrationRequest.create({
				// 	data: {
				// 		confirmationCode,
				// 		passwordHash,
				// 		email,
				// 	},
				// });
				// await sendAccountRegistrationConfirmationCode(ctx, {
				// 	email,
				// 	registrationConfirmationCode: confirmationCode,
				// });
			}
		},
	})
	.mutation('confirmRegistrationRequest', {
		input: z.object({
			email: z.string(),
			confirmationCode: z.string(),
		}),
		/**
		 * Confirming a registration request is always done via an email link to a URL,
		 * so therefore we can set the authentication method to "cookie" since the user
		 * has to use a browser to confirm the request.
		 */
		async resolve({ ctx, input: { email, confirmationCode } }) {
			const account = await ctx.prisma.accountRegistrationRequest.findFirst({
				select: {
					id: true,
					confirmationCode: true,
					passwordHash: true,
				},
				where: {
					email,
				},
			});

			if (account === null) {
				throwTrpcError(trpcError.invalidConfirmationCode);
			}

			if (account.confirmationCode === confirmationCode) {
				createAccount(ctx, {
					email,
					passwordHash: account.passwordHash,
				});

				return authenticateClient(ctx, {
					accountId: account.id,
				});
			} else {
				throwTrpcError(trpcError.invalidConfirmationCode);
			}
		},
	});
