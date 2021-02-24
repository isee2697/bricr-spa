import React from 'react';
import clsx from 'classnames';
import { useDrag, useDrop } from 'react-dnd';

import { Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './HeaderColumnItem.styles';
import { HeaderColumnItemDragObject, HeaderColumnItemProps } from './HeaderFilterModal.types';

export const HeaderColumnItem = ({ item, isDisabled, changeOrder }: HeaderColumnItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'CrmTableHeaderFilter',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'CrmTableHeaderFilter',
    drop: (dropObject: HeaderColumnItemDragObject) => {
      changeOrder(item, dropObject.item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={clsx(classes.wrapper, isDragging && 'dragging')}>
      <div ref={drag}>
        <Box
          display="flex"
          alignItems="center"
          className={clsx(classes.root, isDragging && 'dragging', isDisabled && 'disabled')}
        >
          <Box ml={2}>
            <Typography variant="h5">{formatMessage({ id: `crm.table.header_filter.column.${item}` })}</Typography>
          </Box>
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
