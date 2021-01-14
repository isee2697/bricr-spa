export type VerifyProps = {
  email?: string;
  name?: string;
  onSubmit: (data: VerifyData) => void;
  error?: string;
};

export type VerifyData = {
  email?: string;
  code?: string;
};
