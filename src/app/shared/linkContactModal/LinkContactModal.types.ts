import { CrmListItem, CrmType } from 'api/types';

export type LinkContactModalCrmListItem = Pick<CrmListItem, 'id' | 'firstName' | 'initials' | 'lastName'>;

export type LinkContactModalForm = {
  contact?: string[];
  type: string;
};

export type LinkContactModalContainerProps = {
  onSubmit: (values: LinkContactModalForm) => Promise<undefined | { error: boolean }>;
  type?: CrmType;
};

export type LinkContactModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: LinkContactModalForm) => Promise<undefined | { error: boolean }>;
  crmList: LinkContactModalCrmListItem[];
};

export enum LinkProfileType {
  MainContact = 'MainContact',
  Broker = 'Broker',
  FinancialAdvisor = 'FinancialAdvisor',
  Custom = 'Custom',
}
