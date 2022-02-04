import { LocalStorageKey } from '~f/types/local-storage';
import { AuthenticationMethod } from '~s/types/auth';

type AuthenticateUserPayloadMap = {
	[AuthenticationMethod.cookie]: { csrfToken: string };
	[AuthenticationMethod.header]: { sessionToken: string };
};

export function authenticateUserWeb(
	method: AuthenticationMethod.cookie,
	{ csrfToken }: AuthenticateUserPayloadMap[AuthenticationMethod.cookie]
) {
	if (method !== AuthenticationMethod.cookie) {
		throw new Error(
			'Only cookie authentication is supported on web $for security reasons.'
		);
	}

	// Save the CSRF token in the user's localStorage
	window.localStorage.setItem(LocalStorageKey.csrfToken, csrfToken);
}

/**
 * TODO: somehow detect if user is on web/mobile
 */
export function authenticateUser(props: {
	csrfToken: string;
	sessionToken: string;
}) {
	authenticateUserWeb(AuthenticationMethod.cookie, props);
}
