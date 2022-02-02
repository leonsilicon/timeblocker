import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '~b/types/trpc';

export const client = createTRPCClient<AppRouter>({
	url: import.meta.env.VITE_BACKEND_URL,
});
