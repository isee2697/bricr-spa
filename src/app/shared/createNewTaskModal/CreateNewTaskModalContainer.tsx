import React from 'react';
import { useHistory } from 'react-router-dom';

import { useModalState } from 'hooks/useModalState/useModalState';
import { GetNotificationsDocument, useCreateTaskMutation, useGetMyTeamMembersQuery } from 'api/types';
import { CreateNewTaskModal } from 'app/shared/createNewTaskModal/CreateNewTaskModal';
import { CreateNewTaskBody, CreateNewTaskSubmit } from 'app/shared/createNewTaskModal/CreateNewTaskModal.types';
import { useAuthState, useModalDispatch } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

export const CreateNewTaskModalContainer = () => {
  const { isAuthorized } = useAuthState();
  const { isOpen: isModalOpen } = useModalState('create-new-task');
  const { close } = useModalDispatch();
  const { push } = useHistory();
  const { data } = useGetMyTeamMembersQuery({
    skip: !isAuthorized,
  });
  const [createTask] = useCreateTaskMutation();

  const handleSubmit: CreateNewTaskSubmit<CreateNewTaskBody> = async ({
    assignee,
    startDate,
    deadline,
    deadlineTime,
    ...body
  }) => {
    try {
      const { hour, minute } = deadlineTime;

      const { data: result } = await createTask({
        variables: {
          input: {
            ...body,
            assignee,
            startDate: startDate.toISO(),
            deadline: deadline.set({ hour, minute }).toISO(),
          },
        },
        refetchQueries: [
          {
            query: GetNotificationsDocument,
          },
        ],
      });

      if (!result || !result.createTask) {
        throw new Error();
      }

      if (result && result.createTask) {
        push(`${AppRoute.tasks}/${result.createTask.id}`, { newlyAdded: true });
        close('create-new-task');
      }

      return undefined;
    } catch (error) {
      return {
        error: 'unknown',
      };
    }
  };

  return <CreateNewTaskModal onSubmit={handleSubmit} isOpen={isModalOpen} members={data?.members.items ?? []} />;
};
