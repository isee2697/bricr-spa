import React from 'react';
import { useParams, Route, Switch, Redirect } from 'react-router-dom';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { MatchProfileProps } from './MatchProfile.types';
import { MatchProfileListContainer } from './list/ListContainer';
import { CreateNewMatchProfileContainer } from './createNewMatchProfile/CreateNewMatchProfileContainer';

export const MatchProfile = ({ path, onSidebarOpen, isSidebarVisible }: MatchProfileProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })}
        to="/personal_information_match_profile"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Switch>
        <Route
          exact
          path={path}
          component={() => (
            <MatchProfileListContainer path={path} onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
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
          path={`${path}/:profileId/edit`}
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
