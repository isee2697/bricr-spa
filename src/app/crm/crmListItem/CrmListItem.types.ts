import { ReactNode } from 'react';

import { CrmListItem, CrmStatus } from 'api/types';
import { CrmItem } from '../Crm.types';

export type CrmListItemProps = {
  crm: CrmListItem;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
  onDelete?: (id: string) => void;
  renderAction?: (item: CrmListItem) => ReactNode;
};

export type CrmListItemMetaBoxProps = {
  label: string;
  count: number;
  crm: CrmListItem;
};
