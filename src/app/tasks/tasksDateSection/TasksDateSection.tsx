import React from 'react';

import { TasksDateSectionProps } from './TasksDateSection.types';
import { TasksDateSectionNextWeek } from './TasksDateSectionNextWeek';
import { TasksDateSectionFuture } from './TasksDateSectionFuture';

export const TasksDateSection = ({ tab }: TasksDateSectionProps) => {
  switch (tab) {
    case 1:
      return <TasksDateSectionNextWeek />;

    case 2:
      return <TasksDateSectionFuture />;

    default:
      return null;
  }
};
