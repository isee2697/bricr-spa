import React, { useEffect } from "react";

import { Loader, Alert } from "ui/atoms";
import { useLocale } from "hooks/useLocale/useLocale";

import { TaskViewContainerProps } from "./TaskViewContainer.types";
import { TasksViewMode } from "../Tasks.enum";
import { TasksSwimlane } from "../tasksSwimlane/TasksSwimlane";
import { TasksList } from "../tasksList/TasksList";
import {
  Task,
  useGetTasksLazyQuery,
  SortDirection,
  TaskStatus,
  useUpdateTaskMutation,
  GetTasksDocument,
} from "api/types";
import { TeamMemberItem } from "../Tasks.types";

export const TaskViewContainer = ({
  viewMode,
  search,
  selectedMembers = [],
  dateRange,
}: TaskViewContainerProps) => {
  const [getTasks, { data, loading }] = useGetTasksLazyQuery({
    fetchPolicy: "network-only",
  });
  const [
    updateTask,
    { loading: updateTaskLoading, error: updateTaskError },
  ] = useUpdateTaskMutation();
  const { formatMessage } = useLocale();

  useEffect(() => {
    handleGetTasks();
  });

  if (loading || updateTaskLoading) {
    return <Loader />;
  }

  const tasks: Task[] = data ? data.getTasks?.items || [] : [];

  const handleGetTasks = () => {
    getTasks({
      variables: {
        sortColumn:
          viewMode === TasksViewMode.Swimlane
            ? "title.keyword"
            : "title.keyword",
        sortDirection: SortDirection.Desc,
        search,
        assignees: selectedMembers.map((member: TeamMemberItem) => member.id),
        ...dateRange,
      },
    });
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
            sortColumn:
              viewMode === TasksViewMode.Swimlane
                ? "title.keyword"
                : "title.keyword",
            sortDirection: SortDirection.Desc,
            search,
            assignees: selectedMembers.map(
              (member: TeamMemberItem) => member.id
            ),
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
      {!!updateTaskError && (
        <Alert severity="error">{formatMessage({ id: "common.error" })}</Alert>
      )}
      {viewMode === TasksViewMode.Swimlane && (
        <TasksSwimlane
          tasks={tasks}
          onUpdateTaskStatus={handleUpdateTaskStatus}
        />
      )}
      {viewMode === TasksViewMode.List && <TasksList tasks={tasks} />}
    </>
  );
};
