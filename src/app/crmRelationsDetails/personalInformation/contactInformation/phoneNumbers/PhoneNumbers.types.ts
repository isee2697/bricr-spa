export type PhoneNumber = {
  key: string;
  title: string;
  countryCode: string;
  phoneNumber: string;
  numberAvailableDate: string;
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
