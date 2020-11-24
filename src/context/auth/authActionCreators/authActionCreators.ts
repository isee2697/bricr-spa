import { LOGOUT, SET_AUTHORIZED, SET_TOKENS, SET_UNAUTHORIZED, START_AUTHORIZING } from '../authReducer/authReducer';
import { AuthAction } from '../authReducer/authReducer.types';
import { Profile } from 'api/types';

export const setAuthorized: (user: Profile) => AuthAction = user => ({
  type: SET_AUTHORIZED,
  user,
});

export const setUnauthorized: () => AuthAction = () => ({
  type: SET_UNAUTHORIZED,
});

export const setTokens: (accessToken: string, refreshToken: string) => AuthAction = (accessToken, refreshToken) => ({
  type: SET_TOKENS,
  accessToken,
  refreshToken,
});

export const logout: () => AuthAction = () => ({
  type: LOGOUT,
});

export const startAuthorizing: () => AuthAction = () => ({
  type: START_AUTHORIZING,
});
