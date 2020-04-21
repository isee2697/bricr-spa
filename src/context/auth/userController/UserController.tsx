import React, { useEffect } from 'react';

import { Loader } from 'ui/atoms/loader/Loader';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { setAuthorized, setUnauthorized } from '../authActionCreators/authActionCreators';
import { useMeQuery } from 'api/types';

import { UserControllerProps } from './UserController.types';

export const UserController = ({ children }: UserControllerProps) => {
  const dispatch = useAuthDispatch();
  const { loading, data, error } = useMeQuery();

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
