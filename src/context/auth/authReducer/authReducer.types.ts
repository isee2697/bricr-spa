import { User } from 'api/types';

export type AuthAction = {
  type: string;
  user?: User;
  accessToken?: string;
  refreshToken?: string;
};
