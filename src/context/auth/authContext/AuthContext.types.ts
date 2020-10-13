import { Dispatch } from 'react';
import { AuthAction } from '../authReducer/authReducer.types';
import { Profile } from 'api/types';

export type AuthStateContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user?: Profile;
};

export type AuthDispatchContextType = Dispatch<AuthAction>;
