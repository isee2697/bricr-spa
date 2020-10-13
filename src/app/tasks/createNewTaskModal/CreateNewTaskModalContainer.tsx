import React from 'react';
import { useModalState } from 'hooks/useModalState/useModalState';
import { GetNotificationsDocument, useCreateTaskMutation } from 'api/types';

import { CreateNewTaskModalContainerProps } from './CreateNewTaskModalContainer.types';
import { CreateNewTaskModal } from './CreateNewTaskModal';
import { CreateNewTaskBody, CreateNewTaskSubmit } from './CreateNewTaskModal.types';

export const CreateNewTaskModalContainer = ({ members, onAddNewTask }: CreateNewTaskModalContainerProps) => {
  const { isOpen: isModalOpen } = useModalState('create-new-task');
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

      onAddNewTask();

      return undefined;
    } catch (error) {
      return {
        error: 'unknown',
      };
    }
  };

  return <CreateNewTaskModal onSubmit={handleSubmit} isOpen={isModalOpen} members={members} />;
};
