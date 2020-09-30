import React from 'react';
import { AnyObject } from 'final-form';
import Chip from '@material-ui/core/Chip';

import { Box } from 'ui/atoms';

import { useStyles } from './ActiveFilters.styles';

type Filter = {
  key: string;
  filter: string;
};

type ChipProps = {
  index: string;
  filter: Filter | string;
  classes: AnyObject;
  onDelete: (key: string, filter: Filter | string) => void;
};

const ChipComponent = ({ index, filter, classes, onDelete }: ChipProps) => {
  return (
    <>
      <Chip
        variant="outlined"
        key={index}
        label={
          <>
            <span className={classes.dimmed}>{index}</span> <strong>{filter}</strong>
          </>
        }
        onDelete={() => onDelete(index, filter)}
      />
    </>
  );
};

export const ActiveFilters = ({ activeFilters, onDelete }: AnyObject) => {
  const classes = useStyles();
  const filters: React.ReactNode[] = [];

  const handleDelete = (key: string, filter: Filter | string) => {
    const newFilters = { ...activeFilters };

    if (typeof newFilters[key] === 'object' && newFilters[key].length > 0) {
      newFilters[key] = newFilters[key].filter((item: Filter) => filter !== item);
    } else {
      delete newFilters[key];
    }

    if (onDelete) {
      onDelete(newFilters);
    }
  };

  if (activeFilters && Object.values(activeFilters).length > 0) {
    for (const key in activeFilters) {
      const value = activeFilters[key];

      if (typeof value !== 'object') {
        filters.push(<ChipComponent key={key} index={key} classes={classes} filter={value} onDelete={handleDelete} />);
      } else {
        value.forEach((filter: Filter) =>
          filters.push(
            <ChipComponent key={key} index={key} classes={classes} filter={filter} onDelete={handleDelete} />,
          ),
        );
      }
    }
  }

  return (
    <Box className={classes.root} p={2}>
      {filters}
    </Box>
  );
};
