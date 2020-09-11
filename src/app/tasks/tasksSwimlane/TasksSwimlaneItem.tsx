import React from 'react';
import { DateTime } from 'luxon';
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
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskPriority, TaskLabel } from 'api/types';

import { TasksSwimlaneItemProps } from './TasksSwimlaneItem.types';
import { useStyles } from './TasksSwimlaneItem.styles';

export const TasksSwimlaneItem = ({ task }: TasksSwimlaneItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { id, title, assignee, deadline, label, priority } = task;
  const deadlineDate = DateTime.fromISO(deadline);
  const daysLeft = Math.round(deadlineDate.diffNow('days').days);

  return (
    <Draggable draggableId={id} index={0}>
      {(draggableProvided: DraggableProvided, draggableSnapshot: DraggableStateSnapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <Box className={classes.root}>
            <Typography variant="h6" className={classes.expireInfo}>
              {formatMessage({ id: 'tasks.days_left' }, { daysLeft })}
            </Typography>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Grid container>
              {/* TODO: Update this class name once provided info about this section */}
              <Grid item className={classes.taskLocked}>
                {label === TaskLabel.Business && (
                  <UserRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
                {label === TaskLabel.Private && (
                  <LockRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
                {label === TaskLabel.FollowUp && (
                  <FollowUpRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
                )}
              </Grid>
              <Grid item>
                {priority === TaskPriority.High && (
                  <PriorityHighIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
                )}
                {priority === TaskPriority.Medium && (
                  <PriorityMediumIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
                )}
                {priority === TaskPriority.Low && (
                  <PriorityLowIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="action" />
                )}
              </Grid>
              <Grid item className={classes.flexGrowOne} />
              <Grid item>
                <Typography variant="h5" className={classes.taskId}>
                  {id}
                </Typography>
              </Grid>
              <Grid item>
                <UserAvatar name={assignee} className={classes.avatar} />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
