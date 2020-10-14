import { CrmContactInformation } from 'api/types';

export type ContactInformationProps = {
  data: CrmContactInformation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
