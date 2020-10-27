import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { useCrmListQuery } from 'api/types';

import { LinkContactModal } from './LinkContactModal';
import { LinkContactModalContainerProps } from './LinkContactModal.types';

export const LinkContactModalContainer = ({ onSubmit }: LinkContactModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-contact');
  const { data } = useCrmListQuery();
  const crmList = data?.crmList || [];

  return (
    <LinkContactModal
      isOpened={isModalOpened}
      onClose={() => close('link-contact')}
      onSubmit={onSubmit}
      crmList={crmList}
    />
  );
};
