import { z } from 'zod';
import { nanoid } from '@leonzalion/nanoid-good';
import bcrypt from 'bcrypt';
import { createRouter } from '~/utils/router.js';
import { createSessionToken } from '~/utils/session-token.js';
import { captchaInput } from '~/utils/captcha.js';

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

				return createSessionToken(ctx, account.id);
			} else {
				throw new Error('Email not found or invalid confirmation code.');
			}
		},
	});
