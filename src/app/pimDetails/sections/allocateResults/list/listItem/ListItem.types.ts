import { ReactElement } from 'react';

import { AllocateResultItem } from '../List.types';

export type ListItemProps = {
  item: AllocateResultItem;
  checkbox: ReactElement;
  checked: boolean;
};
