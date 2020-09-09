import React from 'react';

import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useCreateTaskMutation } from 'api/types';

import { CreateNewTaskModalContainerProps } from './CreateNewTaskModalContainer.types';
import { CreateNewTaskModal } from './CreateNewTaskModal';
import { CreateNewTaskBody, CreateNewTaskSubmit } from './CreateNewTaskModal.types';

export const CreateNewTaskModalContainer = ({ members }: CreateNewTaskModalContainerProps) => {
  const { isOpen: isModalOpen } = useModalState('create-new-task');
  const [createTask] = useCreateTaskMutation();
  const { close } = useModalDispatch();

  const handleSubmit: CreateNewTaskSubmit<CreateNewTaskBody> = async ({
    label,
    assignee,
    startDate,
    deadline,
    ...body
  }) => {
    try {
      const { data: result } = await createTask({
        variables: {
          input: {
            ...body,
            assignee,
            startDate: startDate.toISO(),
            deadline: deadline.toISO(),
          },
        },
      });

      if (!result || !result.createTask) {
        throw new Error();
      }

      close('create-new-task');

      return undefined;
    } catch (error) {
      return {
        error: 'unknown',
      };
    }
  };

  return <CreateNewTaskModal onSubmit={handleSubmit} isOpen={isModalOpen} members={members} />;
};
