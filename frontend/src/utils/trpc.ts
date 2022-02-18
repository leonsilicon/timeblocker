import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '~b/types/trpc';
import { LocalStorageKey } from '~f/types/local-storage';

export const client = createTRPCClient<AppRouter>({
	url: import.meta.env.VITE_BACKEND_URL,
	headers: () => {
		const sessionToken = window.localStorage.getItem(
			LocalStorageKey.sessionToken
		);

		if (sessionToken === null) {
			return {};
		} else {
			return {
				authorization: `Bearer ${sessionToken}`,
			};
		}
	},
});
