import React, { useEffect } from 'react';

import { Loader } from 'ui/atoms/loader/Loader';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { setAuthorized, setUnauthorized } from '../authActionCreators/authActionCreators';
import { useMeQuery } from 'api/types';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { UserControllerProps } from './UserController.types';

export const UserController = ({ children }: UserControllerProps) => {
  const dispatch = useAuthDispatch();
  const { isAuthorized } = useAuthState();
  const { loading, data, error } = useMeQuery({ skip: !isAuthorized });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!error && data && data.me) {
      return dispatch(setAuthorized(data.me));
    }

    return dispatch(setUnauthorized());
  }, [dispatch, error, data, loading]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
