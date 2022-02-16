import fastify from 'fastify';
import path from 'path';
import fastifyAutoload from 'fastify-autoload';

const app = fastify();

app.register(fastifyAutoload, {
	dir: path.join(__dirname, 'routes'),
	dirNameRoutePrefix: false,
});

app.register(fastifyAutoload, {
	dir: path.join(__dirname, 'plugins'),
});

app.addHook('preSerialization', async (request, reply, payload) => {
	if (
		typeof payload === 'object' &&
		payload !== null &&
		'statusCode' in payload
	) {
		const statusCodePayload = payload as { statusCode?: number };
		reply.code(statusCodePayload.statusCode!);
		delete statusCodePayload.statusCode;
	}
});

app.listen(3000, (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`Server listening at ${address}`);
	}
});