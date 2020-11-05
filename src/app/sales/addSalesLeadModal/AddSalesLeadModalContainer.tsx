import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddSalesLeadModal } from './AddSalesLeadModal';

export const AddSalesLeadModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-sales-lead');

  const createNewSalesLead = async () => {
    close('add-sales-lead');

    return undefined;
  };

  return (
    <AddSalesLeadModal
      isOpened={isModalOpened}
      onClose={() => close('add-sales-lead')}
      onAddNewSalesLead={createNewSalesLead}
    />
  );
};
