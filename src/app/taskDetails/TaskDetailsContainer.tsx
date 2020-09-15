import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { GetTaskDocument, Task, useGetMyTeamMembersQuery, useGetTaskQuery, useUpdateTaskMutation } from 'api/types';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { TaskDetails } from './TaskDetails';

export const TaskDetailsContainer = () => {
  const { isAuthorized, user } = useAuthState();
  const { loading: loadingTeam, data: teamData } = useGetMyTeamMembersQuery({
    skip: !isAuthorized,
  });

  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  const { loading, error, data } = useGetTaskQuery({ variables: { id } });

  const task = data?.getTask;
  const title = task ? task.id : '';

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

  if (loading || updateTaskLoading || !isAuthorized || !user || loadingTeam || !teamData || !teamData.members) {
    return <Loader />;
  }

  return (
    <TaskDetails
      error={error}
      data={data}
      breadcrumbs={breadcrumbs}
      onUpdateTask={handleUpdateTask}
      user={user}
      members={teamData?.members.items || []}
    />
  );
};
