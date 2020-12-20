import { DateTime } from 'luxon';

import { Sales, SalesStatus } from 'api/types';

export type SalesAcquisitionContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type SalesAcquisitionProps = {
  status: SalesStatus;
  onStatusChange: (status: SalesStatus) => void;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  salesAcquisitions: Sales[];
};

export interface GetSalesListData extends PaginatedMeta {
  salesItems: Sales[];
}

export interface PaginatedMeta {
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export type SalesAcquisition = {
  id: string;
  image?: string;
  name: string;
  number: string;
  email: string;
  address: string;
  partner?: SalesAcquisitionProfile;
  accountManagers: SalesAcquisitionProfile[];
  interests: SalesAcquisitionInterest[];
  steps?: SalesAcquisitionStep[];
  isNewlyAdded?: boolean;
};

export type SalesAcquisitionStep = {
  action: SalesAcquisitionStepAction;
  status: 'completed' | 'rejected' | 'active';
  date: DateTime;
};

export enum SalesAcquisitionInterest {
  SellingHome = 'SellingHome',
  FreeValuation = 'FreeValuation',
  Appraisal = 'Appraisal',
  Mortgage = 'Mortgage',
  CommercialRealEstateForHire = 'CommercialRealEstateForHire',
}

export enum SalesAcquisitionStepAction {
  Started = 'Started',
  Call = 'Call',
  Appointment = 'Appointment',
}

export type SalesAcquisitionProfile = {
  name: string;
  image?: string;
};
