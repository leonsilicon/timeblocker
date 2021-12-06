import bcrypt from 'bcryptjs';

import type { FastifyInstance } from 'fastify';
export default function login(app: FastifyInstance) {
	app.post<{
		Body: {
			email: string,
			password: string
		}
	}>('/login', (request, reply) => {
		app.prisma
		if (request.body.email) {

		}
	})
}
