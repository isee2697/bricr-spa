import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { MatchProfileProps } from './MatchProfile.types';
import { MatchProfileListContainer } from './list/ListContainer';
import { CreateNewMatchProfileContainer } from './createNewMatchProfile/CreateNewMatchProfileContainer';

export const MatchProfile = ({ crm, path, onSidebarOpen, isSidebarVisible }: MatchProfileProps) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          component={() => (
            <MatchProfileListContainer
              path={path}
              onSidebarOpen={onSidebarOpen}
              isSidebarVisible={isSidebarVisible}
              crm={crm}
            />
          )}
        />
        <Route
          exact
          path={`${path}/new`}
          component={() => (
            <CreateNewMatchProfileContainer
              path={path}
              onSidebarOpen={onSidebarOpen}
              isSidebarVisible={isSidebarVisible}
            />
          )}
        />
        <Route
          exact
          path={`${path}/:matchProfileId`}
          component={() => (
            <CreateNewMatchProfileContainer
              path={path}
              onSidebarOpen={onSidebarOpen}
              isSidebarVisible={isSidebarVisible}
            />
          )}
        />
        <Route
          exact
          path={`${path}/:matchProfileId/edit`}
          component={() => (
            <CreateNewMatchProfileContainer
              path={path}
              onSidebarOpen={onSidebarOpen}
              isSidebarVisible={isSidebarVisible}
            />
          )}
        />
        <Redirect to={{ pathname: `${path}` }} />
      </Switch>
    </>
  );
};
