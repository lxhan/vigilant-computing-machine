const schema = {
  type: 'object',
  required: ['PORT', 'JWT_SECRET'],
  properties: {
    PORT: {
      type: 'string',
      default: 4000,
    },
    JWT_SECRET: {
      type: 'string',
    },
  },
};

export const ENV_OPTIONS = {
  schema: schema,
  dotenv: false,
};
