import React from 'react';
import { TasksTab } from '../Tasks.types';

import { TasksDateSectionProps } from './TasksDateSection.types';
import { TasksDateSectionNextWeek } from './TasksDateSectionNextWeek';
import { TasksDateSectionFuture } from './TasksDateSectionFuture';

export const TasksDateSection = ({ tab, handleSetDateRange }: TasksDateSectionProps) => {
  switch (tab) {
    case TasksTab.NextWeek:
      return <TasksDateSectionNextWeek onSelectDate={handleSetDateRange} />;

    case TasksTab.Future:
      return <TasksDateSectionFuture onSelectDate={handleSetDateRange} />;

    default:
      return null;
  }
};
