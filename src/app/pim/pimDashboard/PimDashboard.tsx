import React from 'react';

import { DashboardStats } from 'app/dashboard/dashboardStats/DashboardStats';
import { Box, Typography } from 'ui/atoms';
import { PimDashBoardProps } from 'app/pim/pimDashboard/PimDashboard.types';
import { useLocale } from 'hooks';

export const PimDashboard = ({ data }: PimDashBoardProps) => {
  const { formatMessage } = useLocale();

  return (
    <Box m={3}>
      {data.map((type, key) => (
        <Box mb={-1.5} key={key}>
          <Box mb={1}>
            <Typography variant="h4">{formatMessage({ id: type.labelId })}</Typography>
          </Box>
          <DashboardStats {...type.stats} />
        </Box>
      ))}
    </Box>
  );
};
