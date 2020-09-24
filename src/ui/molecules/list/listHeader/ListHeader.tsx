import React, { useState } from 'react';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { Box, Checkbox, IconButton, MenuItem, Select, Typography } from 'ui/atoms';
import { ArchiveIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { ListHeaderProps } from '../List.types';
import { useStyles } from '../List.styles';

export const ListHeader = ({
  sortOptions,
  checkedKeys,
  checkAllStatus,
  disabled,
  onCheckAll,
  onSort,
  onArchive,
  onDelete,
  onBulk,
}: ListHeaderProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [sorting, setSorting] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');

  return (
    <Box className={classNames(classes.header, 'list-header', checkedKeys.length && classes.headerSelected)}>
      <Box display="flex" alignItems="center">
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
          {!checkedKeys.length && formatMessage({ id: 'list.select_all' })}
        </Typography>
        {!!checkedKeys.length && (
          <Typography className={classes.itemsSelected}>
            <Box className={classes.badge} component="span">
              {checkedKeys.length}
            </Box>
            {formatMessage({ id: 'list.items_selected' }, { count: checkedKeys.length })}
          </Typography>
        )}
      </Box>
      {!checkedKeys.length && sortOptions.length > 0 && (
        <Box mr={2}>
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
        </Box>
      )}
      {!!checkedKeys.length && (
        <Box className={classes.iconPanel}>
          {onArchive && (
            <IconButton className={classes.icon} variant="rounded" size="small" onClick={onArchive}>
              <ArchiveIcon color="inherit" />
            </IconButton>
          )}
          {onDelete && (
            <IconButton className={classes.icon} variant="rounded" size="small" onClick={onDelete}>
              <DeleteIcon color="inherit" />
            </IconButton>
          )}
          {onBulk && (
            <IconButton className={classes.icon} variant="rounded" size="small" onClick={onBulk}>
              <MenuIcon color="inherit" />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
};
