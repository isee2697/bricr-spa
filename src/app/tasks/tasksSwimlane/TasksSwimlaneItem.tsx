import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import { Box, Typography, Grid, UserAvatar } from 'ui/atoms';
import {
  UserRectangleIcon,
  PriorityHighIcon,
  PriorityMediumIcon,
  PriorityLowIcon,
  LockRectangleIcon,
  FollowUpRectangleIcon,
} from 'ui/atoms/icons';
import { TaskPriority, TaskLabel } from '../Tasks.enum';

import { TasksSwimlaneItemProps } from './TasksSwimlaneItem.types';
import { useStyles } from './TasksSwimlaneItem.styles';

export const TasksSwimlaneItem = ({ task }: TasksSwimlaneItemProps) => {
  const classes = useStyles();
  const { id, taskId, title, expireDate, label, priority, assignedTo } = task;
  const daysLeft = Math.round(expireDate.diffNow('days').days);

  return (
    <Draggable draggableId={taskId} index={id}>
      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <Box className={classes.root}>
            <Typography variant="h6" className={classes.expireInfo}>
              {daysLeft} days Left
            </Typography>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Grid container>
              {/* TODO: Update this class name once provided info about this section */}
              <Grid item className={classes.taskLocked}>
                {label === TaskLabel.BUSINESS && (
                  <UserRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
                {label === TaskLabel.PRIVATE && (
                  <LockRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
                {label === TaskLabel.FOLLOW_UP && (
                  <FollowUpRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
              </Grid>
              <Grid item>
                {priority === TaskPriority.HIGH && (
                  <PriorityHighIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
                )}
                {priority === TaskPriority.MEDIUM && (
                  <PriorityMediumIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
                )}
                {priority === TaskPriority.LOW && (
                  <PriorityLowIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="action" />
                )}
              </Grid>
              <Grid item className={classes.flexGrowOne} />
              <Grid item>
                <Typography variant="h5" className={classes.taskId}>
                  {taskId}
                </Typography>
              </Grid>
              <Grid item>
                <UserAvatar name={assignedTo.name} className={classes.avatar} />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
