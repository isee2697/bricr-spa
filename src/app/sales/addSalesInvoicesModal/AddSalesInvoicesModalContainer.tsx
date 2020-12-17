import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddSalesInvoicesModal } from './AddSalesInvoicesModal';

export const AddSalesInvoicesModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-sales-invoices');

  const createNewSalesInvoices = async () => {
    close('add-sales-invoices');

    return undefined;
  };

  return (
    <AddSalesInvoicesModal
      isOpened={isModalOpened}
      onClose={() => close('add-sales-invoices')}
      onAddNewSalesLead={createNewSalesInvoices}
    />
  );
};
