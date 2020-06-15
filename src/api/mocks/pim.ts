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
  FloorType,
  ServiceType,
  MeterType,
  PimServices,
  HeatingSourceType,
  AdditionalServiceType,
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
  floors: [
    {
      floorDescription: undefined,
      floorType: FloorType.GroundFloor,
      id: 'pim_10',
      level: 1,
      spaces: [],
    },
  ],
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
};

export const PIM_SERVICES: PimServices = {
  id: PIM_1.id,
  additionalServices: [
    {
      configuration: { type: AdditionalServiceType.AlarmSystem, __typename: 'AdditionalServiceConfiguration' },
      type: ServiceType.AdditionalServices,
      description: 'My description',
      id: '7e155a65-551d-4b87-8001-41bc58703f02',
      name: 'dfghgfhfh',
      yearOfInstallation: 2020,
    },
  ],
  heatingSources: [
    {
      configuration: { type: HeatingSourceType.AllBurner, __typename: 'HeatingSourceConfiguration' },
      type: ServiceType.HeatingSources,
      description: 'My description',
      id: '7e155a65-551d-4b87-8001-41bc58703f02',
      name: 'dfghgfhfh',
      yearOfInstallation: 2020,
    },
  ],
  hotWaterSupplies: [],
  meters: [
    {
      description: 'test',
      id: '78156291-9a89-4b41-86a1-f55471361bc9',
      name: 'main gas meter',
      readings: [
        {
          dateOfReading: '2020-05-17T15:26:40.317Z',
          description: 'My frist reading',
          feedInId: null,
          id: '958afdc0-1ed4-45f4-98a7-d72ad4ce76aa',
          value: 123456,
        },
      ],
      type: MeterType.Gas,
    },
  ],
};
