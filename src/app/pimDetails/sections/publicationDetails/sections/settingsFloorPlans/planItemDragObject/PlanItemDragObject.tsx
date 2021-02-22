import React from 'react';
import clsx from 'classnames';
import { useDragLayer } from 'react-dnd';

import { Avatar, Box } from 'ui/atoms';
import { useStyles } from '../SettingsFloorPlans.styles';

export const PlanItemDragObject = () => {
  const classes = useStyles();

  const { item, itemType, currentOffset, isDragging } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset || !item || itemType !== 'SettingsFloorPlan') {
    return null;
  }

  const { x, y } = currentOffset;

  return (
    <Box className={classes.itemObjectWrapper}>
      <div className={classes.planItem} style={{ transform: `translate(${x}px, ${y}px)` }}>
        <Avatar variant="rounded" src={item.item.image} className={clsx(classes.avatar)} />
      </div>
    </Box>
  );
};
