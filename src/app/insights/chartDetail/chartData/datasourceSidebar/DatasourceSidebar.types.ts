import { ReactNode } from 'react';

export enum DatasourceTabType {
  DATASOURCE = 'Datasource',
}

export type DatasourceSidebarProps = {
  sourceGroups: DatasourceGroup[];
};

export type DatasourceGroup = {
  title: string;
  items: DatasourceGroupItem[];
};

export type DatasourceGroupItem = {
  id: string;
  icon: ReactNode;
  title: string;
};
