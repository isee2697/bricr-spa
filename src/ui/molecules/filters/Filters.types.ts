import { ReactNode } from 'react';
import { AnyObject } from 'final-form';
import { GridSize } from '@material-ui/core';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type FiltersTypes = {
  key: string;
  type: string;
  size: GridSize;
  options?: CheckboxDataType[];
  from?: number;
  to?: number;
};

export type FilterProps = {
  isOpened: boolean;
  activeTab: number;
  onClose: () => void;
  onSubmit: (body: AnyObject) => void;
  onTabChange: (index: number) => void;
  data?: AnyObject;
};

export type FilterContainerProps = {
  isOpened: boolean;
  onClose: () => void;
  data?: AnyObject;
  getFilteredAmount?: (amount: number) => void;
};

export type FilterButtonProps = {
  data?: AnyObject;
  getActiveFilters?: (filters: AnyObject) => void;
};

export type FilterSidenavProps = {
  filters: FiltersTypes[];
  onChange: (index: number) => void;
};

export type FilterTabPanelProps = {
  children: ReactNode;
  activeTab: number;
  id: number;
};
