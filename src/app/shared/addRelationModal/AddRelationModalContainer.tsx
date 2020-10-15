import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddRelationModal } from './AddRelationModal';

export const AddRelationModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-relation');

  return (
    <AddRelationModal
      isOpened={isModalOpened}
      onClose={() => close('add-relation')}
      onCreateNewRelation={() => {}}
      onRequestBricrData={() => {}}
    />
  );
};
