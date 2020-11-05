import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { EmailProps } from './Email.types';
import { EmailSidebarMenu } from './emailSidebarMenu/EmailSidebarMenu';
import { useStyles } from './Email.styles';
import { EmailInboxContainer } from './inbox/InboxContainer';

export const Email = ({ path, entityType }: EmailProps) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const classes = useStyles();
  const { formatMessage } = useLocale();

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
          <NavBreadcrumb title={formatMessage({ id: 'header.links.email' })} to={AppRoute.email} />
          <EmailSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
          <Box flex={1}>
            <Grid container className={classes.content}>
              <Switch>
                <Route
                  path={`${path}/inbox`}
                  render={() => (
                    <EmailInboxContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                  )}
                />
                <Route path={`${path}/pinned`} render={() => <></>} />
                <Redirect to={{ pathname: `${path}/inbox` }} />
              </Switch>
            </Grid>
          </Box>
        </Grid>
      </EntityTypeProvider>
    </DndProvider>
  );
};
