import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { EMAIL_SIGNATURES } from 'api/mocks/email';

import { SelectSignatureModal } from './SelectSignatureModal';

export const SelectSignatureModalContainer = () => {
  const { isOpen } = useModalState('select-signature');
  const { close } = useModalDispatch();

  const handleSelectSignature = async () => {
    return undefined;
  };

  return (
    <SelectSignatureModal
      isOpened={isOpen}
      onSubmit={handleSelectSignature}
      onClose={() => close('select-signature')}
      signatures={EMAIL_SIGNATURES}
    />
  );
};
