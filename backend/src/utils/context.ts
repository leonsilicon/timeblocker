import type { Context } from '~/types/context.js';
import { getPrismaClient } from '~/utils/prisma.js';

export async function createContext(): Promise<Context> {
	const prismaClient = await getPrismaClient();

	return {
		prisma: prismaClient,
	};
}
