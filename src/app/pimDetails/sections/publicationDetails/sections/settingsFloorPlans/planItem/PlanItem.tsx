import React from 'react';
import { useDrag } from 'react-dnd';
import clsx from 'classnames';

import { Avatar, Badge } from 'ui/atoms';
import { useStyles } from '../SettingsFloorPlans.styles';
import { CloseIcon } from 'ui/atoms/icons';

import { PlanItemProps } from './PlanItem.types';

export const PlanItem = ({ isAdded = false, onRemoveFromList, ...item }: PlanItemProps) => {
  const classes = useStyles();

  const [, drag] = useDrag({
    item: {
      type: 'SettingsFloorPlan',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classes.planItem}>
      <Avatar variant="rounded" src={item.image} className={clsx(classes.avatar, !isAdded && 'pointerCursor')} />
      {isAdded && !!onRemoveFromList && (
        <Badge
          className={classes.badge}
          onClick={() => onRemoveFromList(item)}
          badgeContent={<CloseIcon className={classes.badgeIcon} />}
          color="error"
          data-testid="remove-image"
        />
      )}
    </div>
  );
};
