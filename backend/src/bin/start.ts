import process from 'node:process';
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify/dist/trpc-server-adapters-fastify.cjs.js';
import fastifyCookie from 'fastify-cookie';
import fastifyCors from 'fastify-cors';
import fp from 'fastify-plugin';
import { getAppRouter } from '~b/routes/router.js';
import { createContext, getPrismaClient } from '~b/utils/index.js';

// Ensure the prisma client is connected to the database
await getPrismaClient();

const app = fastify();
void app.register(fastifyCors);
void app.register(fp(fastifyTRPCPlugin as any), {
	prefix: '/trpc',
	trpcOptions: {
		router: getAppRouter(),
		createContext,
	},
});
void app.register(fastifyCookie, {
	secret: process.env.APP_SECRET,
	parseOptions: {
		httpOnly: false,
		secure: process.env.NODE_ENV === 'production',
		domain:
			process.env.NODE_ENV === 'production'
				? process.env.CLIENT_URL
				: undefined,
		sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'none',
		signed: true,
	},
});

app.listen(process.env.PORT ?? 5000, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`🚀 Server listening at ${address}`);
	}
});
