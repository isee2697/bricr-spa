import { PromiseFunction } from 'app/shared/types';

export type ContactsContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type ContactsProps = {
  onSave: PromiseFunction<void>;
};
