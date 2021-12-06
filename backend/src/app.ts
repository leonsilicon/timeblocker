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

app.listen(3000, (err, address) => {
	if (err) {
		console.error(err);
	} else {
		console.info(`Server listening at ${address}`);
	}
});
