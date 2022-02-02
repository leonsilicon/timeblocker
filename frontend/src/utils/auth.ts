export function saveSessionToken(sessionToken: string) {
	window.localStorage.setItem('session-token', sessionToken);
}
