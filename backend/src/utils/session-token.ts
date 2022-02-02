import { nanoid } from '@leonzalion/nanoid-good';
import type { Context } from '~b/types/context.js';

export async function createSessionToken(ctx: Context, accountId: string) {
	const sessionToken = nanoid(128);

	await ctx.prisma.accountSessionToken.create({
		data: {
			token: sessionToken,
			accountId,
		},
	});

	return sessionToken;
}

export async function getSessionTokenAccountId(
	ctx: Context,
	sessionToken: string
): Promise<string> {
	const accountSessionToken = await ctx.prisma.accountSessionToken.findFirst({
		select: {
			accountId: true,
		},
		where: {
			token: sessionToken,
		},
	});

	if (accountSessionToken === null) {
		throw new Error('Unknown session token.');
	}

	return accountSessionToken.accountId;
}
