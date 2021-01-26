import { buildSchema, graphql } from 'graphql';
import { Model, Server } from 'miragejs';

import { PIM_PRICING_1, PIM_PRICING_COST_1 } from 'api/mocks/pim-pricing';
import { MEDIA_CHAPTER, MEDIA_LINK, MEDIA_PICTURE, MEDIA_TAG, MEDIA_USPS, PIM_MEDIA_1 } from 'api/mocks/pim-media';
import { NCP_GENERAL_1 } from 'api/mocks/ncp-general';
import { MAIN_USER } from 'api/mocks/profile';

import { loadSchemas } from './loadSchemas';
import { CadastreType, Floor, PimOutside, PropertyType, ServiceType, Space } from './types';
import { FILE_1 } from './mocks/file';
import {
  EMPTY_READING,
  PIM_1,
  PIM_DETAILS_1,
  PIM_DETAILS_2_APARTMENT,
  PIM_DETAILS_3_BOG,
  PIM_DETAILS_4_AOG,
  PIM_DETAILS_5_PARKING,
  PIM_DETAILS_6_PLOT,
  PIM_SERVICES,
} from './mocks/pim';
import { PIM_GENERAL_1 } from './mocks/pim-general';
import { PIM_INSIDE_1 } from './mocks/pim-inside';
import { CADASTRE_3, CADASTRE_MAP_1, PIM_CADASTRE_1 } from './mocks/pim-cadastre';
import { LIST_NCP_1, LIST_NCP_ARCHIVED_1 } from './mocks/ncp-list';

const graphqlSchema = buildSchema(loadSchemas());

let PIM_DETAILS = PIM_DETAILS_1;
const PIM_PRICING = PIM_PRICING_1;
const PIM_PRICING_COST = PIM_PRICING_COST_1;
let FILE = FILE_1;
let PIM_CADASTRE = PIM_CADASTRE_1;
const PIM_MEDIA = PIM_MEDIA_1;
let PIM_INSIDE = PIM_INSIDE_1;
const PIM_GENERAL = PIM_GENERAL_1;
let NCP_GENERAL = NCP_GENERAL_1;
const LIST_NCP = LIST_NCP_1;
const LIST_NCP_ARCHIVED = LIST_NCP_ARCHIVED_1;
const PIM_AOG = PIM_DETAILS_4_AOG;
const ME = MAIN_USER;
let USERS = [ME];

