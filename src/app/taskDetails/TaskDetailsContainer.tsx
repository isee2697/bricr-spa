import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { GetTaskDocument, Task, useGetMyTeamMembersQuery, useGetTaskQuery, useUpdateTaskMutation } from 'api/types';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { TaskDetails } from './TaskDetails';
import { useStyles } from './TaskDetails.style';
import { TaskLabelIcon } from './taskLabelIcon/TaskLabelIcon';

export const TaskDetailsContainer = () => {
  const { user } = useAuthState();
  const { loading: loadingTeam, data: teamData } = useGetMyTeamMembersQuery();
  const classes = useStyles();

  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  const { loading, error, data: taskData } = useGetTaskQuery({
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

  const [updateTask, { loading: updateTaskLoading }] = useUpdateTaskMutation();

  const handleUpdateTask = async (taskId: string, task: Pick<Task, 'status'>) => {
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
      throw new Error();
    }
  };

  if (
    loading ||
    updateTaskLoading ||
    !user ||
    loadingTeam ||
    !teamData ||
    !teamData.members ||
    !taskData ||
    !taskData.getTask
  ) {
    return <Loader />;
  }

  return (
    <TaskDetails
      error={error}
      taskData={taskData.getTask}
      breadcrumbs={breadcrumbs}
      onUpdateTask={handleUpdateTask}
      user={user}
      members={teamData.members.items || []}
    />
  );
};
