import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import { Loader } from 'ui/atoms';
import { TasksViewMode } from '../Tasks.enum';
import {
  Task,
  useGetTasksLazyQuery,
  SortDirection,
  TaskStatus,
  useUpdateTaskMutation,
  GetTasksDocument,
  useGetTasksSummaryByStatusLazyQuery,
  DateRange,
  GetTasksSummaryByStatusDocument,
} from 'api/types';
import { TasksTab, TeamMemberItem } from '../Tasks.types';
import { TasksContent } from '../tasksContent/TasksContent';

import { TaskViewContainerProps } from './TaskViewContainer.types';

export const TaskViewContainer = ({ tab, members, selectedMembers = [], onAddNewTask }: TaskViewContainerProps) => {
  const [searchKey, setSearchKey] = useState('');
  const [viewMode, setViewMode] = useState(TasksViewMode.Swimlane);
  const [dateRanges, setDateRanges] = useState<DateRange[]>([
    {
      to: DateTime.local().toISO(),
    },
  ]);

  const [getTasks, { data, loading }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [
    getTaskSummaryByStatus,
    { data: taskSummaryByStatusData, loading: taskSummaryByStatusLoading },
  ] = useGetTasksSummaryByStatusLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [updateTask] = useUpdateTaskMutation();

  useEffect(() => {
    if (dateRanges.length === 0) {
      return;
    }

    getTasks({
      variables: {
        sortColumn: viewMode === TasksViewMode.Swimlane ? 'title' : 'title',
        sortDirection: SortDirection.Desc,
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        deadlines: dateRanges,
      },
    });
    getTaskSummaryByStatus({
      variables: {
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        deadlines: dateRanges,
      },
    });
  }, [viewMode, searchKey, selectedMembers, getTasks, getTaskSummaryByStatus, dateRanges]);

  const tasks: Task[] = (data ? data.getTasks?.items || [] : []).map(item => ({
    ...item,
    assigneeDetail: {
      ...(selectedMembers.find(member => member.id === item.assignee) || {}),
    },
  }));

  useEffect(() => {
    switch (tab) {
      case TasksTab.Today:
        setDateRanges([
          {
            from: DateTime.local().toISO(),
            to: DateTime.local()
              .endOf('day')
              .toISO(),
          },
        ]);
        break;

      case TasksTab.NextWeek:
        setDateRanges([
          {
            from: DateTime.local()
              .plus({ days: 1 })
              .startOf('day')
              .toISO(),
            to: DateTime.local()
              .plus({ days: 7 })
              .endOf('day')
              .toISO(),
          },
        ]);
        break;

      case TasksTab.Future:
        setDateRanges([
          {
            from: DateTime.local()
              .plus({ days: 8 })
              .startOf('day')
              .toISO(),
          },
        ]);
        break;

      case TasksTab.Overdue:
        setDateRanges([
          {
            to: DateTime.local().toISO(),
          },
        ]);
        break;

      default:
        return;
    }
  }, [tab]);

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
            search: searchKey,
            assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
            deadlines: dateRanges,
          },
        },
        {
          query: GetTasksSummaryByStatusDocument,
          variables: {
            search: searchKey,
            assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
            deadlines: dateRanges,
          },
        },
      ],
    });

    if (!result || !result.updateTask || errors) {
      throw new Error();
    }
  };

  if (loading || taskSummaryByStatusLoading) {
    return <Loader />;
  }

  return (
    <TasksContent
      tab={tab}
      tasks={dateRanges.length === 0 ? [] : tasks}
      tasksSummaryByStatus={
        dateRanges.length === 0 ? { todo: 0, inProgress: 0, blocked: 0, done: 0 } : tasksSummaryByStatus
      }
      selectedMembers={selectedMembers}
      searchKey={searchKey}
      viewMode={viewMode}
      deadlines={dateRanges}
      onChangeSearchKey={setSearchKey}
      onChangeViewMode={setViewMode}
      onChangeDateRange={setDateRanges}
      onUpdateTaskStatus={handleUpdateTaskStatus}
    />
  );
};
