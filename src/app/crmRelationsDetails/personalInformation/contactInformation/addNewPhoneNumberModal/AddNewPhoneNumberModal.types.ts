import { PhoneNumberType } from '../phoneNumbers/PhoneNumbers.types';

export type AddNewPhoneNumberModalProps = {
  onSubmit: AddNewPhoneNumberSubmit;
  isOpen: boolean;
};

export type AddNewPhoneNumberSubmit<T = AddNewPhoneNumberBody> = (
  body: T,
) => Promise<undefined | { error: 'conflict' | 'unknown'; conflictsCount?: number }>;

export type AddNewPhoneNumberBody = {
  phoneNumberType: PhoneNumberType;
};
