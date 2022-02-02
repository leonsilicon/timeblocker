import type * as trpcNode from '@trpc/server/adapters/node-http/dist/trpc-server-adapters-node-http.cjs.js';
import type { Context } from '~b/types/context.js';
import { getPrismaClient } from '~b/utils/prisma.js';

export async function createContext({
	req,
	res,
}: trpcNode.NodeHTTPCreateContextFnOptions<
	trpcNode.NodeHTTPRequest,
	trpcNode.NodeHTTPResponse
>): Promise<Context> {
	const prismaClient = await getPrismaClient();

	return {
		prisma: prismaClient,
	};
}