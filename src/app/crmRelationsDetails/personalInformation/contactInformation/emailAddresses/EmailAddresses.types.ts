import { CrmContactInformation, CrmEmailAddress } from 'api/types';

export type EmailAddressesProps = {
  data: CrmContactInformation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type EmailAddressItem = CrmEmailAddress & {
  key: string;
};
