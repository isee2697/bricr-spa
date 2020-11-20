import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { CrmRelationsDetailsHeader } from '../../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { DashboardProps } from './Dashboard.types';
import { useStyles } from './Dashboard.styles';
import { Meta } from './meta/Meta';
import { InvoicesBoard } from './boards/invoices/Invoices';
import { QuotationsBoard } from './boards/quotations/Quotations';
import { ActionsAndAcquisition } from './boards/actionsAndAcquisition/ActionsAndAcquisition';

export const Dashboard = ({ isSidebarVisible, onSidebarOpen }: DashboardProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.details.sales.title' })} />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <Typography variant="h5" className={classes.fontWeightMedium}>
              {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
            </Typography>
            <Box ml={3} />
            <IconButton size="small" variant="rounded">
              <ManageIcon />
            </IconButton>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item container>
          <Typography variant="h1" className={classes.fontWeightBold}>
            {formatMessage({ id: 'crm.details.sales.dashboard.title' })}
          </Typography>
          <Box width="100%" mt={2.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <InvoicesBoard />
                <Box mt={3} />
                <QuotationsBoard />
              </Grid>
              <Grid item xs={12} md={5}>
                <ActionsAndAcquisition />
              </Grid>
            </Grid>
          </Box>
          <Box width="100%" mt={2.5}>
            <Meta />
          </Box>
        </Grid>
      </Page>
    </>
  );
};
