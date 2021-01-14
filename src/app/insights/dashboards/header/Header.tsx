import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, Button, NavBreadcrumbs } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

export const DashboardsHeader = () => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <NavBreadcrumbs />
      <Button
        startIcon={<AddIcon color="inherit" />}
        color="primary"
        variant="contained"
        onClick={() => open('create-new-dashboard')}
      >
        {formatMessage({ id: 'insights.create_new_dashboard' })}
      </Button>
    </Box>
  );
};
