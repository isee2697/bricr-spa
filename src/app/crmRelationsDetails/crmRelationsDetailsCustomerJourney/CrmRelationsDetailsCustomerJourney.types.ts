import { DateTime } from 'luxon';

import { CrmItem } from '../../crm/Crm.types';

export type CrmRelationsDetailsCustomerJourneyContainerProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CrmRelationsDetailsCustomerJourneyProps = {
  crm: CrmItem;
  items: CrmRelationsDetailsCustomerJourneyType[];
  status: CrmRelationsDetailsCustomerJourneyTab;
  onStatusChange: (status: CrmRelationsDetailsCustomerJourneyTab) => void;
};

export enum CrmRelationsDetailsCustomerJourneyTab {
  Matches = 'matches',
  Interests = 'interests',
  Viewings = 'viewings',
  Biddings = 'biddings',
  Candidate = 'candidate',
  Optant = 'optant',
}

export enum CrmRelationsCustomerJourneyProperty {
  Apartment = 'apartment',
  Balcony = 'balcony',
  Terrace = 'terrace',
  Garden = 'garden',
}

export type CrmRelationsDetailsCustomerJourneyType = {
  id: string;
  name: string;
  image: string;
  size: number;
  rooms: number;
  properties: CrmRelationsCustomerJourneyProperty[];
  price: number;
  matchStrenth: number;
  dateCreated: DateTime;
  brokerages?: CrmRelationsDetailsCustomerJourneyBrokerage[];
  counters?: CrmRelationsDetailsCustomerJourneyCounter[];
  candidates?: CrmRelationsDetailsCustomerJourneyCandidate[];
  optants?: CrmRelationsDetailsCustomerJourneyOptant[];
};

export type CrmRelationsDetailsCustomerJourneyBrokerage = {
  id: string;
  dateCreated: DateTime;
  location: string;
  broker: {
    username: string;
    avatar: string;
  };
  status: 'rejected' | 'pending' | 'approved';
};

export type CrmRelationsDetailsCustomerJourneyCounter = {
  id: string;
  offer: number;
  offerDate: DateTime;
  counterOffer: number;
  counterOfferDate: DateTime;
  conditions: {
    takeOverListOfCases: boolean;
    technicalBuildingInspection: boolean;
    reservationOfFunding: boolean;
  };
  status: 'counter' | 'pending';
  statusUpdateDate: DateTime;
};

export type CrmRelationsDetailsCustomerJourneyCandidate = {
  id: string;
  finalPrice: number;
  finalPriceDate: DateTime;
  conditions: {
    takeOverListOfCases: boolean;
    technicalBuildingInspection: boolean;
    reservationOfFunding: boolean;
  };
  requiredDocuments: {
    salesContract: boolean;
    driverLicense: boolean;
    employmentConfirmation: boolean;
  };
  dossierCompletionStatus: number;
};

export type CrmRelationsDetailsCustomerJourneyOptant = {
  id: string;
  finalPrice: number;
  finalPriceDate: DateTime;
  properties: CrmRelationsCustomerJourneyProperty[];
  price: number;
  matchStrenth: number;
  dateCreated: DateTime;
  conditions: {
    takeOverListOfCases: boolean;
    technicalBuildingInspection: boolean;
    reservationOfFunding: boolean;
  };
  requiredDocuments: {
    salesContract: boolean;
    driverLicense: boolean;
    employmentConfirmation: boolean;
  };
  dossierCompletionStatus: number;
};
