export type OrdersContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type OrdersProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  status: OrdersTabStatus;
  sortType: string;
  onChangeStatus: (status: OrdersTabStatus) => void;
  onChangeSortType: (sortType: string) => void;
  orders: SalesOrder[];
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
  order: {
    id: string;
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
