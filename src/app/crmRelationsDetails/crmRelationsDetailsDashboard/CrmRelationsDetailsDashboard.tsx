import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography } from 'ui/atoms';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { CrmRelationsDetailsDashboardProps } from './CrmRelationsDetailsDashboard.types';
import { CrmRelationsDetailsDashboardMetaHeader } from './crmRelationsDetailsDashboardMetaHeader/CrmRelationsDetailsDashboardMetaHeader';
import { CrmRelationsDetailsDashboardBoards } from './crmRelationsDetailsDashboardBoards/CrmRelationsDetailsDashboardBoards';

export const CrmRelationsDetailsDashboard = ({
  crm,
  onSidebarOpen,
  isSidebarVisible,
}: CrmRelationsDetailsDashboardProps) => {
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
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">
            {crm.firstName} {crm.lastName}
          </Typography>
        </Grid>
        <CrmRelationsDetailsDashboardMetaHeader {...crm.meta} />
        <CrmRelationsDetailsDashboardBoards />
      </Page>
    </>
  );
};
