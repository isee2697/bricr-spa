import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { Loader } from 'ui/atoms';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRouteProps } from './AuthorizedRoute.types';

export const AuthorizedRoute = (props: AuthorizedRouteProps) => {
  const { isAuthorized, user } = useAuthState();

  if (isAuthorized && user) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  } else if (isAuthorized && !user) {
    return <Route {...props} component={Loader} />;
  }

  return <Redirect to={AppRoute.login} />;
};
