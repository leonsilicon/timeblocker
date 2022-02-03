import process from 'node:process';
import fastify from 'fastify';
import { nodeHTTPRequestHandler } from '@trpc/server/adapters/node-http/dist/trpc-server-adapters-node-http.cjs.js';
import fastifyCookie from 'fastify-cookie';
import { getAppRouter } from '~b/routes/router.js';
import { createContext } from '~b/utils/index.js';

const app = fastify();

void app.register(fastifyCookie, {
	secret: process.env.APP_SECRET,
	parseOptions: {
		httpOnly: true,
		secure: true,
		domain: process.env.CLIENT_URL,
		sameSite: 'strict',
		signed: true,
	},
});

app.all<{
	// eslint-disable-next-line @typescript-eslint/naming-convention
	Params: {
		path: string;
	};
}>('/trpc/:path', async (request, reply) => {
	await nodeHTTPRequestHandler({
		req: request.raw,
		res: reply.raw,
		router: getAppRouter(),
		createContext: async () => createContext(request, reply),
		path: request.params.path,
	});
});

app.listen(5000, (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`🚀 Server listening at ${address}`);
	}
});
