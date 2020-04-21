import { SET_AUTHORIZED, SET_TOKENS, SET_UNAUTHORIZED, START_AUTHORIZING, LOGOUT } from '../authReducer/authReducer';
import { AuthAction } from '../authReducer/authReducer.types';
import { Me } from 'api/types';

export const setAuthorized: (user: Me) => AuthAction = user => ({
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
