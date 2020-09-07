import React from 'react';
import clsx from 'classnames';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

import { Box, Grid, IconButton } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { Task } from '../Tasks.types';
import { TasksStatusBadge } from '../tasksStatusBadge/TasksStatusBadge';

import { TasksSwimlaneColumnProps } from './TasksSwimlaneColumn.types';
import { useStyles } from './TasksSwimlaneColumn.styles';
import { TasksSwimlaneItem } from './TasksSwimlaneItem';

export const TasksSwimlaneColumn = ({ columnType, tasks }: TasksSwimlaneColumnProps) => {
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
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.tasksSwimlaneItemsContainer}>
            {tasks.map((task: Task, index: number) => (
              <TasksSwimlaneItem key={index} task={task} />
            ))}
          </Box>
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
