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
  value: number;
  type: string;
  size: GridSize;
  options?: CheckboxDataType[];
  from?: number;
  to?: number;
};

export type FilterProps = {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: (body: AnyObject) => void;
  data?: AnyObject;
};

export type FilterContainerProps = {
  isOpened: boolean;
  onClose: () => void;
  data?: AnyObject;
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
