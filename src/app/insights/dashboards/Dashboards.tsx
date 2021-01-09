import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardsHeader } from './header/Header';
import { CreateNewDashboardModalContainer } from './createNewDashboardModal/CreateNewDashboardModalContainer';
import { useStyles } from './Dashboard.styles';
import { AddNewChartModal } from './addNewChartModal/AddNewChartModal';

export const Dashboards = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { open } = useModalDispatch();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.insights.dashboards' })}
        to={`${AppRoute.insights}/dashboards`}
      />
      <DashboardsHeader />
      <Box mt={2} />
      <Box
        className={classes.card}
        onClick={() => {
          open('add_new_chart');
        }}
      />
      <CreateNewDashboardModalContainer />
      <AddNewChartModal />
    </>
  );
};
