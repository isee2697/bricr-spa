import { CrmListItem } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { PersonType } from '../people/People.types';

export type AddNewPersonModalCrmListItem = Pick<CrmListItem, 'id' | 'firstName' | 'insertion' | 'lastName'>;

export type AddNewPersonModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: AddNewPersonBody) => Promise<undefined | { error: boolean }>;
  crmList: AddNewPersonModalCrmListItem[];
};

export type AddNewPersonModalContainerProps = {
  onSubmit: PromiseFunction<AddNewPersonBody>;
};

export type AddNewPersonBody = {
  crm: AddNewPersonModalCrmListItem;
  type: PersonType;
};
