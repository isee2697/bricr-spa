import { Server, Model } from 'miragejs';
import { buildSchema, graphql } from 'graphql';
import { loader } from 'graphql.macro';

const schema = loader('./schema.graphql');

const graphqlSchema = buildSchema(schema.loc?.source.body as string);

export const mockServer = () => {
  new Server({
    models: {
      me: Model,
    },
    routes() {
      this.post('/mock-security/users/login', (schema, request) => {
        return {
          accessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
          refreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
        };
      });

      this.post('/mock', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);
        const query = requestJson.query;
        const variables = requestJson.variables;

        const resolver = {
          me() {
            if (request.requestHeaders?.authorization === 'Bearer MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3') {
              return {
                firstName: 'test',
                lastName: 'test',
                avatar: 'test',
                email: 'test@example.com',
              };
            }
            throw new Error();
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
