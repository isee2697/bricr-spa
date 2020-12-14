import { CreateCompanyInput } from 'api/types';

export type RegisterFormProps = {
  checkSpaceAvailable: (name: string) => Promise<undefined | { error: boolean }>;
  onSubmit: (fields: CreateCompanyInput) => Promise<undefined | { error: boolean }>;
  isSubmitEnabled: boolean;
  spaceName?: string;
  data: CreateCompanyInput;
  error?: string;
};
