import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, Button, IconButton, NavBreadcrumbs } from 'ui/atoms';
import { AddIcon, ExitIcon } from 'ui/atoms/icons';

import { ChartsHeaderProps } from './Header.types';

export const ChartsHeader = ({ count }: ChartsHeaderProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <NavBreadcrumbs />
      <Box display="flex">
        {count > 0 && (
          <>
            <Button color="primary" variant="outlined">
              {formatMessage({ id: 'insights.place_charts' }, { count })}
            </Button>
            <Box ml={3} />
          </>
        )}
        <Button
          startIcon={<AddIcon color="inherit" />}
          color="primary"
          variant="contained"
          onClick={() => open('create-new-chart')}
        >
          {formatMessage({ id: 'insights.create_new_chart' })}dashboard
        </Button>
        <Box ml={3} />
        <IconButton size="small" variant="rounded">
          <ExitIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
