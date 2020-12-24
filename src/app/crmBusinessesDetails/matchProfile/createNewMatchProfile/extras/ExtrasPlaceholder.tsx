import React from 'react';
import { useDrop } from 'react-dnd';
import clsx from 'classnames';

import { Box } from 'ui/atoms';

import { useStyles } from './ExtrasPlaceholder.styles';
import { ExtrasPlaceholderProps } from './Extras.types';

export const ExtrasPlaceholder = ({ isFirst }: ExtrasPlaceholderProps) => {
  const classes = useStyles();

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateExtraItemStatus',
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      {isDrag && isOver && <Box width="100%" className={clsx(classes.placeholder, isFirst && 'no-top-margin')} />}
    </div>
  );
};
