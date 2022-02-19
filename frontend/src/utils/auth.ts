import { LocalStorageKey } from '~f/types/local-storage';

export function authenticateUser(props: { sessionToken: string }) {
	window.localStorage.setItem(LocalStorageKey.sessionToken, props.sessionToken);
}
