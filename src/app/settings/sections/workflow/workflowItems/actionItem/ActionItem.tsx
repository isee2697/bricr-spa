import React, { useState } from 'react';
import classNames from 'classnames';

import { Typography, IconButton, Box, Menu, Badge, MenuItem, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon, DeleteIcon } from 'ui/atoms/icons';
import { DndItemState } from '../WorkflowItems.types';
import { useLocale } from 'hooks';

import { ActionItemProps } from './ActionItem.types';
import { useStyles } from './ActionItem.styles';

export const ActionItem = ({
  icon,
  title,
  state,
  status,
  settings,
  onShowSettings,
  onStatusChange,
  onDelete,
}: ActionItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <div
      className={classNames(
        classes.item,
        status === 'inactive' && classes.inactive,
        DndItemState.DRAGGED === state && 'background',
        DndItemState.DROPPED === state && 'dropped',
      )}
    >
      <div
        className={classNames(
          classes.itemIcon,
          status === 'inactive' && classes.inactiveIcon,
          DndItemState.DROPPED === state && 'dropped',
        )}
      >
        {icon}
      </div>
      <Box flex={1} display="flex">
        <Typography variant="h5">{title}</Typography>
      </Box>
      {state === DndItemState.DROPPED && (
        <>
          <Box className={classes.badge}>
            <Badge badgeContent={settings?.length || '-'} color="primary">
              <IconButton onClick={onMenuClick} className={classes.badgeButton} selected={Boolean(menuEl)}>
                <MenuIcon />
              </IconButton>
            </Badge>
          </Box>
          <Menu
            id="trigger-item-menu"
            open={Boolean(menuEl)}
            onClose={onMenuClose}
            anchorEl={menuEl}
            placement="bottom-start"
          >
            {onShowSettings && (
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  onShowSettings();
                  onMenuClose();
                }}
              >
                <EditIcon classes={{ root: classes.menuIcon }} />
                <Box ml={2}>
                  <Typography variant="subtitle1">
                    {formatMessage({
                      id: 'settings.workflow.conditions',
                    })}
                  </Typography>
                </Box>
              </MenuItem>
            )}
            {onStatusChange && (
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  onStatusChange();
                  onMenuClose();
                }}
              >
                <EditIcon classes={{ root: classes.menuIcon }} />
                <Box ml={2}>
                  <Typography variant="subtitle1">
                    {formatMessage({
                      id: 'settings.workflow_templates.inactive',
                    })}
                  </Typography>
                </Box>
                <Box ml="auto">
                  <Checkbox color="primary" checked={status === 'inactive'} name="checkedA" />
                </Box>
              </MenuItem>
            )}
            {onDelete && (
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  onDelete();
                  onMenuClose();
                }}
              >
                <DeleteIcon color="secondary" />
                <Box ml={2}>
                  <Typography variant="subtitle1" color="secondary">
                    {formatMessage({
                      id: 'settings.workflow.delete',
                    })}
                  </Typography>
                </Box>
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </div>
  );
};
