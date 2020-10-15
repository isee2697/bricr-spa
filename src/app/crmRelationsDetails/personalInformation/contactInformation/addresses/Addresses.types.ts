import { CrmAddress, CrmContactInformation } from 'api/types';

export type AddressesProps = {
  data: CrmContactInformation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type AddressItem = CrmAddress & {
  key: string;
};
