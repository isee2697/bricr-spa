import React from 'react';
import { AnyObject } from 'final-form';
import Chip from '@material-ui/core/Chip';

import { Box } from 'ui/atoms';

import { useStyles } from './ActiveFilters.styles';

type Filter = {
  key: string;
  filter: string;
};

export const ActiveFilters = ({ activeFilters, onDelete }: AnyObject) => {
  const classes = useStyles();
  const filters: Filter[] = [];

  const handleDelete = (filter: { [key: string]: Filter[] }) => {
    if (onDelete) {
      onDelete(filter);
    }
  };

  console.log({ activeFilters });

  if (Object.values(activeFilters).length > 0) {
    for (const key in activeFilters) {
      let value = activeFilters[key];

      if (typeof value !== 'object') {
        value = [value];
      }

      filters.push(
        value.map((filter: Filter) => (
          <>
            <Chip
              variant="outlined"
              key={key}
              label={
                <>
                  <span className={classes.dimmed}>{key}</span> <strong>{filter}</strong>
                </>
              }
              onDelete={() => handleDelete({ [key]: value.filter((item: Filter) => filter !== item) })}
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
