import { CrmFamilyContacts } from 'api/types';
import { AddNewPersonModalCrmListItem } from '../addNewPersonModal/AddNewPersonModal.types';

export type PersonItem = AddNewPersonModalCrmListItem & {
  linkedType: PersonType;
};

export enum PersonType {
  MainContact = 'MainContact',
  Broker = 'Broker',
  FinancialAdviosr = 'FinancialAdvisor',
  Custom = 'Custom',
}

export type PeopleGroup = {
  type: PersonType;
  items: PersonItem[];
};

export type PeopleProps = {
  data: CrmFamilyContacts;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
