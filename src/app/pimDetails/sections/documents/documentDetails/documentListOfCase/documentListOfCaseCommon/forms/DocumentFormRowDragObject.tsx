import React from 'react';
import { useDragLayer } from 'react-dnd';

import { TableRow, TableCell, Box } from 'ui/atoms';

import { useStyles } from './DocumentFormRowDragObject.styles';

export const DocumentFormRowDragObject = () => {
  const classes = useStyles();

  const { itemType, isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || itemType !== 'UpdatePimDocumentOrder' || !currentOffset) {
    return null;
  }

  const { x, y } = currentOffset;

  console.log('Debugging: ', x, y);

  return (
    <Box component="div" className={classes.wrapper}>
      <Box style={{ transform: `translate(${x}px, ${y}px)` }}>TTTT</Box>
    </Box>
  );
};
