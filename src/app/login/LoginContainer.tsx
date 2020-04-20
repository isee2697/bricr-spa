import React, { useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import { AppRoute } from 'routing/AppRoute.enum';
import { startAuthorizing, setTokens, setUnauthorized } from 'context/auth/authActionCreators/authActionCreators';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { LOGIN } from 'api/mutations/auth';

import { Login } from './Login';

export const LoginContainer = () => {
  const dispatch = useAuthDispatch();
  const [login] = useMutation(LOGIN);

  const { isAuthorized } = useAuthState();

  const onSubmit = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      dispatch(startAuthorizing());

      const { data, errors } = await login({ variables: body });
      if (!errors && data) {
        const { accessToken, refreshToken } = data.login;
        dispatch(setTokens(accessToken, refreshToken));

        return true;
      }
      dispatch(setUnauthorized());
      return false;
    },
    [dispatch, login],
  );

  if (isAuthorized) {
    return <Redirect to={AppRoute.home} />;
  }
  return <Login onSubmit={onSubmit} />;
};
