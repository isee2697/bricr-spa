import { Server, Model } from 'miragejs';
import { buildSchema, graphql } from 'graphql';
import { loader } from 'graphql.macro';

import { PIM_DETAILS_1, PIM_1 } from './mocks/pim';
import { Floor, Space } from './types';

const schema = loader('./schema.graphql');

const graphqlSchema = buildSchema(schema.loc?.source.body as string);

let PIM_DETAILS = PIM_DETAILS_1;

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
            const totalPims = Array.from({ length: 100 }, (item, index) =>
              index !== 0
                ? {
                    ...PIM_1,
                    id: Math.random().toString(),
                  }
                : PIM_DETAILS,
            );

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
              id: PIM_DETAILS.id,
            };
          },
          getPim() {
            if (variables.id === 'test') {
              throw new Error();
            }

            return PIM_DETAILS;
          },
          addFloorToPim() {
            if (!PIM_DETAILS.floors) {
              PIM_DETAILS.floors = [];
            }

            PIM_DETAILS.floors = [
              ...PIM_DETAILS.floors,
              {
                id: PIM_DETAILS.id + PIM_DETAILS.floors.length,
                level: 1,
                floorType: variables.input.floorType,
                floorDescription: variables.input.floorDescription,
                spaces: [],
              },
            ];

            return PIM_DETAILS;
          },
          addSpaceToFloor() {
            if (!PIM_DETAILS.floors) {
              throw new Error('PIM does not have floos');
            }

            const floor: Floor | null | undefined = PIM_DETAILS.floors?.find(f => f.id === variables.input.floorId);

            if (!floor) {
              throw new Error('Floor does not exists');
            }

            if (!floor.spaces) {
              floor.spaces = [];
            }

            floor.spaces = [
              ...floor.spaces,
              {
                id: PIM_DETAILS.id + 'space' + floor.spaces.length,
                __typename: 'Space',
                extraRoomPossibility: variables.input.extraRoomPossibility,
                spaceType: variables.input.spaceType,
                spaceName: variables.input.spaceName,
                configuration: {
                  __typename: 'KitchenSpace',
                  constructionYear: null,
                  notes: null,
                  type: null,
                  constructionType: null,
                  servicesNotes: null,
                  services: [],
                  appliances: [],
                  hob: null,
                  shape: null,
                  measurement: {
                    length: null,
                    width: null,
                    height: null,
                    surface: null,
                    volume: null,
                  },
                  serviceHeating: null,
                  images: [],
                },
              },
            ];

            PIM_DETAILS.floors = PIM_DETAILS.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return PIM_DETAILS;
          },
          updateFloor() {
            if (!PIM_DETAILS.floors) {
              throw new Error('PIM does not have floos');
            }

            const floor: Floor | null | undefined = PIM_DETAILS.floors?.find(f => f.id === variables.input.floorId);

            if (!floor) {
              throw new Error('Floor does not exists');
            }

            floor.floorDescription = variables.input.floorDescription;

            PIM_DETAILS.floors = PIM_DETAILS.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return PIM_DETAILS;
          },
          updateSpace() {
            if (!PIM_DETAILS.floors) {
              throw new Error('PIM does not have floos');
            }

            const floor: Floor | null | undefined = PIM_DETAILS.floors?.find(f =>
              f.spaces?.some(s => s.id === variables.input.spaceId),
            );

            if (!floor) {
              throw new Error('Floor does not exists');
            }

            const space: Space | null | undefined = floor.spaces?.find(s => s.id === variables.input.spaceId);

            if (!space) {
              throw new Error('Space does not exists');
            }

            space.configuration = {
              ...space.configuration,
              ...variables.input.space.configuration,
            };

            floor.spaces = floor.spaces?.map(s => (s.id === variables.input.spaceId ? space : s));

            PIM_DETAILS.floors = PIM_DETAILS.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return PIM_DETAILS;
          },
          updatePimGeneralInfo() {
            PIM_DETAILS = {
              ...PIM_DETAILS,
              ...variables.input,
              houseGeneral: {
                ...PIM_DETAILS.houseGeneral,
                availability: variables.input.availability,
                construction: variables.input.construction,
                propertyConnection: variables.input.propertyConnection,
                propertyDetails: variables.input.propertyDetails,
              },
            };

            return PIM_DETAILS;
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
