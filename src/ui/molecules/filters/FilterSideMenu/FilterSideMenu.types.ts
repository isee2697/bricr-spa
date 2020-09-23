import { ReactNode } from 'react';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type filtersTypes = {
  key: string;
  type: string;
  size: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
  options?: CheckboxDataType[];
};

export type FilterSidenavProps = {
  filters: filtersTypes[];
};
