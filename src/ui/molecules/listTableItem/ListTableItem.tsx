import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { Box } from 'ui/atoms';
import { ListTableItemProps } from 'ui/molecules/listTableItem/ListTableItem.types';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';

import { useStyles } from './ListTableItem.styles';

export const ListTableItem: <T>(p: ListTableItemProps<T>) => ReactElement<ListTableItemProps<T>> = ({
  headerCells,
  isHeader,
  renderCell,
  className,
  item,
  onSort,
  sortKey,
  sortDirection,
}) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const width = `${100 / (headerCells.length + 1)}%`;

  return (
    <Box className={className} display="flex" alignItems="center" pt={1} pb={1} pr={2}>
      <Box flexGrow={1} display="flex">
        {headerCells.map((cell, index) => {
          const label = isHeader ? cell.label : renderCell?.(cell.field, item);

          return (
            <Box
              alignItems="center"
              display="flex"
              className={classnames(
                isHeader ? classes.header : undefined,
                cell.field === sortKey ? classes.active : undefined,
              )}
              minWidth={width}
              width={width}
              key={index}
              onClick={() => onSort && onSort(cell.field)}
            >
              {label && typeof label === 'string' ? formatMessage({ id: label, defaultMessage: label }) : label}
              {!!onSort &&
                cell.sortable &&
                cell.field === sortKey &&
                (sortDirection === 'down' ? <ArrowUpIcon /> : <ArrowDownIcon />)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
