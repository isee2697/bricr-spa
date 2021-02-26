import React, { useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid } from 'ui/atoms';
import { useLayout } from 'context/layout';

import { CrmProps } from './Crm.types';
import { useStyles } from './Crm.style';
import { CrmSidebarMenu } from './crmSidebarMenu/CrmSidebarMenu';
import { RelationsContainer } from './relations/RelationsContainer';
import { BusinessesContainer } from './businesses/BusinessesContainer';
import { MergeCrmRelationContainer } from './mergeRelation/MergeCrmRelationContainer';

export const Crm = ({ path, status, onStatusChange }: CrmProps) => {
  const classes = useStyles();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();

  const handleSidebarOpen = useCallback(() => {
    setSidebarMenuVisible(true);
  }, [setSidebarMenuVisible]);

  return (
    <Grid container>
      <CrmSidebarMenu onHide={() => setSidebarMenuVisible(false)} isVisible={isSidebarMenuVisible} />
      <Grid
        item
        xs={isSidebarMenuVisible ? false : 12}
        md={isSidebarMenuVisible ? 9 : 12}
        lg={isSidebarMenuVisible ? 10 : 12}
        className={classes.content}
      >
        <Grid container spacing={3} className={classes.content}>
          <Switch>
            <Route
              path={`${path}/merge/:id`}
              render={() => (
                <MergeCrmRelationContainer isSidebarVisible={isSidebarMenuVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${path}/relations`}
              render={() => <RelationsContainer onStatusChange={onStatusChange} status={status} />}
            />
            <Route
              path={`${path}/businesses`}
              render={() => (
                <BusinessesContainer
                  isSidebarVisible={isSidebarMenuVisible}
                  onSidebarOpen={handleSidebarOpen}
                  onStatusChange={onStatusChange}
                  status={status}
                />
              )}
            />
            <Redirect to={`${path}/relations`} />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
};
