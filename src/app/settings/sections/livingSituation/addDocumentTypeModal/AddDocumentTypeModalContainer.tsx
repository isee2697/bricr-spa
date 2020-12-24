import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddDocumentTypeModal } from './AddDocumentTypeModal';
import { AddDocumentTypeModalContainerProps } from './AddDocumentTypeModal.types';

export const AddDocumentTypeModalContainer = ({ onClose, onSubmit }: AddDocumentTypeModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-living-situation-document-type');

  return (
    <AddDocumentTypeModal
      isOpened={isOpen}
      onClose={() => close('add-living-situation-document-type')}
      onSubmit={onSubmit}
    />
  );
};
