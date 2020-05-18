import { RealEstateType, DevelopmentType, PimStatus, Pim, PropertyType } from 'api/types';

export const PIM_1 = {
  id: 'pim_1',
  street: 'Isenburgstraat',
  city: 'Breda',
  houseNumber: '36',
  postalCode: '4813 NC',
  country: 'NL',
  realEstateType: RealEstateType.Business,
  developmentType: DevelopmentType.New,
  status: PimStatus.Available,
  images: [],
  completeness: 0,
  archived: false,
  dateCreated: '2020-05-17T15:26:40.317Z',
};

export const PIM_DETAILS_1: Pim = {
  ...PIM_1,
  constructionNumberPrefix: null,
  constructionNumber: null,
  constructionNumberAddition: null,
  district: null,
  state: null,
  salePrice: null,
  rentPrice: null,
  description: null,
  livingArea: null,
  propertyType: PropertyType.House,
  attention: null,
  houseGeneral: {
    availability: {
      availability: null,
      from: null,
      notes: null,
      habitation: null,
      currentUse: null,
      currentDestination: null,
    },
    construction: {
      type: null,
      from: null,
      to: null,
      notes: null,
    },
    floor: null,
    propertyConnection: null,
    propertyDetails: null,
  },
  floors: [],
};
