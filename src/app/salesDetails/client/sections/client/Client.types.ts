import { CrmItem } from 'app/crm/Crm.types';

export type ClientProps = {
  crms: CrmItem[];
  onLinkSalesCrm: ({ contact }: { contact: string[] }) => Promise<void>;
};
