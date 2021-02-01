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
import { DocumentListOfCaseType } from 'app/pimDetails/sections/documents/documentDetails/documentListOfCase/DocumentListOfCase.types';
import {
  DocumentQuestionKind,
  DocumentQuestionnaireType,
  QuestionStepStatus,
  YesNoType,
} from 'app/pimDetails/sections/documents/documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';
import {
  ContractStepStatus,
  ContractStepType,
  DocumentContractType,
} from 'app/pimDetails/sections/documents/documentDetails/documentContract/DocumentContract.types';
import { DocumentUploadedType } from 'app/pimDetails/sections/documents/documentDetails/documentUploaded/DocumentUploaded.types';
import {
  DocumentFolderType,
  DocumentKind,
  DocumentMeta,
} from 'app/pimDetails/sections/documents/general/General.types';

import { FILE_1 } from './file';

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
  salePrice: 245000,
  mainPicture: { file: { ...FILE_1, id: 'mp_1', url: 'http://placeimg.com/176/112/arch' }, id: 'pic_1' },
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

export const PIM_DOCUMENTS: { documents: DocumentFolderType[]; metaInfo: DocumentMeta[] } = {
  documents: [
    {
      id: 'folder_1_1',
      name: 'Drawings',
      kind: DocumentKind.Custom,
      documents: [
        {
          id: 'doc_1',
          name: 'Akte van levering',
          dateCreated: new Date('2020/09/22'),
          size: 34223,
          type: 'pdf',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.0',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.Custom,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
        },
        {
          id: 'doc_2',
          name: 'Bewijs van inschrijving',
          dateCreated: new Date('2020/09/23'),
          size: 32223,
          type: 'pdf',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.1',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.Custom,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
          completeness: 70,
        },
        {
          id: 'doc_3',
          name: 'Inschrijfformulier',
          dateCreated: new Date('2010/09/16'),
          size: 4223,
          type: 'docx',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.2',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.Custom,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
          completeness: 70,
        },
      ],
    },
    {
      id: 'folder_1_2',
      name: 'Questionnaires',
      kind: DocumentKind.Questionnaires,
      documents: [
        {
          id: 'doc_1',
          name: 'Akte van levering',
          dateCreated: new Date('2020/09/22'),
          size: 34223,
          type: 'pdf',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.0',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.Questionnaires,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
        },
      ],
    },
    {
      id: 'folder_1_3',
      name: 'List of cases',
      kind: DocumentKind.ListOfCase,
      documents: [
        {
          id: 'doc_1',
          name: 'Akte van levering',
          dateCreated: new Date('2020/09/22'),
          size: 34223,
          type: 'pdf',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.0',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.ListOfCase,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
        },
      ],
    },
    {
      id: 'folder_1_4',
      name: 'Contracts',
      kind: DocumentKind.Contracts,
      documents: [
        {
          id: 'doc_1',
          name: 'Akte van levering',
          dateCreated: new Date('2020/09/22'),
          size: 34223,
          type: 'pdf',
          avatar: 'http://placeimg.com/104/152/arch',
          versionNumber: '1.0',
          buyer: 'H. Janssens',
          sellers: ['C. van Gils', 'S. Pit-van Gils'],
          documentKind: DocumentKind.Contracts,
          contractAddress: 'Isenburgstraat 36, Breda',
          price: '€ 245.000,00 k.k',
        },
      ],
    },
    {
      id: 'folder_1_5',
      name: 'Acquisition',
      kind: DocumentKind.Custom,
    },
    {
      id: 'folder_1_6',
      name: 'Quotation',
      kind: DocumentKind.Custom,
    },
    {
      id: 'folder_1_7',
      name: 'SalesOrder',
      kind: DocumentKind.Custom,
    },
    {
      id: 'folder_1_8',
      name: 'Property',
      kind: DocumentKind.Custom,
    },
    {
      id: 'folder_1_9',
      name: 'Publication',
      kind: DocumentKind.Custom,
    },
    {
      id: 'folder_1_10',
      name: 'Internal',
      kind: DocumentKind.Custom,
    },
  ],
  metaInfo: [
    {
      title: 'requested',
      value: 231,
      percent: 15,
      type: 'success',
    },
    {
      title: 'received',
      value: 2,
      percent: 0,
      type: 'warning',
    },
    {
      title: 'declined',
      value: 2,
      percent: 90,
      type: 'error',
    },
    {
      title: 'accepted',
      value: 4,
      percent: 5,
      type: 'success',
    },
  ],
};

