import fastify from 'fastify';
import { nodeHTTPRequestHandler } from '@trpc/server/adapters/node-http/dist/trpc-server-adapters-node-http.cjs.js';
import { getAppRouter } from '~/routes/router.js';
import { createContext } from '~/utils/index.js';

const app = fastify();

app.all<{
	// eslint-disable-next-line @typescript-eslint/naming-convention
	Params: {
		path: string;
	};
}>('/trpc/:path', async (req, reply) => {
	await nodeHTTPRequestHandler({
		req: req.raw,
		res: reply.raw,
		router: getAppRouter(),
		createContext,
		path: req.params.path,
	});
});

app.listen(5000, (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`🚀 Server listening at ${address}`);
	}
});
