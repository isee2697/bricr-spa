import React, { useReducer } from 'react';
import { authStorage } from '../authStorage/AuthStorage';
import { AuthDispatchContext, AuthStateContext } from 'context/auth/authContext/AuthContext';
import { authReducer } from 'context/auth/authReducer/authReducer';

import { AuthContextControllerProps } from './AuthContextController.types';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthorized: !!authStorage.accessToken,
    isAuthorizing: !!authStorage.accessToken,
    user: undefined,
    accessToken: authStorage.accessToken,
    refreshToken: authStorage.refreshToken,
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
