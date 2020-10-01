import React from 'react';
import { AnyObject } from 'final-form';
import Chip from '@material-ui/core/Chip';

import { Box } from 'ui/atoms';
import { ListPimsFilters } from 'api/types';
import { ListProps } from 'ui/molecules/list/List.types';

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

type ActiveFiltersProps<T> = {
  activeFilters: T;
  onDelete: (filters: T) => void;
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
export const ActiveFilters: <T>(p: ActiveFiltersProps<T>) => React.ReactElement<ActiveFiltersProps<T>> = ({
  activeFilters,
  onDelete,
}) => {
  const classes = useStyles();
  const handleDelete = (key: string, filter: Filter | string) => {
    const newFilters = { ...activeFilters };

    // if (typeof newFilters[key] === 'object' && newFilters[key].length > 0) {
    //   newFilters[key] = newFilters[key].filter((item: Filter) => filter !== item);
    // } else {
    //   delete newFilters[key];
    // }

    if (onDelete) {
      onDelete(newFilters);
    }
  };

  const generateFilters = () => {
    const filters: React.ReactNode[] = [];

    if (activeFilters && Object.values(activeFilters).length > 0) {
      Object.entries(activeFilters).forEach(filter => {
        const [name, value] = filter;

        if (Array.isArray(value)) {
          value.forEach(filter =>
            filters.push(
              <ChipComponent
                key={name}
                index={name}
                filter={(filter && filter.toString()) ?? ''}
                onDelete={handleDelete}
              />,
            ),
          );
        } else {
          filters.push(
            <ChipComponent
              key={name}
              index={name}
              filter={(value && value.toString()) || ''}
              onDelete={handleDelete}
            />,
          );
        }
      });
    }

    return filters;
  };

  return (
    <Box className={classes.root} p={2}>
      {generateFilters()}
    </Box>
  );
};
