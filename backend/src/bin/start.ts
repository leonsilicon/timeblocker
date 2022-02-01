import fastify from 'fastify';
import * as trpc from '@trpc/server';
import { nodeHTTPRequestHandler } from '@trpc/server/adapters/node-http.js';

async function startServer() {
	const app = fastify();

	type Context = trpc.inferAsyncReturnType<typeof createContext>;

	function createContext(_opts: CreateHttpContextOptions) {
		// Use opts.req / opts.res here
		return {
			// Req,
			// res,
		};
	}

	app.all('/trpc/:path', (req, reply) => {
		nodeHTTPRequestHandler({
			req: req.raw,
			res: reply.raw,
			router: appRouter,
			createContext,
			path: req.params.path,
		});
	});

	const url = await app.listen(5000);

	return {
		url,
		client,
		close: () => fastify.close(),
	};
}

const app = fastify();
