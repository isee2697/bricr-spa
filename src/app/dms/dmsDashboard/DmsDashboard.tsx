import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography } from 'ui/atoms';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';

import { DmsDashboardMetaHeader } from './dmsDashboardMetaHeader/DmsDashboardMetaHeader';
import { DmsDashboardBoards } from './dmsDashboardBoards/DmsDashboardBoards';
import { DmsDashboardProps } from './DmsDashboard.types';

export const DmsDashboard = ({ dms }: DmsDashboardProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/dashboard"
        title={formatMessage({ id: 'dms.dashboard.title' })}
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Typography variant="h1">{formatMessage({ id: 'dms.title' })}</Typography>
        </Grid>
        <DmsDashboardMetaHeader meta={dms.total} />
        <DmsDashboardBoards />
      </Page>
    </>
  );
};
