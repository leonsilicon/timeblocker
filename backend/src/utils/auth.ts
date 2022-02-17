import { nanoid } from '@leonzalion/nanoid-good';
import type { MiddlewareFunction } from '@trpc/server/dist/declarations/src/internals/middlewares';
import type { Context } from '~b/types/context.js';
import { CustomHttpHeader } from '~b/types/http.js';
import { Cookie, getCookie, setCookie } from '~b/utils/cookie.js';
import { getCustomHttpHeader } from '~b/utils/http.js';
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
	let clientSessionToken: string;
	let clientCsrfToken: string | undefined;

	const cookieSessionToken = getCookie(ctx, Cookie.sessionToken);
	// User has a sessionToken in the cookie, meaning that they are using the
	// "cookie" authentication method.
	if (cookieSessionToken !== undefined) {
		clientAuthenticationMethod = AuthenticationMethod.cookie;
		clientSessionToken = cookieSessionToken;

		// Need to check for a CSRF token as well
		const csrfToken = getCustomHttpHeader(ctx, CustomHttpHeader.xCsrfToken);
		clientCsrfToken = csrfToken;

		if (clientCsrfToken === undefined) {
			throw new Error('CSRF token not found in hte header.');
		}
		// eslint-disable-next-line no-negated-condition
	} else if (ctx.request.headers.authorization !== undefined) {
		clientAuthenticationMethod = AuthenticationMethod.header;
		clientSessionToken = ctx.request.headers.authorization.replace(
			'Bearer ',
			''
		);
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
			csrfToken: true,
		},
		where: {
			token: clientSessionToken,
		},
	});

	if (accountSessionToken === null) {
		throw new Error('Token not found.');
	}

	if (accountSessionToken.authenticationMethod !== clientAuthenticationMethod) {
		throw new Error('Incorrect authentication method.');
	}

	if (
		accountSessionToken.authenticationMethod === AuthenticationMethod.cookie &&
		clientCsrfToken !== accountSessionToken.csrfToken
	) {
		throw new Error('Invalid CSRF token.');
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

		setCookie(ctx, Cookie.sessionToken, sessionToken);

		return undefined;
	} else {
		return { sessionToken };
	}
}

export const accountMiddleware: MiddlewareFunction<
	Context,
	Context & { accountId: string }
> = async ({ ctx, next }) => {
	const accountId = await getCtxAccountId(ctx);
	return next({ ctx: { ...ctx, accountId } });
};
