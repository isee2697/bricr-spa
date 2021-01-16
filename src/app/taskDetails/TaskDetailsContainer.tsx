import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import {
  GetTaskDocument,
  Task,
  TaskStatus,
  useAddNewSubtaskMutation,
  useDeleteSubtaskMutation,
  useGetMyTeamMembersQuery,
  useGetTaskQuery,
  useUpdateSubtaskStatusMutation,
  useUpdateTaskMutation,
} from 'api/types';
import { Alert, Loader, NavBreadcrumb, Snackbar } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { TaskDetails } from './TaskDetails';
import { useStyles } from './TaskDetails.style';
import { TaskLabelIcon } from './taskLabelIcon/TaskLabelIcon';

export const TaskDetailsContainer = () => {
  const { user } = useAuthState();
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);
  const { loading: loadingTeam, data: teamData } = useGetMyTeamMembersQuery();
  const classes = useStyles();

  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  const { loading, data: taskData } = useGetTaskQuery({
    variables: { id },
  });

  const task = taskData?.getTask;

  const title = task ? (
    <>
      <TaskLabelIcon type={task.label} className={classes.taskLabelIcon} /> {`BRICR-${task.taskIndex}`}
    </>
  ) : (
    ''
  );

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.taskList' })} to={AppRoute.tasks} />
      <NavBreadcrumb title={title} urlBase={AppRoute.taskDetails} />
    </>
  );

  const [updateTask] = useUpdateTaskMutation();
  const [addNewSubtask] = useAddNewSubtaskMutation();
  const [updateSubtaskStatus] = useUpdateSubtaskStatusMutation();
  const [deleteSubtask] = useDeleteSubtaskMutation();

  const handleUpdateTask = async (taskId: string, task: Partial<Task>) => {
    const { data: result, errors } = await updateTask({
      variables: {
        input: {
          ...task,
          id: taskId,
        },
      },
      refetchQueries: [
        {
          query: GetTaskDocument,
          variables: {
            id: taskId,
          },
        },
      ],
    });

    if (!result || !result.updateTask || errors) {
      setIndicatorState('error');
    } else {
      setIndicatorState('success');
    }
  };

  const handleAddNewSubtask = async (taskId: string, subtaskTitle: string) => {
    const { data: result, errors } = await addNewSubtask({
      variables: {
        taskId,
        title: subtaskTitle,
      },
      refetchQueries: [
        {
          query: GetTaskDocument,
          variables: {
            id: taskId,
          },
        },
      ],
    });

    if (!result || !result.addSubtask || errors) {
      setIndicatorState('error');
    } else {
      setIndicatorState('success');
    }
  };

  const handleUpdateSubtaskStatus = async (taskId: string, subtaskId: string, subtaskStatus: TaskStatus) => {
    const { data: result, errors } = await updateSubtaskStatus({
      variables: {
        subtaskId,
        status: subtaskStatus,
      },
      refetchQueries: [
        {
          query: GetTaskDocument,
          variables: {
            id: taskId,
          },
        },
      ],
    });

    if (!result || !result.updateSubtaskStatus || errors) {
      setIndicatorState('error');
    } else {
      setIndicatorState('success');
    }
  };

  const handleDeleteSubtask = async (taskId: string, subtaskId: string) => {
    const { data: result, errors } = await deleteSubtask({
      variables: {
        subtaskId,
      },
      refetchQueries: [
        {
          query: GetTaskDocument,
          variables: {
            id: taskId,
          },
        },
      ],
    });

    if (!result || !result.deleteSubtask || errors) {
      setIndicatorState('error');
    } else {
      setIndicatorState('success');
    }
  };

  if (loading || !user || loadingTeam || !teamData || !teamData.members || !taskData || !taskData.getTask) {
    return <Loader />;
  }

  return (
    <>
      <TaskDetails
        taskData={taskData.getTask}
        breadcrumbs={breadcrumbs}
        onUpdateTask={handleUpdateTask}
        onAddNewSubtask={handleAddNewSubtask}
        onUpdateSubtaskStatus={handleUpdateSubtaskStatus}
        onDeleteSubtask={handleDeleteSubtask}
        user={user}
        members={teamData.members.items || []}
      />
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={!!indicatorState}
        autoHideDuration={6000}
        onClose={() => setIndicatorState(undefined)}
      >
        <Alert variant="filled" severity={indicatorState}>
          {formatMessage({ id: 'common.autosaving' })}
        </Alert>
      </Snackbar>
    </>
  );
};
