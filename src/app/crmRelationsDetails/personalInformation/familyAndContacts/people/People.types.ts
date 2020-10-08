import { Profile } from 'api/types';

export enum ContactType {
  MainContact = 'main_contact',
  Broker = 'broker',
  FinancialAdvisor = 'financial_advisor',
  Custom = 'custom',
}

export type Contact = {
  profile: Profile;
  type: ContactType;
};

export type PeopleProps = {
  users: Profile[];
};
