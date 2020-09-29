import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { CrmRelationsDetailsProps } from './CrmRelationsDetails.type';
import { useStyles } from './CrmRelationsDetails.styles';
import { CrmRelationsDetailsSidebarMenu } from './crmRelationsDetailsSidebarMenu/CrmRelationsDetailsSidebarMenu';
import { CrmRelationsDetailsHeader } from './crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { CrmRelationsDetailsDashboard } from './crmRelationsDetailsDashboard/CrmRelationsDetailsDashboard';
import { CrmRelationsDetailsSummary } from './crmRelationsDetailsSummary/CrmRelationsDetailsSummary';
import { CrmRelationsDetailsTimeline } from './crmRelationsDetailsTimeline/CrmRelationsDetailsTimeline';
import { CrmRelationsDetailsCustomerJourneyContaienr } from './crmRelationsDetailsCustomerJourney/CrmRelationsDetailsCustomerJourneyContainer';

export const CrmRelationsDetails = ({ crm, breadcrumbs, path, entityType }: CrmRelationsDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0}>
        {breadcrumbs}
        <CrmRelationsDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <CrmRelationsDetailsHeader onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            {!!crm && (
              <Switch>
                <Route path={`${path}/dashboard`} render={() => <CrmRelationsDetailsDashboard crm={crm} />} />
                <Route path={`${path}/summary`} render={() => <CrmRelationsDetailsSummary />} />
                <Route path={`${path}/timeline`} render={() => <CrmRelationsDetailsTimeline crm={crm} />} />
                <Route
                  path={`${path}/customerJourney`}
                  render={() => <CrmRelationsDetailsCustomerJourneyContaienr crm={crm} />}
                />
                <Redirect to={{ pathname: `${path}/dashboard`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
