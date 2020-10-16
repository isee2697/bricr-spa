import { CrmContactInformation, CrmPhoneNumber } from 'api/types';

export type PhoneNumber = CrmPhoneNumber & {
  key: string;
};

export type PhoneNumbersObject = {
  [key: string]: PhoneNumber;
};

export type PhoneNumbersProps = {
  data: CrmContactInformation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
