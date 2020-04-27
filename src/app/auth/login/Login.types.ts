import { LoginInput } from 'api/types';

export type LoginProps = {
  onSubmit(payload: LoginInput): Promise<boolean>;
};
