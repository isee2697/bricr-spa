import { CrmListItem, CrmType } from 'api/types';
export type LinkPartnerModalCrmListItem = Pick<CrmListItem, 'id' | 'firstName' | 'lastName'>;

export type LinkPartnerModalContainerProps = {
  onSubmit: (partnerId: string | null) => Promise<undefined | { error: boolean }>;
  type?: CrmType;
};

export type LinkPartnerModalForm = {
  partner?: string[];
};

export type LinkPartnerModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: LinkPartnerModalForm) => Promise<undefined | { error: boolean }>;
  crmList: LinkPartnerModalCrmListItem[];
};
