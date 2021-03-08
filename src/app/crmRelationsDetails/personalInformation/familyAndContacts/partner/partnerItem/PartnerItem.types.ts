import { CrmPartner } from 'api/types';

export type PartnerItemProps = {
  className: string;
  partner: CrmPartner;
  onUpdate?: (partner: CrmPartner) => Promise<void>;
  onDelete?: VoidFunction;
};
