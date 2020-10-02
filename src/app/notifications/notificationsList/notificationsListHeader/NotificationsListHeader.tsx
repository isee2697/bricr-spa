import React, { useState } from 'react';
import clsx from 'classnames';
import { ReferenceObject } from 'popper.js';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Checkbox, IconButton, Menu, MenuItem, Select, Typography } from 'ui/atoms';
import { ArchiveIcon, DeleteIcon, ManageIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './NotificationsListHeader.styles';
import { NotificationsListHeaderProps } from './NotificationsListHeader.types';

export const NotificationsListHeader = ({
  sortOptions,
  checkedKeys,
  checkAllStatus,
  onCheckAll,
  onSort,
  onArchive,
  onDelete,
  onBulk,
  disabled,
}: NotificationsListHeaderProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [sorting, setSorting] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');
  const [anchorEl, setAnchorEl] = React.useState<ReferenceObject | null>(null);

  const handleClickBulkActionsButton = (event: React.MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleCloseBulkActionsMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className={clsx(classes.root, checkedKeys.length && 'selected')}>
      <Box display="flex" alignItems="center">
        <Typography
          variant="h5"
          className={clsx(classes.selectAll, disabled && classes.disabled)}
          onClick={() => !disabled && onCheckAll()}
        >
          <Checkbox
            color="primary"
            className={clsx(classes.checkbox, 'list-select-all')}
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
      {!checkedKeys.length && (
        <Box display="flex">
          <Box mr={1}>
            <Select
              className={clsx(classes.sorting, 'sort-select')}
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
          <IconButton size="small" variant="roundedContained" onClick={handleClickBulkActionsButton}>
            <ManageIcon />
          </IconButton>
        </Box>
      )}
      {!!checkedKeys.length && (
        <>
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
              <IconButton
                className={classes.icon}
                variant="rounded"
                size="small"
                onClick={handleClickBulkActionsButton}
              >
                <MenuIcon color="inherit" />
              </IconButton>
            )}
          </Box>
        </>
      )}
      <Menu
        id="notifications-list-bulk-action-meu"
        open={open}
        onClose={handleCloseBulkActionsMenu}
        anchorEl={anchorEl}
        arrow={true}
      >
        <div className={classes.menu} onClick={() => handleCloseBulkActionsMenu()}>
          <MenuItem onClick={() => {}}>{formatMessage({ id: 'notifications.read_all' })}</MenuItem>
          <MenuItem onClick={() => {}}>{formatMessage({ id: 'notifications.delete_all' })}</MenuItem>
        </div>
      </Menu>
    </Box>
  );
};
