import React from 'react';
import clsx from 'classnames';
import { useDrag, useDrop } from 'react-dnd';

import { Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { ExtrasColumnItemProps } from './Extras.types';
import { useStyles } from './ExtrasColumnItem.styles';

export const ExtrasColumnItem = ({ isEditable, item, noMargin }: ExtrasColumnItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'UpdateExtraItemStatus',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateExtraItemStatus',
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={isEditable ? drag : undefined}>
      <div ref={drop}>
        <Box
          display="flex"
          alignItems="center"
          className={clsx(classes.root, noMargin && 'no-margin', isDragging && 'dragging')}
        >
          <Typography variant="h5">{formatMessage({ id: `dictionaries.match_profile_extra.${item}` })}</Typography>
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
