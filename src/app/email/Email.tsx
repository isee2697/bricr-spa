import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AppRoute } from 'routing/AppRoute.enum';
import { Grid } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { EmailProps } from './Email.types';
import { EmailInboxContainer } from './inbox/InboxContainer';
import { EmailSettingsContainer } from './settings/SettingsContainer';
import { EmailDetailsContainer } from './details/DetailsContainer';
import { EmailNewContainer } from './new/EmailNewContainer';

export const Email = ({ breadcrumbs, path, entityType, accounts = [] }: EmailProps) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <EntityTypeProvider entityType={entityType}>
        <Grid container spacing={0} wrap="nowrap">
          {breadcrumbs}
          <Switch>
            <Route
              exact
              path={`${path}/settings`}
              render={() => (
                <EmailSettingsContainer
                  onSidebarOpen={handleSidebarOpen}
                  onSidebarClose={handleSidebarHide}
                  isSidebarVisible={isSidebarVisible}
                  accounts={accounts}
                />
              )}
            />
            <Route exact path={`${path}/:inboxId/new`} render={() => <EmailNewContainer />} />
            <Route
              exact
              path={`${path}/:inboxId/inbox`}
              render={() => (
                <EmailInboxContainer
                  onSidebarOpen={handleSidebarOpen}
                  onSidebarClose={handleSidebarHide}
                  isSidebarVisible={isSidebarVisible}
                  accounts={accounts}
                />
              )}
            />
            <Route
              exact
              path={`${path}/:inboxId/:folder`}
              render={() => (
                <EmailInboxContainer
                  onSidebarOpen={handleSidebarOpen}
                  onSidebarClose={handleSidebarHide}
                  isSidebarVisible={isSidebarVisible}
                  accounts={accounts}
                />
              )}
            />
            <Route path={`${path}/:inboxId/:folder/:emailId`} render={() => <EmailDetailsContainer />} />
            <Redirect
              to={
                accounts.length && accounts[0].id ? `${AppRoute.email}/${accounts[0].id}` : `${AppRoute.email}/settings`
              }
            />
          </Switch>
        </Grid>
      </EntityTypeProvider>
    </DndProvider>
  );
};
