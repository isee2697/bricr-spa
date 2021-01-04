import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { ComposeNewEmailModal } from './ComposeNewEmailModal';

export const ComposeNewEmailModalContainer = () => {
  const { isOpen } = useModalState('compose-new-email');
  const { close } = useModalDispatch();

  const handleSubmit = async () => {
    return undefined;
  };

  return <ComposeNewEmailModal isOpened={isOpen} onClose={() => close('compose-new-email')} onSubmit={handleSubmit} />;
};
