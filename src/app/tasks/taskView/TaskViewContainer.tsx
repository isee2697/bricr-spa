import React, { useEffect } from 'react';

import { Loader, Alert } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TasksViewMode } from '../Tasks.enum';
import { TasksSwimlane } from '../tasksSwimlane/TasksSwimlane';
import { TasksList } from '../tasksList/TasksList';
import {
  Task,
  useGetTasksLazyQuery,
  SortDirection,
  TaskStatus,
  useUpdateTaskMutation,
  GetTasksDocument,
  useGetTasksSummaryByStatusLazyQuery,
} from 'api/types';
import { TeamMemberItem } from '../Tasks.types';

import { TaskViewContainerProps } from './TaskViewContainer.types';

export const TaskViewContainer = ({
  tab,
  viewMode,
  search,
  selectedMembers = [],
  dateRange,
}: TaskViewContainerProps) => {
  const [getTasks, { data, loading }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [
    getTaskSummaryByStatus,
    { data: taskSummaryByStatusData, loading: taskSummaryByStatusLoading },
  ] = useGetTasksSummaryByStatusLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [updateTask, { loading: updateTaskLoading, error: updateTaskError }] = useUpdateTaskMutation();
  const { formatMessage } = useLocale();

  useEffect(() => {
    getTasks({
      variables: {
        sortColumn: viewMode === TasksViewMode.Swimlane ? 'title' : 'title',
        sortDirection: SortDirection.Desc,
        search,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
    getTaskSummaryByStatus({
      variables: {
        search,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
  }, [viewMode, search, selectedMembers, dateRange, getTasks, getTaskSummaryByStatus]);

  if (loading || taskSummaryByStatusLoading || updateTaskLoading) {
    return <Loader />;
  }

  const tasks: Task[] = (data ? data.getTasks?.items || [] : []).map(item => ({
    ...item,
    assigneeDetail: {
      ...(selectedMembers.find(member => member.id === item.assignee) || {}),
    },
  }));

  const tasksSummaryByStatus = taskSummaryByStatusData?.getTasksSummaryByStatus || {
    todo: 0,
    inProgress: 0,
    blocked: 0,
    done: 0,
  };

  const handleUpdateTaskStatus = async (taskId: string, status: TaskStatus) => {
    const { data: result, errors } = await updateTask({
      variables: {
        input: {
          id: taskId,
          status,
        },
      },
      refetchQueries: [
        {
          query: GetTasksDocument,
          variables: {
            sortColumn: viewMode === TasksViewMode.Swimlane ? 'title' : 'title',
            sortDirection: SortDirection.Desc,
            search,
            assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
            ...dateRange,
          },
        },
      ],
    });

    if (!result || !result.updateTask || errors) {
      throw new Error();
    }
  };

  return (
    <>
      {!!updateTaskError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      {viewMode === TasksViewMode.Swimlane && (
        <TasksSwimlane
          tab={tab}
          tasks={tasks}
          onUpdateTaskStatus={handleUpdateTaskStatus}
          tasksSummaryByStatus={tasksSummaryByStatus}
        />
      )}
      {viewMode === TasksViewMode.List && <TasksList tasks={tasks} />}
    </>
  );
};
