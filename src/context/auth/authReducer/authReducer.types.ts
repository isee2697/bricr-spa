import { Profile } from 'api/types';

export type AuthAction = {
  type: string;
  user?: Profile;
  accessToken?: string;
  refreshToken?: string;
};
