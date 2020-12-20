import { DateTime } from 'luxon';

import { CrmItem } from '../../crm/Crm.types';

export type BusinessJourneyContainerProps = {
  crm: CrmItem;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type BusinessJourneyProps = {
  crm: CrmItem;
  items: BusinessJourneyType[];
  status: BusinessJourneyTab;
  onStatusChange: (status: BusinessJourneyTab) => void;
};

export enum BusinessJourneyTab {
  Matches = 'matches',
  Interests = 'interests',
  Viewings = 'viewings',
  Biddings = 'biddings',
  Candidate = 'candidate',
  Optant = 'optant',
}

export enum BusinessJourneyProperty {
  Apartment = 'apartment',
  Balcony = 'balcony',
  Terrace = 'terrace',
  Garden = 'garden',
}

export type BusinessJourneyType = {
  id: string;
  name: string;
  image: string;
  size: number;
  rooms: number;
  properties: BusinessJourneyProperty[];
  price: number;
  matchStrength: number;
  dateCreated: DateTime;
  brokerages?: BusinessJourneyBrokerage[];
  counters?: BusinessJourneyCounter[];
  candidates?: BusinessJourneyCandidate[];
  optants?: BusinessJourneyOptant[];
};

export type BusinessJourneyBrokerage = {
  id: string;
  dateCreated: DateTime;
  location: string;
  broker: {
    username: string;
    avatar: string;
  };
  status: 'rejected' | 'pending' | 'approved';
};

export type BusinessJourneyCounter = {
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

export type BusinessJourneyCandidate = {
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

export type BusinessJourneyOptant = {
  id: string;
  finalPrice: number;
  finalPriceDate: DateTime;
  properties: BusinessJourneyProperty[];
  price: number;
  matchStrength: number;
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
