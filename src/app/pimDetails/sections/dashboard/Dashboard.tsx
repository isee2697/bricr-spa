import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Grid, Placeholder, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { PimDashboardContainer } from 'app/pim/pimDashboard/PimDashboardContainer';

export const Dashboard = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={<></>}
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
        </Grid>
        <Box width="100%" ml={-2} mr={-2}>
          <PimDashboardContainer />
        </Box>
      </Page>
    </>
  );
};
