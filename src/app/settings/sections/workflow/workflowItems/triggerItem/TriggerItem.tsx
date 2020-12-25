import React, { useState } from 'react';
import classNames from 'classnames';

import { Typography, Badge, IconButton, Menu, MenuItem, Box, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon, DeleteIcon } from 'ui/atoms/icons';
import { DndItemState } from '../WorkflowItems.types';
import { useLocale } from 'hooks';
import { WorkflowItemStatus } from '../../Workflow.types';

import { TriggerItemProps } from './TriggerItem.types';
import { useStyles } from './TriggerItem.styles';

export const TriggerItem = ({
  icon,
  title,
  state,
  status,
  conditions,
  onShowConditions,
  onStatusChange,
  onDelete,
}: TriggerItemProps) => {
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
        status === WorkflowItemStatus.Inactive && classes.inactive,
        [DndItemState.DRAGGED, DndItemState.DROPPED].includes(state) && 'background',
        DndItemState.DROPPED === state && 'purple-border',
      )}
    >
      <div className={classNames(classes.itemIcon, status === WorkflowItemStatus.Inactive && classes.inactiveIcon)}>
        {icon}
      </div>
      <Typography variant="h5">{title}</Typography>
      {state === DndItemState.DROPPED && (
        <>
          <Box className={classes.badge}>
            <IconButton onClick={onMenuClick} className={classes.badgeButton} selected={Boolean(menuEl)}>
              <Badge badgeContent={Object.keys(conditions || {}).length || '-'} color="primary">
                <MenuIcon />
              </Badge>
            </IconButton>
          </Box>
          <Menu
            id="trigger-item-menu"
            open={Boolean(menuEl)}
            onClose={onMenuClose}
            anchorEl={menuEl}
            placement="bottom-start"
          >
            {onShowConditions && (
              <MenuItem
                className={classes.menuItem}
                onClick={(event: React.MouseEvent) => {
                  onShowConditions();
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
                  <Checkbox color="primary" checked={status === WorkflowItemStatus.Inactive} name="checkedA" />
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
