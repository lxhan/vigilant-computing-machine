import { FastifyInstance } from 'fastify';

const init = async (server: FastifyInstance) => {
  const { config } = server;
  // server.register(carRoutes, { prefix: '/cars' });
  // server.register(userRoutes, { prefix: '/users' });
  server.get('/health', async (_, reply) => {
    reply.status(200).send({ ok: true });
  });
};

export default init;
