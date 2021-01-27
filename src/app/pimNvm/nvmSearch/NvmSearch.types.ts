import { ReactElement } from 'react';

import { NvmItem } from '../PimNvm.types';

export type NvmSearchProps = {
  items: NvmItem[];
};

export type NvmSearchItemProps = {
  item: NvmItem;
  checkbox: ReactElement;
  checked: boolean;
};
