import React, { useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { startAuthorizing, setTokens, setUnauthorized } from 'context/auth/authActionCreators/authActionCreators';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useLoginMutation, LoginInput, AuthResult } from 'api/types';
import { authStorage } from 'context/auth/authStorage/AuthStorage';

import { Login } from './Login';

export const LoginContainer = () => {
  const dispatch = useAuthDispatch();
  const [login] = useLoginMutation();

  const { isAuthorized, user } = useAuthState();

  const onSubmit = useCallback(
    async (body: LoginInput): Promise<boolean> => {
      try {
        dispatch(startAuthorizing());

        const { data, errors } = await login({
          variables: {
            input: body,
          },
        });

        if (!errors && data && data?.login) {
          const { AccessToken, RefreshToken }: AuthResult = JSON.parse(data.login)?.AuthenticationResult;
          authStorage.accessToken = AccessToken;
          authStorage.refreshToken = RefreshToken;
          dispatch(setTokens(AccessToken, RefreshToken));

          return true;
        }

        throw new Error();
      } catch {
        dispatch(setUnauthorized());

        return false;
      }
    },
    [dispatch, login],
  );

  if (isAuthorized) {
    const lastPath = localStorage.getItem('bricrPreLogoutPage');

    if (!!lastPath && user?.id) {
      localStorage.removeItem('bricrPreLogoutPage');

      return <Redirect to={lastPath} />;
    }

    return <Redirect to={AppRoute.home} />;
  }

  return <Login onSubmit={onSubmit} />;
};
