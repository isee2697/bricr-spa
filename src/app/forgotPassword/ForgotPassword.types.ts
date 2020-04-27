import { LoginInput } from 'api/types';

export type ForgotPasswordProps = {
  onSubmit(payload: LoginInput): Promise<boolean>;
};
