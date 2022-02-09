import { z } from 'zod';
import { nanoid } from '@leonzalion/nanoid-good';
import bcrypt from 'bcrypt';
import { createRouter } from '~b/utils/router.js';
import { captchaInput } from '~b/utils/captcha.js';
import { authenticateClient } from '~b/utils/auth.js';
import { AuthenticationMethod } from '~s/types/auth.js';

export const registrationRouter = createRouter()
	.mutation('createRegistrationRequest', {
		input: z.object({
			email: z.string(),
			password: z.string(),
			captcha: captchaInput,
		}),
		async resolve({ ctx, input: { email, password } }) {
			const confirmationCode = nanoid();
			const passwordHash = await bcrypt.hash(password, 10);

			await ctx.prisma.accountRegistrationRequest.create({
				data: {
					confirmationCode,
					passwordHash,
					email,
				},
			});
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
				throw new Error('Email not found or invalid confirmation code.');
			}

			if (account.confirmationCode === confirmationCode) {
				await ctx.prisma.account.create({
					data: {
						email,
						passwordHash: account.passwordHash,
					},
				});

				await authenticateClient(ctx, {
					accountId: account.id,
					authenticationMethod: AuthenticationMethod.cookie,
				});
			} else {
				throw new Error('Email not found or invalid confirmation code.');
			}
		},
	});
