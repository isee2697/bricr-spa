import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { Profile } from 'api/types';

import { ConnectKeyModal } from './ConnectKeyModal';
import { ConnectKeyModalContainerProps } from './ConnectKeyModal.types';

export const ConnectKeyModalContainer = ({ onSubmit }: ConnectKeyModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('connect-key');

  const people: Profile[] = [];

  return <ConnectKeyModal isOpened={isOpen} onClose={() => close('connect-key')} onSubmit={onSubmit} people={people} />;
};
