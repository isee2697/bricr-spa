import { CrmFamilyContacts } from 'api/types';

export type PartnerProps = {
  data: CrmFamilyContacts;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
