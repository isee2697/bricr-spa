import React from 'react';
import clsx from 'classnames';
import { useDragLayer } from 'react-dnd';

import { Box, Checkbox, Typography, Radio, IconButton } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { DocumentOutsideItemState } from '../../DocumentListOfCase.types';

import { useStyles } from './DocumentFormRowDragObject.styles';

export const DocumentFormRowDragObject = ({ isSidebarVisible }: { isSidebarVisible: boolean }) => {
  const classes = useStyles({ isSidebarVisible });

  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || itemType !== 'UpdatePimDocumentOrder' || !currentOffset || !initialOffset) {
    return null;
  }

  const { x, y } = currentOffset;
  const { itemState, isEvenRow = true } = item;

  return (
    <Box component="div" className={classes.wrapper}>
      <Box style={{ transform: `translate(${x}px, ${y}px)` }}>
        <Box display="flex" className={clsx(classes.tableRow, isEvenRow && 'even')}>
          <Box className={classes.checkboxCell}>
            <Checkbox color="primary" />
          </Box>
          <Box className={classes.fullWidthCell}>
            <Typography variant="h3" className={classes.mediumText}>
              {item.description}
            </Typography>
          </Box>
          <Box className={classes.narrowCell}>
            <Radio
              name={`outsideOption${item.id}`}
              color="primary"
              checked={itemState === DocumentOutsideItemState.StaysBehind}
            />
          </Box>
          <Box className={classes.narrowCell}>
            <Radio
              name={`outsideOption${item.id}`}
              color="primary"
              checked={itemState === DocumentOutsideItemState.GoesWith}
            />
          </Box>
          <Box className={classes.narrowCell}>
            <Radio
              name={`outsideOption${item.id}`}
              color="primary"
              checked={itemState === DocumentOutsideItemState.ForTakeover}
            />
          </Box>
          <Box className={classes.narrowCell}>
            <Radio
              name={`outsideOption${item.id}`}
              color="primary"
              checked={itemState === DocumentOutsideItemState.Nvt}
            />
          </Box>
          <Box className={classes.narrowCell}>
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
