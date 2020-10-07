import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import { Alert, Loader } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
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
import { CreateNewTaskModalContainer } from '../createNewTaskModal/CreateNewTaskModalContainer';
import { useModalDispatch } from '../../../hooks';

import { TaskViewContainerProps } from './TaskViewContainer.types';

export const TaskViewContainer = ({ tab, members, selectedMembers = [] }: TaskViewContainerProps) => {
  const [searchKey, setSearchKey] = useState('');
  const [viewMode, setViewMode] = useState(TasksViewMode.Swimlane);
  const [dateRange, setDateRange] = useState<DateRange>({
    to: DateTime.local().toISO(),
  });
  const { close } = useModalDispatch();

  const [getTasks, { data, loading }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [
    getTaskSummaryByStatus,
    { data: taskSummaryByStatusData, loading: taskSummaryByStatusLoading },
  ] = useGetTasksSummaryByStatusLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [updateTask, { error: updateTaskError }] = useUpdateTaskMutation();
  const { formatMessage } = useLocale();

  useEffect(() => {
    getTasks({
      variables: {
        sortColumn: viewMode === TasksViewMode.Swimlane ? 'title' : 'title',
        sortDirection: SortDirection.Desc,
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
    getTaskSummaryByStatus({
      variables: {
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
  }, [viewMode, searchKey, selectedMembers, dateRange, getTasks, getTaskSummaryByStatus]);

  const tasks: Task[] = (data ? data.getTasks?.items || [] : []).map(item => ({
    ...item,
    assigneeDetail: {
      ...(selectedMembers.find(member => member.id === item.assignee) || {}),
    },
  }));

  useEffect(() => {
    switch (tab) {
      case TasksTab.Today:
        setDateRange({
          from: DateTime.local().toISO(),
          to: DateTime.local()
            .endOf('day')
            .toISO(),
        });
        break;

      case TasksTab.NextWeek:
        setDateRange({
          from: DateTime.local()
            .plus({ days: 1 })
            .startOf('day')
            .toISO(),
          to: DateTime.local()
            .plus({ days: 7 })
            .endOf('day')
            .toISO(),
        });
        break;

      case TasksTab.Future:
        setDateRange({
          from: DateTime.local()
            .plus({ days: 8 })
            .startOf('day')
            .toISO(),
        });
        break;

      case TasksTab.Overdue:
        setDateRange({
          to: DateTime.local().toISO(),
        });
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
            ...dateRange,
          },
        },
        {
          query: GetTasksSummaryByStatusDocument,
          variables: {
            search: searchKey,
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

  const handleAddNewTask = () => {
    close('create-new-task');
    getTasks({
      variables: {
        sortColumn: viewMode === TasksViewMode.Swimlane ? 'title' : 'title',
        sortDirection: SortDirection.Desc,
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
    getTaskSummaryByStatus({
      variables: {
        search: searchKey,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
  };

  if (loading || taskSummaryByStatusLoading) {
    return <Loader />;
  }

  return (
    <>
      {!!updateTaskError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <TasksContent
        tab={tab}
        tasks={tasks}
        tasksSummaryByStatus={tasksSummaryByStatus}
        selectedMembers={selectedMembers}
        searchKey={searchKey}
        viewMode={viewMode}
        dateRange={dateRange}
        onChangeSearchKey={setSearchKey}
        onChangeViewMode={setViewMode}
        onChangeDateRange={setDateRange}
        onUpdateTaskStatus={handleUpdateTaskStatus}
      />
      <CreateNewTaskModalContainer members={members} onAddNewTask={handleAddNewTask} />
    </>
  );
};
