import { CrmFamilyContacts } from 'api/types';

export type FamilyAndContactsProps = {
  data: CrmFamilyContacts;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type FamilyAndContactsContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
