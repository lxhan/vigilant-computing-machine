import { FastifyInstance } from 'fastify';
import envPlugin from '@fastify/env';
import { ENV_OPTIONS } from '../config';

const init = (server: FastifyInstance) => {
  server.register(envPlugin, ENV_OPTIONS).ready((err) => {
    if (err) console.error(err);
    console.log('Loaded environment variables');
  });
};

export default init;
