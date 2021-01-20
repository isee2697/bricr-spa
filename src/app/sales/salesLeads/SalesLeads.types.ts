import { DateTime } from 'luxon';

export type SalesLeadsContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type SalesLeadsProps = {
  status: 'actionRequired' | 'withdrawn';
  viewMode: 'list' | 'table';
  onStatusChange: (status: 'actionRequired' | 'withdrawn') => void;
  onViewModeChange: (viewMode: 'list' | 'table') => void;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  salesLeads: SalesLead[];
};

export type SalesLead = {
  id: string;
  image?: string;
  name: string;
  number: string;
  email: string;
  partner?: {
    name: string;
    image?: string;
  };
  interests: SalesLeadInterest[];
  steps?: SalesLeadStep[];
  isNewlyAdded?: boolean;
};

export type SalesLeadStep = {
  action: SalesLeadStepAction;
  status: 'completed' | 'rejected' | 'active';
  date: DateTime;
};

export enum SalesLeadInterest {
  SellingHome = 'SellingHome',
  FreeValuation = 'FreeValuation',
  Appraisal = 'Appraisal',
  Mortgage = 'Mortgage',
  CommercialRealEstateForHire = 'CommercialRealEstateForHire',
}

export enum SalesLeadStepAction {
  FirstContact = 'FirstContact',
  Call = 'Call',
  Email = 'Email',
}
