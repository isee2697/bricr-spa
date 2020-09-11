import React from "react";

import { TasksDateSectionProps } from "./TasksDateSection.types";
import { TasksDateSectionNextWeek } from "./TasksDateSectionNextWeek";
import { TasksDateSectionFuture } from "./TasksDateSectionFuture";

export const TasksDateSection = ({
  tab,
  handleSetDateRange,
}: TasksDateSectionProps) => {
  switch (tab) {
    case 1:
      return <TasksDateSectionNextWeek onSelectDate={handleSetDateRange} />;

    case 2:
      return <TasksDateSectionFuture onSelectDate={handleSetDateRange} />;

    default:
      return null;
  }
};
