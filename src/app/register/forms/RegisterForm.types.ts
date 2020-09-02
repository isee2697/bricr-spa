export type RegisterFormProps = {
  checkSpaceAvailable: (name: string) => Promise<undefined | { error: boolean }>;
  onSubmit: (fields: RegisterFormFields) => Promise<undefined | { error: boolean }>;
  isSubmitEnabled: boolean;
};

export type RegisterFormFields = {
  name: string;
  email: string;
  space: string;
};
