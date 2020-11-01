import { ReactElement } from 'react';

import { AllocatedProperty } from '../List.types';

export type ListItemProps = {
  checkbox: ReactElement;
  checked: boolean;
  item: AllocatedProperty;
};
