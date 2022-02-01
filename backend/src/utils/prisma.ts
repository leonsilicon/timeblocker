import Prisma from '@prisma/client';
import onetime from 'onetime';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { PrismaClient } = Prisma;

export const getPrismaClient = onetime(async () => {
	const prismaClient = new PrismaClient();
	await prismaClient.$connect();
	return prismaClient;
});
