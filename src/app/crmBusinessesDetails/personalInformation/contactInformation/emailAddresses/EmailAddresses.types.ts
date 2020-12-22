import { CrmEmailAddress } from 'api/types';

export type EmailAddressesProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type EmailAddressItem = CrmEmailAddress & {
  key: string;
};
