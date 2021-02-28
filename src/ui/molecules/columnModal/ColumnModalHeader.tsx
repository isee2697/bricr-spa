import { useDrag, useDrop } from 'react-dnd';
import clsx from 'classnames';
import React from 'react';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';

import { useHeaderStyles } from './ColumnModal.styles';
import { HeaderColumnItemDragObject, HeaderColumnItemProps } from './ColumnModal.types';

export const HeaderColumnItem = ({ item, isDisabled, changeOrder }: HeaderColumnItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useHeaderStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'TableHeaderFilter',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'TableHeaderFilter',
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
            <Typography variant="h5">{formatMessage({ id: `column.table.header_filter.column.${item}` })}</Typography>
          </Box>
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
