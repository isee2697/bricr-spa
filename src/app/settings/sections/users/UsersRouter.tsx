import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { UsersContainer } from 'app/settings/sections/users/UsersContainer';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

import { UserDetailsContainer } from './UserDetailsContainer';

export const UsersRouter = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.users.title' })} />
      <Switch>
        <Route exact path={AppRoute.users} render={() => <UsersContainer />} />
        <Route exact path={AppRoute.userDetails} render={() => <UserDetailsContainer />} />
      </Switch>
    </>
  );
};
