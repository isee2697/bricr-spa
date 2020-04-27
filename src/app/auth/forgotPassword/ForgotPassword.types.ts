import { ForgotPasswordInput } from 'api/types';

export type ForgotPasswordProps = {
  onSubmit(payload: ForgotPasswordInput): Promise<boolean>;
};
