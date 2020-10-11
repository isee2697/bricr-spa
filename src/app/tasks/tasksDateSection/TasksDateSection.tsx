import React from 'react';

import { TasksTab } from '../Tasks.types';

import { TasksDateSectionProps } from './TasksDateSection.types';
import { TasksDateSectionNextWeek } from './TasksDateSectionNextWeek';
import { TasksDateSectionFuture } from './TasksDateSectionFuture';

export const TasksDateSection = ({ tab, deadlines, handleSetDateRange }: TasksDateSectionProps) => {
  switch (tab) {
    case TasksTab.NextWeek:
      return <TasksDateSectionNextWeek deadlines={deadlines} onSelectDate={handleSetDateRange} />;

    case TasksTab.Future:
      return <TasksDateSectionFuture deadlines={deadlines} onSelectDate={handleSetDateRange} />;

    default:
      return null;
  }
};
