import React from 'react';
import { useDrop } from 'react-dnd';

import { Box } from 'ui/atoms';

import { useStyles } from './TasksSwimlanePlaceholder.styles';

export const TasksSwimlanePlaceholder = () => {
  const classes = useStyles();
  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateTaskStatus',
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
    </div>
  );
};
