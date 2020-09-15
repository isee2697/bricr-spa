import React from 'react';

import { TaskDetailsBoardsDescriptionContainerProps } from './TaskDetailsBoardsDescriptionContainer.types';
import { TaskDetailsBoardsDescription } from './TaskDetailsBoardsDescription';

export const TaskDetailsBoardsDescriptionContainer = ({ task }: TaskDetailsBoardsDescriptionContainerProps) => {
  return <TaskDetailsBoardsDescription task={task} />;
};
