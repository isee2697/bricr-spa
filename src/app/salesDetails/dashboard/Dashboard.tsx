import React from 'react';

import { Header } from '../header/Header';
import { Page } from 'ui/templates';
import { Grid, NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { DashboardProps } from './Dashboard.types';
import { MetaHeader } from './metaHeader/MetaHeader';
import { Boards } from './boards/Boards';

export const Dashboard = ({ isSidebarVisible, onSidebarOpen, crm }: DashboardProps) => {
  const { firstName, insertion, lastName, meta } = crm;
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.dashboard.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">
            {firstName} {insertion} {lastName}
          </Typography>
        </Grid>
        <MetaHeader {...meta} />
        <Boards />
      </Page>
    </>
  );
};
