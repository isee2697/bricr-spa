import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { EMAIL_TEMPLATES } from 'api/mocks/email';

import { SelectTemplateModal } from './SelectTemplateModal';

export const SelectTemplateModalContainer = () => {
  const { isOpen } = useModalState('select-template');
  const { close } = useModalDispatch();

  const handleSelectSignature = async () => {
    return undefined;
  };

  return (
    <SelectTemplateModal
      isOpened={isOpen}
      onSubmit={handleSelectSignature}
      onClose={() => close('select-template')}
      templates={EMAIL_TEMPLATES}
    />
  );
};
