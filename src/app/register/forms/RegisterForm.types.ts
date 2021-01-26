import { CreateCompanyInput } from 'api/types';

export type HandleCreateCompanyInput = CreateCompanyInput & {
  repeat_password?: string;
};

export type RegisterFormProps = {
  checkSpaceAvailable: (name: string) => Promise<undefined | { error: boolean }>;
  onSubmit: (fields: CreateCompanyInput) => Promise<undefined | { error: boolean }>;
  isSubmitEnabled: boolean;
  spaceName?: string;
  data: HandleCreateCompanyInput;
  error?: string;
};

export type PasswordAreaProps = {
  error: boolean;
  setError: (error: boolean) => void;
};
