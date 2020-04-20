import { Server, Model } from 'miragejs';
import { buildSchema, graphql } from 'graphql';

const graphqlSchema = buildSchema(`
  type Me {
    firstName: String
    lastName: String
    email: String
    avatar: String
  }

  type Query {
    me: Me
  }

  type LoginResponse {
    accessToken: String
    refreshToken: String
  }

  type Mutation {
    login(login: String!, password: String!): LoginResponse
  }
`);

export const mockServer = () => {
  new Server({
    models: {
      me: Model,
    },
    routes() {
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
              };
            }
            throw new Error();
          },
          login() {
            return {
              accessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
              refreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
            };
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
