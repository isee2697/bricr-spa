import { ReactNode } from 'react';

import { CrmItem } from '../Crm.types';

export type CrmListItemProps = {
  crm: CrmItem;
  renderAction?: (item: CrmItem) => ReactNode;
};

export type CrmListItemMetaBoxProps = {
  label: string;
  count: number;
  crm: CrmItem;
};
