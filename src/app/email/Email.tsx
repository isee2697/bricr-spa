import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { EmailProps } from './Email.types';
import { EmailSidebarMenu } from './emailSidebarMenu/EmailSidebarMenu';
import { useStyles } from './Email.styles';
import { EmailInbox } from './inbox/Inbox';

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
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0} wrap="nowrap">
        <NavBreadcrumb title={formatMessage({ id: 'header.links.email' })} to={AppRoute.email} />
        <EmailSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <Switch>
              <Route
                path={`${path}/inbox`}
                render={() => <EmailInbox onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />}
              />
              <Redirect to={{ pathname: `${path}/inbox` }} />
            </Switch>
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
