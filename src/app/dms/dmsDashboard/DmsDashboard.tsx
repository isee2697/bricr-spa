import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';

import { DmsDashboardMetaHeader } from './dmsDashboardMetaHeader/DmsDashboardMetaHeader';
import { DmsDashboardBoards } from './dmsDashboardBoards/DmsDashboardBoards';
import { DmsDashboardProps } from './DmsDashboard.types';

export const DmsDashboard = ({ dms }: DmsDashboardProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page
        showHeader
        withoutHeader
        title={formatMessage({
          id: `dms.dashboard.title`,
        })}
        titleActions={[]}
      >
        <Grid xs={12} item>
          <Typography variant="h1">{formatMessage({ id: 'dms.title' })}</Typography>
        </Grid>
        <DmsDashboardMetaHeader meta={dms.total} />
        <DmsDashboardBoards />
      </Page>
    </>
  );
};
