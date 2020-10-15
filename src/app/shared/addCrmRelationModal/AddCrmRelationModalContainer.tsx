import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddCrmRelationModal } from './AddCrmRelationModal';

export const AddCrmRelationModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-relation');

  return (
    <AddCrmRelationModal
      isOpened={isModalOpened}
      onClose={() => close('add-relation')}
      onCreateNewRelation={() => {}}
      onRequestBricrData={() => {}}
    />
  );
};
