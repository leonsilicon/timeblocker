import process from 'node:process';
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify/dist/trpc-server-adapters-fastify.cjs.js';
import fastifyCors from 'fastify-cors';
import fp from 'fastify-plugin';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { getAppRouter } from '~b/routes/router.js';
import { createContext, getPrismaClient } from '~b/utils/index.js';

// Initialize dayjs plugins
dayjs.extend(objectSupport);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Toronto');

// Ensure the prisma client is connected to the database
await getPrismaClient();

// Start fastify server and register tRPC plugin
const app = fastify();
void app.register(fastifyCors);
void app.register(fp(fastifyTRPCPlugin as any), {
	prefix: '/trpc',
	trpcOptions: {
		router: getAppRouter(),
		createContext,
	},
});

// Bind server to port
app.listen(process.env.PORT ?? 4000, '0.0.0.0', (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`🚀 Server listening at ${address}`);
	}
});
