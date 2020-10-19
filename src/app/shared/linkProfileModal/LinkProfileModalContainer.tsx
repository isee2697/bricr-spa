import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { LinkProfileModal } from './LinkProfileModal';

export const LinkProfileModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-profile');

  return <LinkProfileModal isOpened={isModalOpened} onClose={() => close('link-profile')} />;
};
