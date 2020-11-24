import { CrmFamilyContacts } from 'api/types';

export enum ContactType {
  MainContact = 'main_contact',
  Broker = 'broker',
  FinancialAdvisor = 'financial_advisor',
  Custom = 'custom',
}

export type PeopleProps = {
  data: CrmFamilyContacts;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
