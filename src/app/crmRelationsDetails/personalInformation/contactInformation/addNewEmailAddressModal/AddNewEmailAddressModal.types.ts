import { EmailAddressType } from '../emailAddresses/EmailAddresses.types';

export type AddNewEmailAddressModalProps = {
  onSubmit: AddNewEmailAddressSubmit;
  isOpen: boolean;
};

export type AddNewEmailAddressSubmit<T = AddNewEmailAddressBody> = (
  body: T,
) => Promise<undefined | { error: 'conflict' | 'unknown'; conflictsCount?: number }>;

export type AddNewEmailAddressBody = {
  emailAddressType: EmailAddressType;
};
