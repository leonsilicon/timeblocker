import process from 'node:process';
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify/dist/trpc-server-adapters-fastify.cjs.js';
import fastifyCookie from 'fastify-cookie';
import { getAppRouter } from '~b/routes/router.js';
import { createContext } from '~b/utils/index.js';
import fastifyCors from 'fastify-cors';
import fp from 'fastify-plugin';

const app = fastify();
app.register(fastifyCors);
app.register(fp(fastifyTRPCPlugin as any), {
	prefix: '/trpc',
	trpcOptions: {
		router: getAppRouter(),
		createContext,
	},
});
app.register(fastifyCookie, {
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

app.listen(5000, (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`🚀 Server listening at ${address}`);
	}
});
