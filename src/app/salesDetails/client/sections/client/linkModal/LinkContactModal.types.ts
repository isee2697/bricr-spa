import { CrmListItem, CrmType } from 'api/types';

export type LinkContactModalCrmListItem = Pick<CrmListItem, 'id' | 'firstName' | 'initials' | 'lastName'>;

export type LinkContactModalContainerProps = {
  onSubmit: ({ contact }: { contact: string[] }) => Promise<void>;
  type?: CrmType;
};

export type LinkContactModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: ({ contact }: { contact: string[] }) => Promise<void>;
  crmList: LinkContactModalCrmListItem[];
};
