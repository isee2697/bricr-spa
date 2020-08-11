import React from 'react';
import classNames from 'classnames';

import { Typography, IconButton, Box } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { DndItemProps, DndItemState } from '../WorkflowItems.types';

import { useStyles } from './ActionItem.styles';

export const ActionItem = ({ icon, title, state, onAction }: DndItemProps) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.item,
        DndItemState.DRAGGED === state && 'background',
        DndItemState.DROPPED === state && 'dropped',
      )}
    >
      <div className={classNames(classes.itemIcon, DndItemState.DROPPED === state && 'dropped')}>{icon}</div>
      <Box flex={1} display="flex">
        <Typography variant="h5">{title}</Typography>
      </Box>
      {state === DndItemState.DROPPED && (
        <IconButton onClick={onAction}>
          <MenuIcon />
        </IconButton>
      )}
    </div>
  );
};
