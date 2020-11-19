import { ReactNode } from 'react';

export type ContractTemplatesDetailsSidebarProps = {
  fieldsGroups: ContractTemplatesDetailsSidebarGroup[];
};

export type ContractTemplatesDetailsSidebarGroupItem = {
  id: string;
  value: string;
  icon: ReactNode;
};

export type ContractTemplatesDetailsSidebarGroup = {
  title: string;
  items: ContractTemplatesDetailsSidebarGroupItem[];
};
