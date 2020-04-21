import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { Loader } from 'ui/loader/Loader';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { setAuthorized, setUnauthorized } from '../authActionCreators/authActionCreators';
import { CURRENT_USER } from 'api/queries/profile';
import { MeQuery } from 'api/types';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { UserControllerProps } from './UserController.types';

export const UserController = ({ children }: UserControllerProps) => {
  const dispatch = useAuthDispatch();
  const authState = useAuthState();
  const [loadCurrentUser, { loading, data, error }] = useLazyQuery<MeQuery>(CURRENT_USER);

  useEffect(() => {
    if (authState.accessToken) {
      loadCurrentUser();
    } else {
      dispatch(setUnauthorized());
    }
  }, [authState.accessToken, dispatch, loadCurrentUser]);

  useEffect(() => {
    if (!error && data && data.me) {
      return dispatch(setAuthorized(data.me));
    }

    return dispatch(setUnauthorized());
  }, [dispatch, error, data]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
