import { SalesStatus } from 'api/types';
import { GetSalesListData } from '../salesAcquisition/SalesAcquisition.types';

export type OrdersContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type OrdersProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  status: SalesStatus;
  sortType: string;
  onChangeStatus: (status: SalesStatus) => void;
  onChangeSortType: (sortType: string) => void;
  orders?: GetSalesListData;
};

export enum OrdersTabStatus {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Complete = 'Complete',
  Withdrawn = 'Withdrawn',
}

export type SalesOrder = {
  id: string;
  image?: string;
  name: string;
  number: string;
  email: string;
  partner?: SalesOrderProfile;
  accountManagers: SalesOrderProfile[];
  interests?: SalesOrderInterest[];
  order: {
    id: string;
    price?: number;
    roomSize?: number;
    rooms?: number;
    image?: string;
    address: string;
    interests: SalesOrderInterest[];
  };
};

export type SalesOrderProfile = {
  name: string;
  image?: string;
};

export enum SalesOrderInterest {
  SellingHome = 'SellingHome',
  FreeValuation = 'FreeValuation',
  Appraisal = 'Appraisal',
  Mortgage = 'Mortgage',
  CommercialRealEstateForHire = 'CommercialRealEstateForHire',
}
