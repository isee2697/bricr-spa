import { LinkedCrm, Profile } from 'api/types';

export type PurchaseContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type PurchaseProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: LinkedPurchase[];
};

export type LinkedPurchase = {
  id: string;
  notary: LinkedCrm;
  items: LinkedPurchaseItem[];
};

export type LinkedPurchaseItem = Profile & {
  notes?: string;
};
