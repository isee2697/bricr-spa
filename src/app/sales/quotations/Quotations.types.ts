import { DateTime } from 'luxon';

export type QuotationsContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type QuotationsProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  status: QuotationsTabStatus;
  sortType: string;
  viewMode: 'list' | 'table';
  onChangeStatus: (status: QuotationsTabStatus) => void;
  onViewModeChange: (viewMode: 'list' | 'table') => void;
  onChangeSortType: (sortType: string) => void;
  quotations: SalesQuotation[];
};

export enum QuotationsTabStatus {
  Active = 'Active',
  Accepted = 'Accepted',
  Declined = 'Declined',
}

export type SalesQuotation = {
  id: string;
  image?: string;
  address: string;
  interest: SalesQuotationInterest;
  version: number;
  partners: SalesQuotationProfile[];
  accountManagers: SalesQuotationProfile[];
  steps: SalesQuotationStep[];
};

export type SalesQuotationProfile = {
  name: string;
  image?: string;
};

export type SalesQuotationStep = {
  action: SalesQuotationStepAction;
  status: 'completed' | 'active' | 'pending';
  date?: DateTime;
};

export enum SalesQuotationInterest {
  SellingHome = 'SellingHome',
  FreeValuation = 'FreeValuation',
  Appraisal = 'Appraisal',
  Mortgage = 'Mortgage',
  CommercialRealEstateForHire = 'CommercialRealEstateForHire',
}

export enum SalesQuotationStepAction {
  Created = 'Created',
  Sent = 'Sent',
  Accepted = 'Accepted',
  Pending = 'Pending',
  Declined = 'Declined',
}
