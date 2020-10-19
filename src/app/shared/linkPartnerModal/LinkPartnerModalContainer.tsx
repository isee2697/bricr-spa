import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { LinkPartnerModal } from './LinkPartnerModal';

export const LinkPartnerModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-partner');

  return <LinkPartnerModal isOpened={isModalOpened} onClose={() => close('link-partner')} />;
};
