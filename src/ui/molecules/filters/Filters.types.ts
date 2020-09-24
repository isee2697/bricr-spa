import { ReactNode } from 'react';
import { AnyObject } from 'final-form';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type FiltersTypes = {
  key: string;
  value: number;
  type: string;
  size: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
  options?: CheckboxDataType[];
};

export type FilterProps = {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: (body: AnyObject) => void;
};

export type FilterContainerProps = {
  isOpened: boolean;
  onClose: () => void;
};

export type FilterSidenavProps = {
  filters: FiltersTypes[];
  onChange: (tab: FiltersTypes) => void;
};

export type FilterTabPanelProps = {
  children: ReactNode;
  activeTab: number;
  id: number;
};
