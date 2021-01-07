import React from 'react';

import { useLocale } from 'hooks';
import { Box, Button, NavBreadcrumbs } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

export const Header = () => {
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <NavBreadcrumbs />
      <Button startIcon={<AddIcon color="inherit" />} color="primary" variant="contained">
        {formatMessage({ id: 'insights.create_new_dashboard' })}
      </Button>
    </Box>
  );
};
