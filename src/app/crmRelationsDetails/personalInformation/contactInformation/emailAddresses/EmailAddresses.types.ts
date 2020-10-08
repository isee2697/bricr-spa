import { DateTime } from 'luxon';

export type EmailAddressesProps = {};

export type EmailAddressItem = {
  key: EmailAddressType;
  emailAvailableDate: DateTime;
  emailAddress: string;
  note: string;
};

export enum EmailAddressType {
  AddressForMatches = 'AddressForMatches',
  AddressForInvoices = 'AddressForInvoices',
  Private = 'Private',
  Business = 'Business',
  PreviousAddress = 'PreviousAddress',
  Custom = 'Custom',
}
