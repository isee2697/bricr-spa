import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddSignModal } from './AddSignModal';
import { AddSignModalContainerProps } from './AddSignModal.types';

export const AddSignModalContainer = ({ onSubmit }: AddSignModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-signs');

  return <AddSignModal isOpened={isOpen} onClose={() => close('add-signs')} onSubmit={onSubmit} />;
};
