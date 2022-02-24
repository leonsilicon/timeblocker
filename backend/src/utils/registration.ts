import { nanoid } from 'nanoid-nice';
import type { Context } from '~b/types/context.js';

type CreateAccountProps = {
	email: string;
	passwordHash: string;
};
export async function createAccount(
	ctx: Context,
	{ email, passwordHash }: CreateAccountProps
) {
	const accountId = nanoid();
	await ctx.prisma.account.create({
		data: {
			id: accountId,
			email,
			passwordHash,
		},
	});
	return accountId;
}
