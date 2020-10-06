import { AddressType } from '../addresses/Addresses.types';

export type AddNewAddressModalProps = {
  onSubmit: AddNewAddressSubmit;
  isOpen: boolean;
};

export type AddNewAddressSubmit<T = AddNewAddressBody> = (
  body: T,
) => Promise<undefined | { error: 'conflict' | 'unknown'; conflictsCount?: number }>;

export type AddNewAddressBody = {
  addressType: AddressType;
};
