import { Dispatch } from 'react';

import { AuthAction } from '../authReducer/authReducer.types';
import { User } from 'api/types';

export type AuthStateContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user?: User;
};

export type AuthDispatchContextType = Dispatch<AuthAction>;
