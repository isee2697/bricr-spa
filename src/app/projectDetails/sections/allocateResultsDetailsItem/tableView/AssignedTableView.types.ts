import { ReactNode } from 'react';

import { AssignedProperty } from '../AllocateResultsDetailItem.types';

export type AssignedTableHeaderCell = {
  field?: keyof AssignedProperty;
  label?: string;
  renderer?: (rowData: AssignedProperty) => ReactNode;
  sorter?: VoidFunction;
};

export type AssignedType = 'assigned' | 'unassigned';

export type AssignedTableViewProps = {
  type: AssignedType;
  properties: AssignedProperty[];
  onClick?: (id: string) => void;
  selected: string[];
  onSelectProperty: (id: string) => void;
  onSelectAllProperties: VoidFunction;
};
