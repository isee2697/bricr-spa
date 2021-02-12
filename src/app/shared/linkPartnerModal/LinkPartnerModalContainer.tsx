import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { SortDirection, useCrmListQuery } from 'api/types';

import { LinkPartnerModal } from './LinkPartnerModal';
import { LinkPartnerModalContainerProps, LinkPartnerModalForm } from './LinkPartnerModal.types';

export const LinkPartnerModalContainer = ({ onSubmit, type }: LinkPartnerModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-partner');
  const { data } = useCrmListQuery({
    variables: {
      type,
      from: 0,
      sortColumn: 'id',
      sortDirection: SortDirection.Desc,
    },
  });
  const crmList = data?.crmList.items || [];

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