export const mockServer = () => {
  new Server({
    models: {
      me: Model,
    },
    routes() {
      this.post('/mock-security/login', (schema, request) => {
        return {
          AuthenticationResult: {
            AccessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            RefreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
          },
        };
      });

      this.post('/mock-security/refresh-token', (schema, request) => {
        return {
          AuthenticationResult: {
            AccessToken: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            RefreshToken: 'IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk',
          },
        };
      });

      this.post('/mock-security/forgot_password', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);

        if (requestJson.username !== 'test@bricr.com') {
          throw new Error();
        }

        return {};
      });

      this.post('/mock-security/forgot_password/confirm', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);

        if (requestJson.password !== 'passw0rd') {
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

      this.post('/mock/nylas-account-list', (schema, request) => {
        return [];
      });

      this.post('/mock', (schema, request) => {
        const requestJson = JSON.parse(request.requestBody);
        const query = requestJson.query;
        const variables = requestJson.variables;

        const resolver = {
          me() {
            if (request.requestHeaders?.authorization === 'Bearer MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3') {
              return ME;
            }
            throw new Error();
          },
          listCalendar() {
            return [];
          },
          listNcps() {
            const from = variables?.from ?? 0;
            const limit = variables?.limit ?? 10;

            const ncp = !!variables?.archived ? LIST_NCP_ARCHIVED : LIST_NCP;
            const totalNcps = Array.from({ length: 100 }, (item, index) =>
              index !== 0
                ? {
                    ...ncp,
                    id: Math.random().toString(),
                  }
                : ncp,
            );

            const Ncps = totalNcps.slice(from, limit + from);

            return {
              items: Ncps,
              metadata: {
                total: Ncps.length,
              },
            };
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

            const baseArray = [
              PIM_DETAILS_2_APARTMENT,
              PIM_DETAILS_3_BOG,
              PIM_DETAILS_4_AOG,
              PIM_DETAILS_5_PARKING,
              PIM_DETAILS_6_PLOT,
            ];

            const from = variables?.from ?? 0;
            const limit = variables?.limit ?? 10;
            let totalPims = [
              ...baseArray,
              ...Array.from({ length: 100 }, (item, index) =>
                index !== 0
                  ? {
                      ...PIM_1,
                      id: Math.random().toString(),
                    }
                  : PIM_DETAILS,
              ),
            ];

            const propertyTypes: PropertyType[] = variables.propertyTypes || [];

            if (propertyTypes.includes(PropertyType.House) || propertyTypes.includes(PropertyType.Apartment)) {
              totalPims = totalPims.filter(
                pim => pim.propertyType === PropertyType.House || pim.propertyType === PropertyType.Apartment,
              );
            } else if (propertyTypes.length > 0) {
              totalPims = totalPims.filter(pim => pim.propertyType === propertyTypes[0]);
            }

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
          getAllProfiles() {
            return { items: USERS };
          },
          createProfile() {
            const newUser = { ...ME, ...variables.input, id: ME.id + '1' };
            USERS = [...USERS, newUser];

            return newUser;
          },
          getProfile() {
            return USERS.find(user => user.id === variables.id);
          },
          updateProfile() {
            const user = { ...USERS.find(user => user.id === variables.input.id), ...variables.input };

            return user;
          },
          getTeams() {
            return {
              items: [
                {
                  id: '1234-5678-9012',
                  name: 'Mock team',
                },
              ],
            };
          },
          getMyTeamMembers() {
            return { items: [MAIN_USER] };
          },
          getNotifications() {
            return null;
          },
          getPim() {
            if (variables.id === 'test') {
              throw new Error();
            }
            const pims = resolver.listPims().items;

            return pims.find(pim => pim.id === variables.id) || PIM_DETAILS;
          },
          getPimGeneral() {
            if (variables.id === 'test') {
              throw new Error();
            }

            const pims = resolver.listPims().items;

            return { ...PIM_GENERAL, ...pims.find(pim => pim.id === variables.id) };
          },
          getPimsGeneralWithSameAddress() {
            if (
              [
                variables.input.street === PIM_DETAILS.street,
                variables.input.houseNumber === PIM_DETAILS.houseNumber,
                variables.input.postalCode === PIM_DETAILS.postalCode,
                variables.input.city === PIM_DETAILS.city,
              ].filter(Boolean).length > 2
            ) {
              return {
                metadata: { total: 1 },
                items: [PIM_DETAILS],
              };
            }

            return {
              metadata: { total: 0 },
              items: [],
            };
          },
          getPimInside() {
            if (variables.id === 'test') {
              throw new Error();
            }

            return { ...PIM_INSIDE, aogSpaces: PIM_AOG.aogSpaces };
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

            return {
              pim: { id: PIM_CADASTRE.id },
              cadastre: CADASTRE_3,
            };
          },
          addAogSpace() {
            const newSpace = { ...variables.input, id: 'newId' };
            PIM_AOG.aogSpaces = [...(PIM_AOG?.aogSpaces || []), newSpace];

            return { newSpace };
          },
          updateAogSpace() {
            let returnSpace = {};
            PIM_AOG.aogSpaces?.map(space => {
              if (variables.input.spaceId === space.id) {
                space = { ...space, ...variables.input };
                returnSpace = space;
              }

              return space;
            });

            return returnSpace;
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
          addPimService() {
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
          updatePimService() {
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
          updatePimMeter() {
            PIM_SERVICES.meters = PIM_SERVICES.meters?.map(f =>
              f.id === variables.input.id ? { ...f, ...variables.input } : f,
            );

            return PIM_DETAILS;
          },
          addPimMeter() {
            variables.input.id = '13hdul_jrn3' + variables.input.name;
            const data = PIM_SERVICES.meters || [];
            PIM_SERVICES.meters = [...data, { ...variables.input, readings: [{ ...EMPTY_READING, id: 'reading_id' }] }];

            return PIM_DETAILS;
          },
          updatePimReading() {
            const meter = PIM_SERVICES.meters?.find(m => m.id === variables.input.meterId);

            meter?.readings?.map(r => (r.id === variables.input.id ? variables.input : r));

            PIM_SERVICES.meters?.map(m => (m.id === variables.input.id ? meter : m));

            return PIM_DETAILS;
          },
          addPimReading() {
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
            if (!PIM_INSIDE.floors) {
              PIM_INSIDE.floors = [];
            }

            const id = PIM_INSIDE.id + PIM_INSIDE.floors.length;

            PIM_INSIDE.floors = [
              ...PIM_INSIDE.floors,
              {
                id,
                level: 1,
                floorType: variables.input.floorType,
                floorDescription: variables.input.floorDescription,
                spaces: [],
              },
            ];

            return {
              pim: PIM_INSIDE,
              newFloor: { id },
            };
          },
          addSpaceToFloor() {
            if (!PIM_INSIDE.floors) {
              throw new Error('PIM does not have floos');
            }

            const floor: Floor | null | undefined = PIM_INSIDE.floors?.find(f => f.id === variables.input.floorId);

            if (!floor) {
              throw new Error('Floor does not exists');
            }

            if (!floor.spaces) {
              floor.spaces = [];
            }

            const newSpace: Space = {
              id: PIM_INSIDE.id + 'space' + floor.spaces.length,
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

            PIM_INSIDE.floors = PIM_INSIDE.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return {
              newSpace,
              pim: PIM_INSIDE,
            };
          },
          updateFloor() {
            if (!PIM_INSIDE.floors) {
              throw new Error('PIM does not have floos');
            }

            const floor: Floor | null | undefined = PIM_INSIDE.floors?.find(f => f.id === variables.input.floorId);

            if (!floor) {
              throw new Error('Floor does not exists');
            }

            floor.floorDescription = variables.input.floorDescription;

            PIM_INSIDE.floors = PIM_INSIDE.floors.map(f => (f.id === variables.input.floorId ? floor : f));

            return PIM_INSIDE;
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
            const pims = resolver.listPims().items;

            const details = pims.find(pim => pim.id === variables.input.id);
            PIM_DETAILS = {
              ...details,
              ...variables.input,
              id: variables.input.id,
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
            const id = `${Math.floor(Math.random() * 100)}`;

            PIM_DETAILS = {
              ...PIM_DETAILS,
              outsideFeatures: [
                {
                  __typename: 'OutsideFeature',
                  type: variables.input.type,
                  description: 'My Garden',
                  id,
                  configuration: {
                    __typename: 'GardenFeature',
                    main: true,
                  },
                },
                ...(PIM_DETAILS.outsideFeatures ?? []),
              ],
            };

            return {
              pim: PIM_DETAILS,
              newOutsideFeature: {
                id,
              },
            };
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
          createNcp() {
            return NCP_GENERAL;
          },
          getNcp() {
            return NCP_GENERAL;
          },
          updateNcp() {
            NCP_GENERAL = {
              ...NCP_GENERAL,
              ...variables.input,
            };

            return NCP_GENERAL;
          },
          getNcpWithSameAddress() {
            if (
              [
                variables.input.street === NCP_GENERAL.street,
                variables.input.houseNumber === NCP_GENERAL.houseNumber,
                variables.input.zipCode === NCP_GENERAL.zipCode,
                variables.input.city === NCP_GENERAL.city,
              ].filter(Boolean).length > 2
            ) {
              return {
                metadata: { total: 1 },
                items: [NCP_GENERAL],
              };
            }

            return {
              metadata: { total: 0 },
              items: [],
            };
          },
        };

        return graphql(graphqlSchema, query, resolver, null, variables);
      });

      this.passthrough();
    },
  });
};
