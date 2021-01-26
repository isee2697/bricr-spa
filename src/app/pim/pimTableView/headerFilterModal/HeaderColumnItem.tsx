import React from 'react';
import clsx from 'classnames';
import { useDrag, useDrop } from 'react-dnd';

import { Box, Checkbox, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './HeaderColumnItem.styles';
import { HeaderColumnItemDragObject, HeaderColumnItemProps } from './HeaderFilterModal.types';

export const HeaderColumnItem = ({ item, isShow, setShow, isDisabled, changeOrder }: HeaderColumnItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'PimTableHeaderFilter',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'PimTableHeaderFilter',
    drop: (dropObject: HeaderColumnItemDragObject) => {
      changeOrder(item, dropObject.item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drag} className={classes.wrapper}>
      <div ref={drop}>
        <Box
          display="flex"
          alignItems="center"
          className={clsx(classes.root, isDragging && 'dragging', isDisabled && 'disabled')}
        >
          <Checkbox checked={isShow} disabled={isDisabled} onClick={() => setShow(!isShow)} color="primary" />
          <Box ml={2}>
            <Typography variant="h5" color={isDisabled ? 'textSecondary' : 'primary'}>
              {formatMessage({ id: `pim.table.header_filter.column.${item}` })}
            </Typography>
          </Box>
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
