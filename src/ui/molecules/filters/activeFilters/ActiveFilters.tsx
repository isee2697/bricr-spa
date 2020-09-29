import React from 'react';
import { AnyObject } from 'final-form';
import Chip from '@material-ui/core/Chip';

import { Box } from 'ui/atoms';

import { useStyles } from './ActiveFilters.styles';

export const ActiveFilters = ({ activeFilters }: AnyObject) => {
  const classes = useStyles();

  const filters: { key: string; filter: string }[] = [];

  if (Object.values(activeFilters).length > 0) {
    for (const key in activeFilters) {
      const value = activeFilters[key];

      filters.push(
        value.map((filter: { key: string; filter: string }) => (
          <>
            <Chip
              variant="outlined"
              key={key}
              label={
                <>
                  <span className={classes.dimmed}>{key}</span> <strong>{filter}</strong>
                </>
              }
              onDelete={() => {}}
            />
          </>
        )),
      );
    }
  }

  return (
    <Box className={classes.root} p={2}>
      {filters}
    </Box>
  );
};
