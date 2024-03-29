import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify/dist/trpc-server-adapters-fastify.cjs.js';
import type { Context } from '~b/types/context.js';
import { getPrismaClient } from '~b/utils/prisma.js';

export async function createContext({
	req,
	res,
}: CreateFastifyContextOptions): Promise<Context> {
	const prismaClient = await getPrismaClient();

	return {
		request: req,
		reply: res,
		prisma: prismaClient,
	};
}
