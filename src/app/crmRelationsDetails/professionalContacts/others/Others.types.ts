import { LinkedCrm, Profile } from 'api/types';

export type OthersContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type OthersProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: LinkedOthers[];
};

export type LinkedOthers = {
  id: string;
  notary: LinkedCrm;
  items: LinkedOthersItem[];
};

export type LinkedOthersItem = Profile & {
  notes?: string;
};
