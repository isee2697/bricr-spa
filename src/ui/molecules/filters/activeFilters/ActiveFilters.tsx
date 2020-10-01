import React from 'react';
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
    const data = Object.entries(activeFilters).find(item => item[0] === key);

    if (data) {
      const [name, value] = data;

      if (Array.isArray(value)) {
        activeFilters = Object.assign(activeFilters, {
          [name]: value.filter((item: string) => filter.toString() !== item.toString()),
        });
      } else {
        activeFilters = JSON.parse(JSON.stringify(Object.assign(activeFilters, { [name]: undefined })));
      }

      if (onDelete) {
        onDelete(activeFilters);
      }
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
