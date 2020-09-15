import React from 'react';

import { TaskDetailsBoardsLogContainerProps } from './TaskDetailsBoardsLogContainer.types';
import { TaskDetailsBoardsLog } from './TaskDetailsBoardsLog';

export const TaskDetailsBoardsLogContainer = ({ task }: TaskDetailsBoardsLogContainerProps) => {
  return <TaskDetailsBoardsLog task={task} />;
};
