import { LocalStorageKey } from '~f/types/local-storage';
import { AuthenticationMethod } from '~s/src/types/auth';

export function authenticateUser(props: { sessionToken: string }) {
	window.localStorage.setItem(LocalStorageKey.sessionToken, props.sessionToken);
}
