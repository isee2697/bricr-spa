import React from 'react';
import clsx from 'classnames';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { Task } from 'api/types';
import { TasksStatusBadge } from '../tasksStatusBadge/TasksStatusBadge';

import { TasksSwimlaneColumnProps } from './TasksSwimlaneColumn.types';
import { useStyles } from './TasksSwimlaneColumn.styles';
import { TasksSwimlaneItem } from './TasksSwimlaneItem';

export const TasksSwimlaneColumn = ({ tab, columnType, tasks, count }: TasksSwimlaneColumnProps) => {
  const classes = useStyles();

  return (
    <Droppable droppableId={columnType}>
      {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
        <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className={classes.root}>
          <Box className={classes.flexGrowOne}>
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
            {tasks.map((task: Task) => (
              <TasksSwimlaneItem tab={tab} key={task.id} task={task} />
            ))}
          </Box>
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
