import React from 'react';
import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Grid, IconButton, Placeholder, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { PimDashboardContainer } from 'app/pim/pimDashboard/PimDashboardContainer';
import { ManageIcon } from 'ui/atoms/icons';

import { MetaHeader } from './metaHeader/MetaHeader';
import { PimDetailsDashboardBoardsBrokers } from './brokers/Brokers';
import { PimDetailsDashboardBoardsAgenda } from './appointments/Appointments';
import { PimDetailsDashboardBoardsSalesBrokers } from './salesBrokers/SalesBrokers';
import { Biddings } from './biddings/Biddings';
import { Reminders } from './reminders/Reminders';

export const Dashboard = ({ title, isSidebarVisible, onSidebarOpen, isPurchased = false }: PimDetailsSectionProps) => {
  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Box display="flex" alignItems="center">
            <Typography variant="h5">{DateTime.local().toLocaleString(DateTime.DATETIME_FULL)}</Typography>
            <Box ml={3} />
            <IconButton size="small" variant="rounded">
              <ManageIcon />
            </IconButton>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
        </Grid>
        <Box width="100%" ml={-2} mr={-2}>
          {!isPurchased && <PimDashboardContainer />}
          {isPurchased && (
            <Box width="100%">
              <MetaHeader />
              <Box mt={3} />
              <Reminders />
              <Box mt={3} />
              <Biddings />
              <Box mt={3} />
              <PimDetailsDashboardBoardsSalesBrokers />
              <Box mt={3} />
              <PimDetailsDashboardBoardsBrokers />
              <Box mt={3} />
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <PimDetailsDashboardBoardsAgenda />
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Page>
    </>
  );
};
