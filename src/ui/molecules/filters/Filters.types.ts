import { ReactNode } from 'react';
import { AnyObject } from 'final-form';
import { GridSize } from '@material-ui/core';

import { Profile, Team } from 'api/types';

export enum FiltersSizes {
  M = 6,
  L = 12,
}

export enum Types {
  Text = 'label',
  Range = 'range',
  Checkbox = 'checkbox',
  RadioButton = 'radioButton',
  DateRange = 'dateRange',
}

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
  filterAmount?: number;
  onDeleteFilter: (filters: AnyObject) => void;
  filters: FiltersTypes[];
  teams?: Team[];
  accountManagers?: Profile[];
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
  color?: 'primary' | 'secondary' | 'default' | 'error';
  variant?: 'rounded' | 'circle' | 'roundedContained' | 'circleContained';
  filters: FiltersTypes[];
  teams?: Team[];
  accountManagers?: Profile[];
};

export type FilterSidenavProps = {
  filters: FiltersTypes[];
  selectedFilters?: AnyObject;
  onChange: (index: number) => void;
};

export type FilterTabPanelProps = {
  filterType: string;
  children: ReactNode;
  activeTab: number;
  id: number;
  onDeleteFilter?: () => void;
  onSearch?: (value: string) => void;
};
