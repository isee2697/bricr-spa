import { CrmItem } from '../Crm.types';

export type CrmListItemProps = {
  crm: CrmItem;
};

export type CrmListItemMetaBoxProps = {
  label: string;
  count: number;
  crm: CrmItem;
};
