import { DateTime } from 'luxon';

export type InvoicesContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type InvoicesProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type SalesInvoice = {
  id: string;
  image: string;
  number?: number;
  date?: DateTime;
  dueDate?: DateTime;
  type: SalesInvoiceType;
  amount: number;
  tax: number;
  interest: SalesInvoiceInterest;
  address: string;
};

export enum SalesInvoiceType {
  StartUpInvoice = 'StartUpInvoice',
}

export enum SalesInvoiceInterest {
  SellingHome = 'SellingHome',
  FreeValuation = 'FreeValuation',
  Appraisal = 'Appraisal',
  Mortgage = 'Mortgage',
  CommercialRealEstateForHire = 'CommercialRealEstateForHire',
}
