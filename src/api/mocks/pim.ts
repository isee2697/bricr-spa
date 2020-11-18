import { DateTime } from 'luxon';

import {
  AdditionalServiceType,
  DevelopmentType,
  FilePermission,
  FloorType,
  GardenQualityType,
  GardenShapeType,
  GardenType,
  HeatingSourceType,
  Location,
  MeterType,
  OutsideFeatureType,
  PersonRole,
  Pim,
  PimServices,
  PimStatus,
  PropertyRelatedItems,
  PropertyType,
  RealEstateType,
  ServiceType,
} from 'api/types';
import { AllocatedProperty } from 'app/pimDetails/sections/allocateResultsDetails/list/List.types';
import { AllocateResultsRelationRanking } from 'app/pimDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

export const PIM_1 = {
  id: 'pim_1',
  street: 'Isenburgstraat',
  city: 'Breda',
  houseNumber: '36',
  postalCode: '4813 NC',
  country: 'NL',
  realEstateType: RealEstateType.Business,
  developmentType: DevelopmentType.New,
  propertyType: PropertyType.House,
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
  attentionNote: null,
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
        main: true,
        type: GardenType.Backyard,
        notes: 'Some notes',
        quality: GardenQualityType.Neglected,
        location: [Location.East, Location.South],
        shape: GardenShapeType.LShape,
        measurement: {
          __typename: 'RectangleMeasurement',
          length: 100,
          width: 200,
          surface: 20000,
        },
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Garden,
      description: 'My Garden 2',
      id: '2',
      configuration: {
        __typename: 'GardenFeature',
        main: true,
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Garage,
      description: 'My Garage',
      id: '3',
      configuration: {
        __typename: 'GarageFeature',
        main: true,
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Storage,
      description: 'My Storage',
      id: '4',
      configuration: {
        __typename: 'StorageFeature',
        main: true,
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.Terrain,
      description: 'My Terrain',
      id: '5',
      configuration: {
        __typename: 'TerrainFeature',
      },
    },
    {
      __typename: 'OutsideFeature',
      type: OutsideFeatureType.ParkingLot,
      description: 'My Parking Lot',
      id: '6',
      configuration: {
        __typename: 'ParkingLotFeature',
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

export const PIM_DETAILS_2_APARTMENT: Pim = {
  ...PIM_DETAILS_1,
  id: 'PIM_2_APARTMENT',
  propertyType: PropertyType.Apartment,
};

export const PIM_DETAILS_3_BOG: Pim = {
  ...PIM_DETAILS_1,
  id: 'PIM_3_BOG',
  propertyType: PropertyType.Commercial,
};

export const PIM_DETAILS_4_AOG: Pim = {
  ...PIM_DETAILS_1,
  id: 'PIM_4_AOG',
  propertyType: PropertyType.Agricultural,
};

export const PIM_DETAILS_5_PARKING: Pim = {
  ...PIM_DETAILS_1,
  id: 'PIM_5_PARKING',
  propertyType: PropertyType.ParkingLot,
};

export const PIM_DETAILS_6_PLOT: Pim = {
  ...PIM_DETAILS_1,
  id: 'PIM_6_PLOT',
  propertyType: PropertyType.BuildingPlot,
};

export const EMPTY_READING = {
  dateOfReading: null,
  description: null,
  feedInId: null,
  id: null,
  value: null,
};

export const PIM_MATCH_ALLOCATED_PROPERTIES: AllocatedProperty[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/176/105/arch',
    name: 'Isenburgstraat 36, Breda',
    size: 90,
    rooms: 3,
    propertyTypes: [PropertyType.Apartment],
    propertyRelatedItems: [],
    outsideFeatureTypes: [],
    monthlyPrice: 1550,
    allocatedRelations: [
      {
        ranking: AllocateResultsRelationRanking.Gold,
        relation: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        partner: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        role: PersonRole.Candidate,
        accepted: true,
        monthlyIncomeFrom: 1200,
        monthlyIncomeTo: 2500,
        yearlyAggregateIncome: 97000,
        missingDocuments: [],
        maximumMortgage: 2109,
        dateOfSubscription: DateTime.local(),
        houseForSale: true,
        preference: 3,
        relations: [],
      },
      {
        ranking: AllocateResultsRelationRanking.Silver,
        relation: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        partner: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        role: PersonRole.Candidate,
        accepted: true,
        monthlyIncomeFrom: 1200,
        monthlyIncomeTo: 2500,
        yearlyAggregateIncome: 97000,
        missingDocuments: [],
        maximumMortgage: 2109,
        dateOfSubscription: DateTime.local(),
        houseForSale: true,
        preference: 3,
        relations: [],
      },
      {
        ranking: AllocateResultsRelationRanking.None,
        relation: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        partner: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        accepted: false,
        monthlyIncomeFrom: 1200,
        monthlyIncomeTo: 2500,
        yearlyAggregateIncome: 97000,
        missingDocuments: [],
        maximumMortgage: 2109,
        dateOfSubscription: DateTime.local(),
        houseForSale: true,
        preference: 3,
        relations: [],
      },
      {
        ranking: AllocateResultsRelationRanking.Bronze,
        relation: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        partner: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        accepted: false,
        monthlyIncomeFrom: 1200,
        monthlyIncomeTo: 2500,
        yearlyAggregateIncome: 97000,
        missingDocuments: [],
        maximumMortgage: 2109,
        dateOfSubscription: DateTime.local(),
        houseForSale: true,
        preference: 3,
        relations: [
          {
            firstName: 'Anna',
            lastName: 'Kowalska',
            image: {
              url: 'http://placeimg.com/24/24/people',
              key: 'testKey',
              id: 'imageId',
              fileName: 'userProfile',
              fileType: 'jpg',
              status: 1,
              permission: FilePermission.Public,
            },
          },
        ],
      },
    ],
  },
  {
    id: '0002',
    image: 'http://placeimg.com/176/105/arch',
    name: 'Van der Meerstraat 45, Amersfoort',
    size: 90,
    rooms: 3,
    propertyTypes: [PropertyType.Apartment],
    propertyRelatedItems: [PropertyRelatedItems.Balcony, PropertyRelatedItems.Terrace],
    outsideFeatureTypes: [OutsideFeatureType.Garden],
    monthlyPrice: 1550,
    allocatedRelations: [
      {
        ranking: AllocateResultsRelationRanking.Gold,
        relation: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        partner: {
          firstName: 'Anna',
          lastName: 'Kowalska',
          image: {
            url: 'http://placeimg.com/24/24/people',
            key: 'testKey',
            id: 'imageId',
            fileName: 'userProfile',
            fileType: 'jpg',
            status: 1,
            permission: FilePermission.Public,
          },
        },
        role: PersonRole.Candidate,
        accepted: true,
        monthlyIncomeFrom: 1200,
        monthlyIncomeTo: 2500,
        yearlyAggregateIncome: 97000,
        missingDocuments: [],
        maximumMortgage: 2109,
        dateOfSubscription: DateTime.local(),
        houseForSale: true,
        preference: 3,
        relations: [],
      },
    ],
  },
];
