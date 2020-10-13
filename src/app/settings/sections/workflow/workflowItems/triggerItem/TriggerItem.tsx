import React from 'react';
import classNames from 'classnames';
import { Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { DndItemProps, DndItemState } from '../WorkflowItems.types';

import { useStyles } from './TriggerItem.styles';

export const TriggerItem = ({ icon, title, state, onAction }: DndItemProps) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.item,
        [DndItemState.DRAGGED, DndItemState.DROPPED].includes(state) && 'background',
        DndItemState.DROPPED === state && 'purple-border',
      )}
    >
      <div className={classes.itemIcon}>{icon}</div>
      <Typography variant="h5">{title}</Typography>
      {state === DndItemState.DROPPED && (
        <div className={classes.badge} onClick={onAction}>
          <MenuIcon />
        </div>
      )}
    </div>
  );
};
