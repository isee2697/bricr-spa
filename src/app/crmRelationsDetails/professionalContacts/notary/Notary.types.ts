import { LinkedCrm, Profile } from 'api/types';

export type NotaryContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type NotaryProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: LinkedNotary[];
};

export type LinkedNotary = {
  id: string;
  notary: LinkedCrm;
  items: LinkedNotaryItem[];
};

export type LinkedNotaryItem = Profile & {
  notes?: string;
};
