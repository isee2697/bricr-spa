import { Dispatch } from 'react';

import { AuthAction } from '../authReducer/authReducer.types';
import { Me } from 'api/types';

export type AuthStateContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user?: Me;
};

export type AuthDispatchContextType = Dispatch<AuthAction>;
