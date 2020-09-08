import React from 'react';
import { AnyObject } from 'final-form';

import { useModalState } from 'hooks/useModalState/useModalState';

import { CreateNewTaskModalContainerProps } from './CreateNewTaskModalContainer.types';
import { CreateNewTaskModal } from './CreateNewTaskModal';

export const CreateNewTaskModalContainer = ({ members }: CreateNewTaskModalContainerProps) => {
  const { isOpen: isModalOpen } = useModalState('create-new-task');

  const handleSubmit = async (values: AnyObject) => {
    return undefined;
  };

  return <CreateNewTaskModal onSubmit={handleSubmit} isOpen={isModalOpen} members={members} />;
};
