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
import { ComposeNewEmailModalContainer } from './composeNewEmailModal/ComposeNewEmailModalContainer';

export const Email = ({ breadcrumbs, path, entityType, accounts = [], onAddedNewAccount }: EmailProps) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <>
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
                    onAddedNewAccount={onAddedNewAccount}
                  />
                )}
              />
              {/* <Route exact path={`${path}/:inboxId/new`} render={() => <EmailNewContainer />} /> */}
              <Route
                path={`${path}/inbox/:inboxId`}
                render={() => (
                  <EmailInboxContainer
                    onSidebarOpen={handleSidebarOpen}
                    onSidebarClose={handleSidebarHide}
                    isSidebarVisible={isSidebarVisible}
                    accounts={accounts}
                    path={path}
                  />
                )}
              />
              <Redirect
                to={accounts[0]?.id ? `${AppRoute.email}/inbox/${accounts[0].id}` : `${AppRoute.email}/settings`}
              />
            </Switch>
          </Grid>
        </EntityTypeProvider>
      </DndProvider>
      <ComposeNewEmailModalContainer />
    </>
  );
};
