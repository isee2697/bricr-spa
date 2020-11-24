import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddSalesItemBody } from './AddSalesItemModal.types';
import { AddSalesItemModal } from './AddSalesItemModal';

export const AddSalesItemModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpen, options } = useModalState('add-sales-item');

  const handleSubmit = async (body: AddSalesItemBody) => {
    close('add-sales-item');

    return undefined;
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
