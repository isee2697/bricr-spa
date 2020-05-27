import {
  RealEstateType,
  DevelopmentType,
  PimStatus,
  Pim,
  PropertyType,
  OutsideFeatureType,
  GardenType,
  GardenQualityType,
  Location,
  GardenShapeType,
} from 'api/types';

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
  // dateUpdated: '2020-04-28T07:30:18.162',
  // updatedBy: 'Christian van Gils',
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
  outsideFeatures: [
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Garden,
      description: 'My Garden',
      id: '1',
      configuration: {
        __typename: 'GardenFeature',
        mainGarden: true,
        type: GardenType.Backyard,
        notes: 'Some notes',
        quality: GardenQualityType.Neglected,
        location: [Location.East, Location.South],
        shape: GardenShapeType.LShape,
        dimensions: {
          __typename: 'RectangleDimensions',
          length: 100,
          height: 200,
        },
        surface: 20000,
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Garden,
      description: 'My Garden 2',
      id: '2',
      configuration: {
        __typename: 'GardenFeature',
        mainGarden: true,
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Garage,
      description: 'My Garage',
      id: '3',
      configuration: {
        __typename: 'GardenFeature',
        mainGarden: true,
      },
    },
  ],
  // cadastralMaps: [
  //   {
  //     id: '123',
  //     type: CadastreMapType.Map,
  //     title: 'Test',
  //     file: 'https://source.unsplash.com/featured/?map',
  //     fileName: 'Map 1',
  //     dateUpdated: '2020-04-28T07:30:18.162',
  //     updatedBy: 'Christian van Gils',
  //   },
  //   {
  //     id: '1233',
  //     type: CadastreMapType.Map,
  //     title: 'Test 2',
  //     file: 'https://source.unsplash.com/featured/?building',
  //     fileName: 'Map 1',
  //     dateUpdated: '2020-04-28T07:30:18.162',
  //   },
  // ],
  // services: {
  //   heating: [],
  //   hotWater: [],
  //   additional: [],
  //   meters: [
  //     { id: '1', type: MeterType.Electricity },
  //     { id: '2', type: MeterType.Electricity },
  //     { id: '3', type: MeterType.Gas },
  //     { id: '4', type: MeterType.Water },
  //   ],
  // },
};
