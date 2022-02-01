import { PrismaClient } from '@prisma/client';
import onetime from 'onetime';

export const getPrismaClient = onetime(() => {
	const prismaClient = new PrismaClient();
	prismaClient.$connect();
	return prismaClient;
});
