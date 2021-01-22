import React, { useState } from 'react';
import classNames from 'classnames';

import { Typography, IconButton, Menu, MenuItem, Box } from 'ui/atoms';
import { MenuIcon, DeleteIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DndItemState } from 'app/settings/sections/workflow/workflowItems';

import { TriggerItemProps } from './SourceItem.types';
import { useStyles } from './SourceItem.styles';

export const SourceItem = ({ icon, title, state, onDelete }: TriggerItemProps) => {
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
        [DndItemState.DRAGGED, DndItemState.DROPPED].includes(state) && 'background',
        DndItemState.DROPPED === state && 'purple-border',
      )}
    >
      <div className={classNames(classes.itemIcon)}>{icon}</div>
      <Typography variant="h5">{title}</Typography>
      {state === DndItemState.DROPPED && (
        <>
          <Box className={classes.badge}>
            <IconButton onClick={onMenuClick} className={classes.badgeButton} selected={Boolean(menuEl)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="trigger-item-menu"
            open={Boolean(menuEl)}
            onClose={onMenuClose}
            anchorEl={menuEl}
            placement="bottom-start"
          >
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
