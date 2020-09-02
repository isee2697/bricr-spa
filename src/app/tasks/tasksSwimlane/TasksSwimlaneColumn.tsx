import React from 'react';
import clsx from 'classnames';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

import { Box, Grid, Emoji, IconButton } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { Task } from '../Tasks.types';
import { TaskStatus } from '../Tasks.enum';

import { TasksSwimlaneColumnProps } from './TasksSwimlaneColumn.types';
import { useStyles } from './TasksSwimlaneColumn.styles';
import { TasksSwimlaneItem } from './TasksSwimlaneItem';

export const TasksSwimlaneColumn = ({ columnType, tasks }: TasksSwimlaneColumnProps) => {
  const classes = useStyles();

  const getEmojiClass = () => {
    switch (columnType) {
      case TaskStatus.TODO:
        return clsx(classes.columnName, classes.backGrayLight, classes.gray);

      case TaskStatus.IN_PROGRESS:
        return clsx(classes.columnName, classes.backYellowLight, classes.yellow);

      case TaskStatus.BLOCKED:
        return clsx(classes.columnName, classes.backRedLight, classes.red);

      case TaskStatus.DONE:
        return clsx(classes.columnName, classes.backGreenLight, classes.green);

      default:
        return clsx(classes.columnName, classes.backGrayLight, classes.gray);
    }
  };

  const getEmojiContent = () => {
    switch (columnType) {
      case TaskStatus.TODO:
        return '⏱ To do';

      case TaskStatus.IN_PROGRESS:
        return '🔥 In progress';

      case TaskStatus.BLOCKED:
        return '⛔️ Blocked';

      case TaskStatus.DONE:
        return '✅ Done';

      default:
        return '⏱ To do';
    }
  };

  return (
    <Droppable droppableId={columnType}>
      {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
        <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className={classes.root}>
          <Box className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={getEmojiClass()}>
                <Emoji>{getEmojiContent()}</Emoji>
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
