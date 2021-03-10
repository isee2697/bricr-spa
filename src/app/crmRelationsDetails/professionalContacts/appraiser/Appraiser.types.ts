import { LinkedCrm, Profile } from 'api/types';

export type AppraiserContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type AppraiserProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: LinkedAppraiser[];
};

export type LinkedAppraiser = {
  id: string;
  notary: LinkedCrm;
  items: LinkedAppraiserItem[];
};

export type LinkedAppraiserItem = Profile & {
  notes?: string;
};
