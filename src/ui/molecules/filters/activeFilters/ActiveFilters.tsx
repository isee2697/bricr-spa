import React from 'react';
import { AnyObject } from 'final-form';
import Chip from '@material-ui/core/Chip';

import { Box } from 'ui/atoms';
import { ListPimsFilters } from 'api/types';

import { useStyles } from './ActiveFilters.styles';

type Filter = {
  key: string;
  filter: string;
};

type ChipProps = {
  index: string;
  filter: Filter | string;
  onDelete: (key: string, filter: Filter | string) => void;
};

type ActiveFiltersProps = {
  activeFilters: ListPimsFilters;
  onDelete: (filters: ListPimsFilters) => void;
};

const ChipComponent = ({ index, filter, onDelete }: ChipProps) => {
  const classes = useStyles();

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

  const generateFilters = () => {
    const filters: React.ReactNode[] = [];

    if (activeFilters && Object.values(activeFilters).length > 0) {
      for (const key in activeFilters) {
        const value = activeFilters[key];

        if (typeof value !== 'object') {
          filters.push(<ChipComponent key={key} index={key} filter={value} onDelete={handleDelete} />);
        } else {
          value.forEach((filter: Filter) =>
            filters.push(<ChipComponent key={key} index={key} filter={filter} onDelete={handleDelete} />),
          );
        }
      }
    }

    return filters;
  };

  return (
    <Box className={classes.root} p={2}>
      {generateFilters()}
    </Box>
  );
};
