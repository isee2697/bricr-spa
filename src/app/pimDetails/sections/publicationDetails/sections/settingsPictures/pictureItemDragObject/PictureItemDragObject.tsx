import React from 'react';
import clsx from 'classnames';
import { useDragLayer } from 'react-dnd';

import { Avatar, Box } from 'ui/atoms';
import { useStyles } from '../SettingsPictures.styles';

export const PictureItemDragObject = () => {
  const classes = useStyles();

  const { item, itemType, currentOffset, isDragging } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset || !item || itemType !== 'SettingsPictures') {
    return null;
  }

  const { x, y } = currentOffset;

  return (
    <Box className={classes.itemObjectWrapper}>
      <div className={classes.item} style={{ transform: `translate(${x}px, ${y}px)` }}>
        <Avatar variant="rounded" src={item.item.image} className={clsx(classes.avatar)} />
      </div>
    </Box>
  );
};
