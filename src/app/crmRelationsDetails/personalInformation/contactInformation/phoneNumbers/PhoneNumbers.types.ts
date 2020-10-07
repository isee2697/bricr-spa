import { DateTime } from 'luxon';

export type PhoneNumber = {
  key: string;
  countryCode: string;
  phoneNumber: string;
  numberAvailableDate: DateTime;
  note: string;
};

export type PhoneNumbersObject = {
  [key: string]: PhoneNumber;
};

export type PhoneNumbersProps = {};

export enum PhoneNumberType {
  MobileNumber = 'MobileNumber',
  PrivateNumber = 'PrivateNumber',
  BusinessNumber = 'BusinessNumber',
  FaxNumber = 'FaxNumber',
  Custom = 'Custom',
}
