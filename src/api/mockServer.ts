import { Model, Server } from 'miragejs';
import { buildSchema, graphql } from 'graphql';

import { PIM_PRICING_1, PIM_PRICING_COST_1 } from 'api/mocks/pim-pricing';
import { MEDIA_CHAPTER, MEDIA_LINK, MEDIA_PICTURE, MEDIA_TAG, MEDIA_USPS, PIM_MEDIA_1 } from 'api/mocks/pim-media';

import { loadSchemas } from './loadSchemas';
import { PIM_DETAILS_1, PIM_1, PIM_SERVICES } from './mocks/pim';
import { FILE_1 } from './mocks/file';
import { CADASTRE_3, PIM_CADASTRE_1, CADASTRE_MAP_1 } from './mocks/pim-cadastre';
import { PIM_INSIDE_1 } from './mocks/pim-inside';
import { Floor, Space, ServiceType, CadastreType, PimOutside } from './types';

const graphqlSchema = buildSchema(loadSchemas());

let PIM_DETAILS = PIM_DETAILS_1;
const PIM_PRICING = PIM_PRICING_1;
const PIM_PRICING_COST = PIM_PRICING_COST_1;
let FILE = FILE_1;
let PIM_CADASTRE = PIM_CADASTRE_1;
const PIM_MEDIA = PIM_MEDIA_1;
let PIM_INSIDE = PIM_INSIDE_1;

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

      this.post('/mock/upload', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);

        FILE = {
          ...FILE_1,
          ...requestJson,
        };

        return FILE;
      });

      this.put('/mock/upload', (schema, request) => {
        return FILE;
      });

      this.get('/mock/file', (schema, request) => {
        const newFile = {
          ...FILE_1,
          signedUrl: FILE_1.url,
        };

        return newFile;
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
          getPimInside() {
            if (variables.id === 'test') {
              throw new Error();
            }

            return PIM_INSIDE;
          },
          getPimCadastre() {
            return PIM_CADASTRE;
          },
          getPimOutside() {
            const outside: PimOutside = {
              ...PIM_DETAILS,
              __typename: 'PimOutside',
            };

            return outside;
          },
          addCadastre() {
            if (!!PIM_CADASTRE.cadastre) {
              PIM_CADASTRE.cadastre.push(CADASTRE_3);
            } else {
              PIM_CADASTRE.cadastre = [CADASTRE_3];
            }

            return PIM_CADASTRE;
          },
          updateCadastre() {
            PIM_CADASTRE.cadastre?.map(c => (c.id === variables.input.id ? variables.input : c));

            return PIM_DETAILS;
          },
          addCadastreMaps() {
            let mapCopy = CADASTRE_MAP_1;

            mapCopy = {
              ...mapCopy,
              ...variables.input,
              id: 'myCopiedMap' + mapCopy.id,
            };

            const data = PIM_CADASTRE.cadastre?.find(t => t.type === CadastreType.CadastreMap);

            if (data) {
              data.maps?.push(mapCopy);
              PIM_CADASTRE.cadastre = PIM_CADASTRE?.cadastre?.map(c => (c.type === data.type ? data : c));
            }

            PIM_CADASTRE = { ...PIM_CADASTRE };

            return PIM_CADASTRE;
          },
          updateCadastreMap() {
            PIM_CADASTRE.cadastre?.map(c =>
              c.id === variables.input.cadastreId
                ? c.maps?.map(m => (m.id === variables.input.mapId ? variables.input.map : m))
                : c,
            );

            return PIM_DETAILS;
          },
          updateInsideGeneral() {
            PIM_INSIDE = { ...PIM_INSIDE, ...variables.input };

            return PIM_INSIDE;
          },

          getPimServices() {
            if (variables.id === 'test') {
              throw new Error();
            }

            return PIM_SERVICES;
          },
          addService() {
            variables.input.id = '13hdul_jrn3' + variables.input.name;

            if (variables.input.type === ServiceType.AdditionalServices) {
              variables.input.configuration.__typename = 'AdditionalServiceConfiguration';
              const data = PIM_SERVICES.additionalServices || [];
              PIM_SERVICES.additionalServices = [...data, variables.input];
            }

            if (variables.input.type === ServiceType.HeatingSources) {
              variables.input.configuration.__typename = 'HeatingSourceConfiguration';
              const data = PIM_SERVICES.heatingSources || [];
              PIM_SERVICES.heatingSources = [...data, variables.input];
            }

            if (variables.input.type === ServiceType.HotWaterSupplies) {
              variables.input.configuration.__typename = 'HotWaterSupplyConfiguration';
              const data = PIM_SERVICES.hotWaterSupplies || [];
              PIM_SERVICES.hotWaterSupplies = [...data, variables.input];
            }

            return {
              pim: PIM_DETAILS,
              newService: variables.input,
            };
          },
          updateService() {
            if (variables.input.type === ServiceType.AdditionalServices) {
              PIM_SERVICES.additionalServices = PIM_SERVICES.additionalServices?.map(f =>
                f.id === variables.input.id ? { ...f, ...variables.input } : f,
              );
            }

            if (variables.input.type === ServiceType.HeatingSources) {
              PIM_SERVICES.heatingSources = PIM_SERVICES.heatingSources?.map(f =>
                f.id === variables.input.id ? { ...f, ...variables.input } : f,
              );
            }

            if (variables.input.type === ServiceType.HotWaterSupplies) {
              PIM_SERVICES.hotWaterSupplies = PIM_SERVICES.hotWaterSupplies?.map(f =>
                f.id === variables.input.id ? { ...f, ...variables.input } : f,
              );
            }

            return PIM_DETAILS;
          },
          updateMeter() {
            PIM_SERVICES.meters = PIM_SERVICES.meters?.map(f =>
              f.id === variables.input.id ? { ...f, ...variables.input } : f,
            );

            return PIM_DETAILS;
          },
          addMeter() {
            variables.input.id = '13hdul_jrn3' + variables.input.name;
            const data = PIM_SERVICES.meters || [];
            PIM_SERVICES.meters = [...data, variables.input];

            return PIM_DETAILS;
          },
          updateReading() {
            const meter = PIM_SERVICES.meters?.find(m => m.id === variables.input.meterId);

            meter?.readings?.map(r => (r.id === variables.input.id ? variables.input : r));

            PIM_SERVICES.meters?.map(m => (m.id === variables.input.id ? meter : m));

            return PIM_DETAILS;
          },
          addReading() {
            variables.input.id = '13hdul_jrn3Reading';
            const meter = PIM_SERVICES.meters?.find(m => m.id === variables.input.meterId);

            if (!meter) {
              throw new Error('meters does not exist');
            }

            const readings = meter?.readings || [];

            meter.readings = [...readings, variables.input];
            PIM_SERVICES.meters = PIM_SERVICES.meters?.map(m => (m.id === meter.id ? meter : m));

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

            const newSpace: Space = {
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
            };

            floor.spaces = [...floor.spaces, newSpace];

            PIM_DETAILS.floors = PIM_DETAILS.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return {
              newSpace,
              pim: PIM_DETAILS,
            };
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
          addFiles() {
            if (FILE.id !== variables.input.fileIDs[0]) {
              throw new Error('Wrong  id');
            }
            FILE.signedUrl = 'https://picsum.photos/200/300';

            return [FILE];
          },
          addOutsideFeature() {
            PIM_DETAILS = {
              ...PIM_DETAILS,
              outsideFeatures: [
                ...(PIM_DETAILS.outsideFeatures ?? []),
                {
                  __typename: 'OutsideFeature',
                  type: variables.input.type,
                  description: 'My Garden',
                  id: `${Math.floor(Math.random() * 100)}`,
                  configuration: {
                    __typename: 'GardenFeature',
                    main: true,
                  },
                },
              ],
            };

            return PIM_DETAILS;
          },
          updatePimOutsideInfo() {
            PIM_DETAILS = {
              ...PIM_DETAILS,
              houseOutside: {
                notes: variables.input.notes ?? PIM_DETAILS.houseOutside?.notes,
                generalInformation: {
                  ...PIM_DETAILS.houseOutside?.generalInformation,
                  ...variables.input.generalInformation,
                },
                propertyRelated: {
                  ...PIM_DETAILS.houseOutside?.propertyRelated,
                  ...variables.input.property,
                },
                roofInformation: {
                  ...PIM_DETAILS.houseOutside?.roofInformation,
                  ...variables.input.roofInformation,
                },
              },
            };

            return PIM_DETAILS;
          },
          getPricing() {
            return PIM_PRICING;
          },
          togglePricing({ input }: { input: { isRent: boolean; isSale: boolean } }) {
            PIM_PRICING.pricing.rent.isEnabled = input.isRent;
            PIM_PRICING.pricing.sale.isEnabled = input.isSale;

            return PIM_PRICING;
          },
          addCost({ input }: { input: { name: string; type: string } }) {
            PIM_PRICING_COST.name = input.name;
            PIM_PRICING_COST.type = input.type;

            PIM_PRICING.costs = [PIM_PRICING_COST];

            return {
              pim: PIM_PRICING,
              cost: PIM_PRICING_COST,
            };
          },
          updateInvestment(input: Record<string, string>) {
            PIM_PRICING.investment = {
              ...PIM_PRICING.investment,
              ...input,
            };

            return PIM_PRICING;
          },
          getPimMedia() {
            return PIM_MEDIA;
          },
          addMediaLink() {
            PIM_MEDIA.mediaLinks = [MEDIA_LINK];

            return {
              pim: PIM_DETAILS,
              newMediaLink: MEDIA_LINK,
            };
          },
          addTextChapter() {
            PIM_MEDIA.textChapters = [MEDIA_CHAPTER];

            return {
              pim: PIM_DETAILS,
              newChapter: MEDIA_CHAPTER,
            };
          },
          addUsp() {
            PIM_MEDIA.usps = [MEDIA_USPS];

            return {
              pim: PIM_DETAILS,
              newUsp: MEDIA_USPS,
            };
          },
          addTag() {
            PIM_MEDIA.tags = [MEDIA_TAG];

            return {
              pim: PIM_DETAILS,
              newTag: MEDIA_TAG,
            };
          },
          addPicture() {
            PIM_MEDIA.pictures = [MEDIA_PICTURE];

            return {
              pim: PIM_DETAILS,
              newPicture: MEDIA_PICTURE,
            };
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
