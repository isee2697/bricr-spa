import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Grid } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { EmailProps } from './Email.types';
import { EmailInboxContainer } from './inbox/InboxContainer';
import { EmailSettingsContainer } from './settings/SettingsContainer';
import { EmailDetailsContainer } from './details/DetailsContainer';

export const Email = ({ breadcrumbs, path, entityType }: EmailProps) => {
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
                />
              )}
            />
            <Route
              exact
              path={`${path}/:folder`}
              render={() => (
                <EmailInboxContainer
                  onSidebarOpen={handleSidebarOpen}
                  onSidebarClose={handleSidebarHide}
                  isSidebarVisible={isSidebarVisible}
                />
              )}
            />
            <Route path={`${path}/:folder/:emailId`} render={() => <EmailDetailsContainer />} />
            <Redirect to={{ pathname: `${path}/inbox` }} />
          </Switch>
        </Grid>
      </EntityTypeProvider>
    </DndProvider>
  );
};
