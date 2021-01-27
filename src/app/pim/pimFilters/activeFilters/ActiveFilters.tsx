import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Chip } from 'ui/atoms';
import { CloseIcon } from 'ui/atoms/icons';

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
  className?: string;
};

const ChipComponent = ({ index, filter, onDelete }: ChipProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Chip
        variant="outlined"
        key={index}
        deleteIcon={<CloseIcon />}
        label={
          <>
            <span className={classes.dimmed}>{formatMessage({ id: 'filters.' + index + '.title' })}</span>{' '}
            <strong className={classes.filter}>{filter}</strong>
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
  className,
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
        onDelete({ ...activeFilters });
      }
    }
  };

  const generateFilters = () => {
    const filters: React.ReactNode[] = [];

    if (activeFilters && Object.values(activeFilters).length > 0) {
      Object.entries(activeFilters).forEach(filter => {
        const [name, value] = filter;

        if (Array.isArray(value)) {
          value.forEach((filter, index) =>
            filters.push(
              <ChipComponent
                key={index}
                index={name}
                filter={(filter && filter.toString()) ?? ''}
                onDelete={handleDelete}
              />,
            ),
          );
        } else if (typeof value === 'object') {
          for (const key in value) {
            if (value[key] instanceof DateTime) {
              filters.push(
                <ChipComponent
                  key={name}
                  index={`${name}.${key}`}
                  filter={value[key].toLocaleString(DateTime.DATE_SHORT)}
                  onDelete={handleDelete}
                />,
              );
            }
          }
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
    <Box
      className={`${classes.root} ${
        activeFilters && Object.values(activeFilters).length > 0 ? classes.hasfilters : ''
      } ${className}`}
      p={2}
    >
      {generateFilters()}
    </Box>
  );
};
