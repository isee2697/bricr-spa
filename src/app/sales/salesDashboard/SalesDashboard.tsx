import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import { Box, Grid, NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { useLocale } from 'hooks';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { Page } from 'ui/templates';

import { SalesDashboardProps } from './SalesDashboard.types';
import { useStyles } from './SalesDashboard.styles';
import { SalesDashboardMetaHeader } from './salesDashboardMetaHeader/SalesDashboardMetaHeader';
import { SalesDashboardProgressBoard } from './salesDashboardProgressBoard/SalesDashboardProgressBoard';

export const SalesDashboard = ({ isSidebarVisible, onSidebarOpen }: SalesDashboardProps) => {
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/dashboard"
        title={formatMessage({ id: 'sales.dashboard.general' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box>
            <Typography variant="h5" className={classes.fontWeightMedium}>
              {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
            </Typography>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">{formatMessage({ id: 'sales.dashboard.title' })}</Typography>
          <Box mt={3} />
          <SalesDashboardMetaHeader />
          <Box mb={2.5} />
          <SalesDashboardProgressBoard />
        </Grid>
      </Page>
    </>
  );
};
