import React, { useState } from 'react';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { Box, Checkbox, Typography, Button, Select, MenuItem } from 'ui/atoms';
import { ListHeaderProps } from '../List.types';
import { useStyles } from '../List.styles';

export const ListHeader = ({
  sortOptions,
  checkedKeys,
  checkAllStatus,
  disabled,
  onCheckAll,
  onBulk,
  onSort,
}: ListHeaderProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [sorting, setSorting] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');

  return (
    <Box className={classNames(classes.header, 'list-header')}>
      <Box>
        <Typography
          variant="h5"
          className={classNames(classes.selectAll, disabled && classes.disabled)}
          onClick={() => !disabled && onCheckAll()}
        >
          <Checkbox
            color="primary"
            className={classNames(classes.checkbox, 'list-select-all')}
            disabled={disabled}
            {...checkAllStatus}
          />
          {formatMessage({ id: 'list.select_all' })}
        </Typography>
        {!!checkedKeys.length && (
          <Button variant="outlined" color="primary" onClick={onBulk}>
            {formatMessage({ id: 'list.bulk_actions' })}
          </Button>
        )}
      </Box>
      {sortOptions.length > 0 && (
        <Select
          className={classNames(classes.sorting, 'sort-select')}
          variant="outlined"
          value={sorting}
          onChange={event => {
            const value = event?.target.value as string;
            setSorting(value);
            onSort(value);
          }}
        >
          {sortOptions.map(({ key, name }) => (
            <MenuItem key={key} value={key}>
              {name}
            </MenuItem>
          ))}
        </Select>
      )}
    </Box>
  );
};
