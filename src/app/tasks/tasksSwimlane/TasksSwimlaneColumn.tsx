import React from 'react';
import clsx from 'classnames';
import { useDrop } from 'react-dnd';

import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { TasksStatusBadge } from '../tasksStatusBadge/TasksStatusBadge';

import { TasksSwimlaneColumnProps, TasksSwimlaneItemDragObject } from './TasksSwimlaneColumn.types';
import { useStyles } from './TasksSwimlaneColumn.styles';
import { TasksSwimlaneItem } from './TasksSwimlaneItem';
import { TasksSwimlanePlaceholder } from './TasksSwimlanePlaceholder';
import { GroupTaskItem } from './TasksSwimlane.types';

export const TasksSwimlaneColumn = ({
  tab,
  columnType,
  tasks,
  count,
  onUpdateTaskStatus,
}: TasksSwimlaneColumnProps) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'UpdateTaskStatus',
    drop: (item: TasksSwimlaneItemDragObject) => {
      onUpdateTaskStatus(item.id, columnType);
    },
    canDrop: () => true,
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={clsx(classes.root, isOver && 'draggingOver')}>
      <Box>
        <Grid container justify="space-between">
          <Grid item className={classes.columnName}>
            <TasksStatusBadge status={columnType} />
          </Grid>
          <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
            <Typography variant="h6" className={classes.count}>
              {count}
            </Typography>
            <IconButton className={classes.noPadding}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.tasksSwimlaneItemsContainer}>
        {tasks.map((task: GroupTaskItem) => (
          <TasksSwimlaneItem tab={tab} key={task.id} task={task} />
        ))}
      </Box>
      <TasksSwimlanePlaceholder />
    </div>
  );
};
