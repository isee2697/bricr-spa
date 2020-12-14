export enum PageType {
  Pim = 'Pim',
  Sales = 'Sales',
  CRM = 'CRM',
  Email = 'Email',
  Calendar = 'Calendar',
  Documents = 'Documents',
  Settings = 'Settings',
  Tasks = 'Tasks',
}

export type Page = {
  category: PageType;
  subCategory?: string;
  path: string;
  name?: string;
};

export type VisitedPages = {
  [userId: string]: Page[];
};
