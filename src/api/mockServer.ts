import { Server, Model } from 'miragejs';
import { buildSchema, graphql } from 'graphql';
import { loader } from 'graphql.macro';

import { getListPims, PIM_DETAILS_1 } from './mocks/pim';

const schema = loader('./schema.graphql');

const graphqlSchema = buildSchema(schema.loc?.source.body as string);

export const mockServer = () => {
  new Server({
    models: {
      me: Model,
    },
    routes() {
      this.post('/mock-security/public/auth/login', (schema, request) => {
        return {
          accessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
          refreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
        };
      });

      this.post('/mock-security/public/auth/refresh-token', (schema, request) => {
        return {
          accessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
          refreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
        };
      });

      this.post('/mock-security/public/auth/reset-password', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);

        if (requestJson.username !== 'test') {
          throw new Error();
        }

        return {};
      });

      this.post('/mock-security/public/auth/reset-password/token', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);

        if (requestJson.newPassword !== 'passw0rd') {
          throw new Error();
        }

        return {};
      });

      this.post('/mock', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);
        const query = requestJson.query;
        const variables = requestJson.variables;

        const resolver = {
          me() {
            if (request.requestHeaders?.authorization === 'Bearer MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3') {
              return {
                id: 'test',
                firstName: 'test',
                lastName: 'test',
                avatar:
                  'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fe0976a79ece0ee8effca4cab4527ae2',
                email: 'test@example.com',
              };
            }
            throw new Error();
          },
          listPims() {
            if (variables.filters?.city === 'Amsterdam' || variables.filters?.city === 'Test') {
              return {
                items: [],
                metadata: {
                  total: 0,
                },
              };
            }

            const from = variables?.from ?? 0;
            const limit = variables?.limit ?? 10;
            const totalPims = getListPims();
            const pims = totalPims.slice(from, limit + from);

            return {
              items: pims,
              metadata: {
                total: totalPims.length,
              },
            };
          },
          createPim() {
            if (variables.input.city === 'Test') {
              throw new Error();
            }

            return {
              id: PIM_DETAILS_1.id,
            };
          },
          getPim() {
            if (variables.id === 'test') {
              throw new Error();
            }

            return PIM_DETAILS_1;
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
