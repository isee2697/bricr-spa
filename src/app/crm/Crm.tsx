import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';

import { CrmProps } from './Crm.types';
import { useStyles } from './Crm.style';
import { CrmSidebarMenu } from './crmSidebarMenu/CrmSidebarMenu';
import { RelationsContainer } from './relations/RelationsContainer';
import { BusinessesContainer } from './businesses/BusinessesContainer';
import { MergeCrmRelationContainer } from './mergeRelation/MergeCrmRelationContainer';

export const Crm = ({ path, status, onStatusChange }: CrmProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <Grid container>
      <CrmSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
      <Box flex={1}>
        <Grid container spacing={3} className={classes.content}>
          <Switch>
            <Route
              path={`${path}/merge/:id`}
              render={() => (
                <MergeCrmRelationContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${path}/relations`}
              render={() => (
                <RelationsContainer
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                  onStatusChange={onStatusChange}
                  status={status}
                />
              )}
            />
            <Route
              path={`${path}/businesses`}
              render={() => (
                <BusinessesContainer
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                  onStatusChange={onStatusChange}
                  status={status}
                />
              )}
            />
            <Redirect to={`${path}/relations`} />
          </Switch>
        </Grid>
      </Box>
    </Grid>
  );
};
