import { DateTime } from 'luxon';

import { ListPimsFilters } from 'api/types';
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
  activeFilters: ListPimsFilters;
  onFilter: (filters: ListPimsFilters) => void;
  isOwner?: boolean;
};

export enum CrmRelationsDetailsCustomerJourneyTab {
  Matches = 'matches',
  Interests = 'interests',
  Viewings = 'viewings',
  Biddings = 'biddings',
  Candidate = 'candidate',
  Optant = 'optant',
  Buyer = 'buyer',
  Tenant = 'tenant',
  Owner = 'owner',
}

export enum CrmRelationsCustomerJourneyProperty {
  Apartment = 'apartment',
  Balcony = 'balcony',
  Terrace = 'terrace',
  Garden = 'garden',
  SalePrice = 'salePrice',
  RentPrice = 'rentPrice',
}

export type CrmRelationsDetailsCustomerJourneyType = {
  id: string;
  name: string;
  image: string;
  size: number;
  rooms: number;
  properties: CrmRelationsCustomerJourneyProperty[];
  propertyRelatedItems?: CrmRelationsCustomerJourneyProperty[];
  price: number;
  matchStrength: number;
  dateCreated: DateTime;
  brokerages?: CrmRelationsDetailsCustomerJourneyBrokerage[];
  counters?: CrmRelationsDetailsCustomerJourneyCounter[];
  candidates?: CrmRelationsDetailsCustomerJourneyCandidate[];
  optants?: CrmRelationsDetailsCustomerJourneyOptant[];
  finalPrice?: number;
  finalPriceUpdated?: DateTime;
  conditions?: {
    takeOverListOfCases: boolean;
    technicalBuildingInspection: boolean;
    reservationOfFunding: boolean;
  };
  requiredDocuments?: {
    salesContract: boolean;
    driverLicense: boolean;
    employmentConfirmation: boolean;
  };
  status?: string;
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
