import { CrmFamilyContacts } from 'api/types';

export type FamilyProps = {
  data: CrmFamilyContacts;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
