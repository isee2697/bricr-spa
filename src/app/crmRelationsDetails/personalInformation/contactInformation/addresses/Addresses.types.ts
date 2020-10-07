import { DateTime } from 'luxon';

export type AddressesProps = {};

export type AddressItem = {
  key: AddressType;
  country: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  addition: string;
  extraAddressInformation: string;
  addressAvailableDate: DateTime;
  note: string;
};

export enum AddressType {
  HomeAddress = 'HomeAddress',
  SalesAddress = 'SalesAddress',
  MailingAddress = 'MailingAddress',
  VisitingAddress = 'VisitingAddress',
  BillingAddress = 'BillingAddress',
  FutureAddress = 'FutureAddress',
  PreviousAddress = 'PreviousAddress',
  SecondAddress = 'SecondAddress',
  Custom = 'Custom',
}
