import { Profile } from 'api/types';

export type BrokersContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type BrokersProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: LinkedBroker[];
};

export type LinkedBroker = Profile & {
  notes?: string;
};
