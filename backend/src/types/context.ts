import type { PrismaClient } from '@prisma/client';
import type { FastifyReply, FastifyRequest } from 'fastify';

export type Context = {
	prisma: PrismaClient;
	reply: FastifyReply;
	request: FastifyRequest;
};
