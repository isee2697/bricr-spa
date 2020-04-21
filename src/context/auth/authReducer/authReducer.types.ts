import { Me } from 'api/types';

export type AuthAction = {
  type: string;
  user?: Me;
  accessToken?: string;
  refreshToken?: string;
};
