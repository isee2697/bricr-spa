import React from 'react';

import { useAuthState, useModalDispatch, useModalState } from 'hooks';

import { AddSalesItemBody } from './AddSalesItemModal.types';
import { AddSalesItemModal } from './AddSalesItemModal';

export const AddSalesItemModalContainer = () => {
  const { accessToken } = useAuthState();
  const { close } = useModalDispatch();
  const { isOpen: isModalOpen, options } = useModalState('add-sales-item');

  const handleSubmit = async (body: AddSalesItemBody) => {
    try {
      await fetch(`${process.env.REACT_APP_FILE_URL}/create-sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({ ...body, label: options?.salesLabel }),
      });

      close('add-sales-item');

      return undefined;
    } catch (error) {
      close('add-sales-item');

      return error;
    }
  };

  return (
    <AddSalesItemModal
      isOpened={isModalOpen}
      onClose={() => close('add-sales-item')}
      onSubmit={handleSubmit}
      options={options}
    />
  );
};
