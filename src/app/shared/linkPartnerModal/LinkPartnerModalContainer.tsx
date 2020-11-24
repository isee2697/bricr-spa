import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { useCrmListQuery } from 'api/types';

import { LinkPartnerModal } from './LinkPartnerModal';
import { LinkPartnerModalContainerProps, LinkPartnerModalForm } from './LinkPartnerModal.types';

export const LinkPartnerModalContainer = ({ onSubmit }: LinkPartnerModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-partner');
  const { data } = useCrmListQuery();
  const crmList = data?.crmList || [];

  const handleSubmit = async (input: LinkPartnerModalForm) => {
    return onSubmit(input.partner?.[0] || null);
  };

  return (
    <LinkPartnerModal
      isOpened={isModalOpened}
      onClose={() => close('link-partner')}
      onSubmit={handleSubmit}
      crmList={crmList}
    />
  );
};
