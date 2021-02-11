import { ReactNode } from 'react';

import { AllocatedPropertyRelation } from '../List.types';

export type AssignedTableHeaderCell = {
  field?: keyof AllocatedPropertyRelation;
  label?: string;
  renderer?: (rowData: AllocatedPropertyRelation) => ReactNode;
  sorter?: VoidFunction;
};

export type AssignedType = 'assigned' | 'unassigned';

export type AssignedTableViewProps = {
  type: AssignedType;
  properties: AllocatedPropertyRelation[];
  onClick?: (id: string) => void;
  selected: string[];
  onSelectProperty: (id: string) => void;
  onSelectAllProperties: VoidFunction;
};
