import { nanoid } from '@leonzalion/nanoid-good';
import type { Context } from '~b/types/context.js';
import { Cookie, getCookie, setCookie } from '~b/utils/cookie.js';
import { AuthenticationMethod } from '~s/types/auth.js';

export type GetCtxAccountIdOpts = {
	optional: boolean;
};

export async function getCtxAccountId<Opts extends GetCtxAccountIdOpts>(
	ctx: Context,
	opts?: { optional: boolean }
): Promise<Opts['optional'] extends true ? string | undefined : string> {
	const optional = opts?.optional ?? false;

	let clientAuthenticationMethod: AuthenticationMethod;
	let clientToken: string;

	const tokenCookie = getCookie(ctx, Cookie.sessionToken);
	if (tokenCookie !== undefined) {
		clientAuthenticationMethod = AuthenticationMethod.cookie;
		clientToken = tokenCookie;
		// eslint-disable-next-line no-negated-condition
	} else if (ctx.request.headers.authorization !== undefined) {
		clientAuthenticationMethod = AuthenticationMethod.header;
		clientToken = ctx.request.headers.authorization.replace('Bearer ', '');
	}
	// User is unauthenticated
	else {
		if (optional) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return undefined as any;
		} else {
			throw new Error('User is not authenticated.');
		}
	}

	const accountSessionToken = await ctx.prisma.accountSessionToken.findFirst({
		select: {
			accountId: true,
			authenticationMethod: true,
		},
		where: {
			token: clientToken,
		},
	});

	if (accountSessionToken === null) {
		throw new Error('Token not found.');
	}

	if (accountSessionToken.authenticationMethod !== clientAuthenticationMethod) {
		throw new Error('Incorrect authentication method.');
	}

	return accountSessionToken.accountId;
}

type AuthenticateClientProps = {
	authenticationMethod: AuthenticationMethod;
	accountId: string;
};

/**
 * Authenticates the client.
 * @returns The payload to be sent back to the client (undefined in the case of a cookie)
 */
export async function authenticateClient(
	ctx: Context,
	{ authenticationMethod, accountId }: AuthenticateClientProps
) {
	const sessionToken = nanoid(32);

	if (authenticationMethod === AuthenticationMethod.cookie) {
		await ctx.prisma.accountSessionToken.create({
			data: {
				authenticationMethod,
				token: sessionToken,
				accountId,
			},
		});

		await setCookie(ctx, Cookie.sessionToken, sessionToken);

		return undefined;
	} else {
		return { sessionToken };
	}
}
