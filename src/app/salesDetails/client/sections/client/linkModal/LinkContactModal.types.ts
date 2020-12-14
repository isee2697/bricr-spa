import { CrmListItem } from 'api/types';

export type LinkContactModalCrmListItem = Pick<CrmListItem, 'id' | 'firstName' | 'insertion' | 'lastName'>;

export type LinkContactModalContainerProps = {
  onSubmit: ({ contact }: { contact: string[] }) => Promise<void>;
};

export type LinkContactModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: ({ contact }: { contact: string[] }) => Promise<void>;
  crmList: LinkContactModalCrmListItem[];
};
