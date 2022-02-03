import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Context } from '~b/types/context.js';
import { getPrismaClient } from '~b/utils/prisma.js';

export async function createContext(
	request: FastifyRequest,
	reply: FastifyReply
): Promise<Context> {
	const prismaClient = await getPrismaClient();

	return {
		request,
		reply,
		prisma: prismaClient,
	};
}
