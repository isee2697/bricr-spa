import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import clsx from 'classnames';

import { Avatar, Badge, Box } from 'ui/atoms';
import { useStyles } from '../SettingsFloorPlans.styles';
import { CloseIcon } from 'ui/atoms/icons';
import { PlanItemPlaceholderDragObject } from '../planItemPlaceholder/PlanItemPlaceholder.types';

import { PlanItemProps } from './PlanItem.types';

export const PlanItem = ({ isAdded = false, onRemoveFromList, onChangeOrder, ...item }: PlanItemProps) => {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'SettingsFloorPlan',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'SettingsFloorPlan',
    drop: (dropObject: PlanItemPlaceholderDragObject) => {
      if (!!onChangeOrder) {
        onChangeOrder(dropObject.item, item);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drag}>
      <Box display="flex">
        {!isDragging && (
          <div ref={drop} className={classes.planItem}>
            <Avatar variant="rounded" src={item.image} className={clsx(classes.avatar, !isAdded && 'pointerCursor')} />
            {isAdded && !!onRemoveFromList && (
              <Badge
                className={clsx(classes.badge, 'badge', isDragging && 'hide')}
                onClick={() => onRemoveFromList(item)}
                badgeContent={<CloseIcon className={classes.badgeIcon} />}
                color="error"
                data-testid="remove-image"
              />
            )}
          </div>
        )}
        {isOver && <Box className={classes.avatarPlaceholder} ml={2} />}
      </Box>
    </div>
  );
};
