import { CrmStatus } from 'api/types';
import { CrmItem } from '../Crm.types';

export type CrmListItemProps = {
  crm: CrmItem;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
  onDelete?: (id: string) => void;
};

export type CrmListItemMetaBoxProps = {
  label: string;
  count: number;
  crm: CrmItem;
};
