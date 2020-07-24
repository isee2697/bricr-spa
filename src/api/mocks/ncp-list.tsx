import { ListNcp } from 'api/types';

import { FILE_1 } from './file';

export const LIST_NCP_1: ListNcp = {
  id: 'ncp_1',
  name: 'Project of Houses',
  dateCreated: '2020-05-17T15:26:40.317Z',
  dateUpdated: '2020-05-17T15:26:40.317Z',
  areaRangeFrom: 12,
  areaRangeTo: 32,
  numberOfRoomsFrom: 3,
  numberOfRoomsTo: 7,
  salePriceFrom: 120000,
  salePriceTo: 350000,
  archived: false,
  completeness: 70,
  logoPicture: { ...FILE_1, id: 'logo_1', url: 'http://placeimg.com/640/480/any' },
  mainPicture: { ...FILE_1, id: 'mp_1', url: 'http://placeimg.com/176/112/arch' },
  rentLabel: 'under option',
  rentNumber: 123,
  rentPriceFrom: 775,
  rentPriceTo: 1390,
  soldOrRent: 10,
  available: 120,
  saleLabel: 'Available',
  partOfPhase: 3,
  underOption: 5,
  matches: 120,
  candidates: 50,
  interests: 2500,
  optants: 999,
  properties: 80,
  objectTypesCount: 2,
};

export const LIST_NCP_ARCHIVED_1: ListNcp = {
  ...LIST_NCP_1,
  id: 'ncp_2',
  archived: true,
};
