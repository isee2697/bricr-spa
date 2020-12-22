import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddCrmBusinessModal } from './AddCrmBusinessModal';
import { CreateBusinessInput } from './AddCrmBusinessModal.types';

export const AddCrmBusinessModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-business');

  const createNewBusiness = async (input: CreateBusinessInput) => {
    close('add-business');
  };

  return (
    <AddCrmBusinessModal
      isOpened={isModalOpened}
      onClose={() => close('add-business')}
      onCreateNewBusiness={createNewBusiness}
      onRequestBricrData={() => {}}
    />
  );
};
