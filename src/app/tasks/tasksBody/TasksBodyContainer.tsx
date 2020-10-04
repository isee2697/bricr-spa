import React, { useEffect } from 'react';

import { useGetTasksFullSummaryLazyQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { TasksBody } from './TasksBody';
import { TasksBodyContianerProps } from './TasksBody.types';

export const TasksBodyContainer = ({ members, selectedMembers }: TasksBodyContianerProps) => {
  const [
    getTasksFullSummary,
    { data: tasksFullSummaryData, loading: loadingTasksFullSummary },
  ] = useGetTasksFullSummaryLazyQuery({ fetchPolicy: 'network-only' });

  useEffect(() => {
    getTasksFullSummary({
      variables: {
        assignees: selectedMembers.map(member => member.id),
      },
    });
  }, [getTasksFullSummary, selectedMembers]);

  if (loadingTasksFullSummary || !tasksFullSummaryData?.getTasksFullSummary) {
    return <Loader />;
  }

  return (
    <TasksBody
      members={members}
      selectedMembers={selectedMembers}
      tasksFullSummary={tasksFullSummaryData.getTasksFullSummary}
    />
  );
};
