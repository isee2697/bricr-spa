import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography } from 'ui/atoms';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { Header } from '../header/Header';

import { CrmBusinessDetailsDashboardProps } from './Dashboard.types';
import { MetaHeader } from './metaHeader/MetaHeader';
import { Boards } from './boards/Boards';

export const CrmBusinessDetailsDashboard = ({
  crm,
  onSidebarOpen,
  isSidebarVisible,
}: CrmBusinessDetailsDashboardProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/dashboard"
        title={formatMessage({ id: 'crm.details.dashboard.title' })}
      />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">
            {crm.firstName} {crm.lastName}
          </Typography>
        </Grid>
        <MetaHeader {...crm.meta} />
        <Boards />
      </Page>
    </>
  );
};
