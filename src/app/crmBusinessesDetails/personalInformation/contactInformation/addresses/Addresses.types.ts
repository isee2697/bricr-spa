import { CrmAddress } from 'api/types';

export type AddressesProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type AddressItem = CrmAddress & {
  key: string;
};
