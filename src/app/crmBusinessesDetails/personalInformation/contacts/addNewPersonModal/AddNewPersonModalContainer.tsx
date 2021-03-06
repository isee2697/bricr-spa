import React from 'react';

import { CrmType, SortDirection, useCrmListQuery } from 'api/types';
import { useModalDispatch, useModalState } from 'hooks';

import { AddNewPersonModal } from './AddNewPersonModal';
import { AddNewPersonBody, AddNewPersonModalContainerProps } from './AddNewPersonModal.types';

export const AddNewPersonModalContainer = ({ onSubmit }: AddNewPersonModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-new-person');
  const { data } = useCrmListQuery({
    variables: { type: CrmType.Business, from: 0, sortColumn: 'id', sortDirection: SortDirection.Desc },
  });
  const crmList = data?.crmList.items || [];

  const handleSubmit = async (input: AddNewPersonBody) => {
    return onSubmit(input);
  };

  return (
    <AddNewPersonModal
      isOpened={isModalOpened}
      crmList={crmList}
      onClose={() => close('add-new-person')}
      onSubmit={handleSubmit}
    />
  );
};