export const PIM_DOCUMENT_UPLOADED: DocumentUploadedType = {
  id: 'doc_1',
  name: 'Akte van levering',
  documentKind: DocumentKind.ListOfCase,
  file: 'https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf',
};

export const PIM_DOCUMENT_LISTOFCASE: DocumentListOfCaseType = {
  id: 'doc_1',
  name: 'Akte van levering',
  documentKind: DocumentKind.ListOfCase,
};

export const PIM_DOCUMENT_QUESTIONNAIRE: DocumentQuestionnaireType = {
  id: 'doc_1',
  name: 'Akte van levering',
  documentKind: DocumentKind.Questionnaires,
  steps: [
    {
      id: 'step-1',
      title: 'General',
      status: QuestionStepStatus.Completed,
      modifiedAt: new Date().toLocaleString(),
    },
    {
      id: 'step-2',
      title: 'Vragenlijst A',
      status: QuestionStepStatus.Completed,
      modifiedAt: new Date().toLocaleString(),
      approved: 12,
      declined: 0,
      questions: [
        {
          id: 'question-1',
          title: 'Questionaire item 1',
          subtitle: 'Gehuwd/geregistreerd partnerschap',
          type: DocumentQuestionKind.YesNo,
          question: {
            question: 'Bent u getrouwd?',
            result: YesNoType.Yes,
          },
        },
        {
          id: 'question-2',
          title: 'Samenwonend',
          subtitle: 'Gehuwd/geregistreerd partnerschap',
          type: DocumentQuestionKind.YesNo,
          question: {
            question: 'Bent u getrouwd?',
            result: YesNoType.No,
          },
        },
      ],
    },
    {
      id: 'step-3',
      title: 'Buren',
      status: QuestionStepStatus.Completed,
      modifiedAt: new Date().toLocaleString(),
      approved: 0,
      declined: 1,
      questions: [
        {
          id: 'question-1',
          title: 'Buren',
          type: DocumentQuestionKind.YesNoWithNote,
          question: {
            question: 'Zijn er geschillen of overlast van de buren?',
            result: YesNoType.Yes,
            note: 'Note text',
          },
        },
        {
          id: 'question-2',
          title: 'Buren',
          type: DocumentQuestionKind.YesNoWithNote,
          question: {
            question: 'Zijn er geschillen of overlast van de buren?',
            result: YesNoType.Yes,
          },
        },
      ],
    },
    {
      id: 'step-4',
      title: 'Vragenlijst B',
      status: QuestionStepStatus.InProgress,
      modifiedAt: new Date().toLocaleString(),
      approved: 22,
      declined: 1,
      questions: [
        {
          id: 'question-1',
          title: 'Questionaire item 1',
          subtitle: 'Bijzonderheden',
          type: DocumentQuestionKind.MultiChoice,
          question: {
            question:
              'Zijn er nadat u het perceel in eigendom hebt gekregen nog andere, eventuele aanvullende notariële of onderhandse akten opgesteld met betrekking tot het perceel?',
            choices: [
              {
                title: 'Answer 1',
                value: 'answer1',
                selected: true,
              },
              {
                title: 'Anser 2 could be longer',
                value: 'answer2',
              },
              {
                title: 'Answer 3 here',
                value: 'answer3',
                selected: true,
              },
              {
                title: 'Answer 4 is the last one',
                value: 'answer4',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'step-5',
      title: 'Vragenlijst C',
      status: QuestionStepStatus.InProgress,
      approved: 1,
      declined: 18,
      questions: [
        {
          id: 'question-1',
          title: 'Questionaire item 1',
          subtitle: 'Bijzonderheden',
          type: DocumentQuestionKind.MultiChoiceWithNote,
          question: {
            question:
              'Zijn er nadat u het perceel in eigendom hebt gekregen nog andere, eventuele aanvullende notariële of onderhandse akten opgesteld met betrekking tot het perceel?',
            choices: [
              {
                title: 'Answer 1',
                value: 'answer1',
                selected: true,
              },
              {
                title: 'Anser 2 could be longer',
                value: 'answer2',
              },
              {
                title: 'Answer 3 here',
                value: 'answer3',
                selected: true,
              },
              {
                title: 'Answer 4 is the last one',
                value: 'answer4',
              },
            ],
          },
        },
      ],
    },
    {
      id: 'step-6',
      title: 'VVE-checklist',
      status: QuestionStepStatus.InProgress,
      approved: 1,
      declined: 18,
      questions: [
        {
          id: 'question-1',
          title: 'Questionaire item 1',
          subtitle: 'Algemene VvE kenmerken en gegevens',
          type: DocumentQuestionKind.NoteOnly,
          question: {
            question:
              'Zijn er nadat u het perceel in eigendom hebt gekregen nog andere, eventuele aanvullende notariële of onderhandse akten opgesteld met betrekking tot het perceel?',
          },
        },
      ],
    },
  ],
};

export const PIM_DOCUMENT_CONTRACT: DocumentContractType = {
  id: 'doc_1',
  name: 'New contract',
  documentKind: DocumentKind.Contracts,
  steps: [
    {
      id: 'step-1',
      type: ContractStepType.Seller,
      title: 'Seller',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.Completed,
      users: ['C. van Gils', 'S.Pit- van Gils'],
    },
    {
      id: 'step-2',
      type: ContractStepType.Buyer,
      title: 'Buyer',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.Completed,
      users: ['H. Peeters'],
    },
    {
      id: 'step-3',
      type: ContractStepType.SalesPrice,
      title: 'Sales price',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.Completed,
      description: '€ 245.000 k.k.',
    },
    {
      id: 'step-4',
      type: ContractStepType.GroundLease,
      title: 'Ground lease',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.Completed,
      description: '2 plots',
    },
    {
      id: 'step-5',
      type: ContractStepType.MovableProperty,
      title: 'Movable property',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.InProgress,
      description: 'YES',
    },
    {
      id: 'step-6',
      type: ContractStepType.PublicLawRestrictions,
      title: 'Public law restrictions',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-7',
      type: ContractStepType.RemovableRightsTenants,
      title: 'Removal rights tenants',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-8',
      type: ContractStepType.CharesAndObligations,
      title: 'Charges and obligations',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-9',
      type: ContractStepType.Handover,
      title: 'Handover',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-10',
      type: ContractStepType.Notary,
      title: 'Notary',
      modifiedAt: new Date().toLocaleString(),
      status: ContractStepStatus.Pending,
      users: ['H. Peeters'],
    },
    {
      id: 'step-11',
      type: ContractStepType.Guarentee,
      title: 'Guarentee',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-12',
      type: ContractStepType.Dissolutions,
      title: 'Dissolutions',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-13',
      type: ContractStepType.NHG,
      title: 'NHG',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-14',
      type: ContractStepType.ConstructionInspection,
      title: 'Construction inspectation',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-15',
      type: ContractStepType.Registration,
      title: 'Registration',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-16',
      type: ContractStepType.AdditionalArticles,
      title: 'Additional articles',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-17',
      type: ContractStepType.Signing,
      title: 'Signing',
      status: ContractStepStatus.Pending,
    },
    {
      id: 'step-18',
      type: ContractStepType.Allonge,
      title: 'Allonge',
      status: ContractStepStatus.Pending,
    },
  ],
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
