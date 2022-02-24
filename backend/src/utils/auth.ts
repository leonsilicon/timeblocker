import { nanoid } from 'nanoid-nice';
import type { MiddlewareFunction } from '@trpc/server/dist/declarations/src/internals/middlewares';
import type { Context } from '~b/types/context.js';
import { throwTrpcError } from '~b/utils/error.js';
import { AuthenticationMethod } from '~s/types/auth.js';
import { trpcError } from '~s/types/error.js';

export type GetCtxAccountIdOpts = {
	optional: boolean;
};

export async function getCtxAccountId<Opts extends GetCtxAccountIdOpts>(
	ctx: Context,
	opts?: { optional: boolean }
): Promise<Opts['optional'] extends true ? string | undefined : string> {
	const optional = opts?.optional ?? false;

	let clientSessionToken: string;

	// User is unauthenticated
	if (ctx.request.headers.authorization === undefined) {
		if (optional) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return undefined as any;
		} else {
			throwTrpcError(trpcError.userNotAuthenticated);
		}
	} else {
		clientSessionToken = ctx.request.headers.authorization.replace(
			'Bearer ',
			''
		);
	}

	const accountSessionToken = await ctx.prisma.accountSessionToken.findFirst({
		select: {
			accountId: true,
		},
		where: {
			token: clientSessionToken,
		},
	});

	if (accountSessionToken === null) {
		throwTrpcError(trpcError.tokenNotFound);
	}

	return accountSessionToken.accountId;
}

type AuthenticateClientProps = {
	accountId: string;
};

/**
 * Authenticates the client.
 * @returns The payload to be sent back to the client (undefined in the case of a cookie)
 */
export async function authenticateClient(
	ctx: Context,
	{ accountId }: AuthenticateClientProps
) {
	const sessionToken = nanoid(32);

	await ctx.prisma.accountSessionToken.create({
		data: {
			authenticationMethod: AuthenticationMethod.header,
			token: sessionToken,
			accountId,
		},
	});

	return { sessionToken };
}

export const accountMiddleware: MiddlewareFunction<
	Context,
	Context & { accountId: string }
> = async ({ ctx, next }) => {
	const accountId = await getCtxAccountId(ctx);
	return next({ ctx: { ...ctx, accountId } });
};
