import { CrmListItem, CrmStatus } from 'api/types';

export type CrmListItemProps = {
  crm: CrmListItem;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
  onDelete?: (id: string) => void;
};

export type CrmListItemMetaBoxProps = {
  label: string;
  count: number;
  crm: CrmListItem;
};
