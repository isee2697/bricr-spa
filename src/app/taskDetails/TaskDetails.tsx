import React from 'react';

import { Box } from 'ui/atoms';
import { TaskLabel, TaskPriority } from 'api/types';

import { TaskDetailsProps } from './TaskDetails.types';
import { useStyles } from './TaskDetails.style';
import { TaskDetailsHeader } from './taskDetailsHeader/TaskDetailsHeader';
import { TaskDetailsBoards } from './taskDetailsBoards/TaskDetailsBoards';
import { TaskDetailsFooter } from './taskDetailsFooter/TaskDetailsFooter';

export const TaskDetails = ({ taskData, breadcrumbs, user, members, ...props }: TaskDetailsProps) => {
  const classes = useStyles();

  const { onFollowUpTask } = props;

  const handleFollowUpTask = () => {
    onFollowUpTask({
      title: `Follow-up: ${taskData.title}`,
      assignee: taskData.assignee,
      label: taskData.label as TaskLabel,
      priority: taskData.priority as TaskPriority,
      startDate: taskData.startDate || undefined,
      deadline: taskData.deadline || undefined,
    });
  };

  return (
    <>
      {breadcrumbs}
      <Box className={classes.content}>
        <TaskDetailsHeader title={taskData.title || ''} onFollowUpTask={handleFollowUpTask} />
        <TaskDetailsBoards task={taskData} user={user} members={members} {...props} />
        <TaskDetailsFooter />
      </Box>
    </>
  );
};
