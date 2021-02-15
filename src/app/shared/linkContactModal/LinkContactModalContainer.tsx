import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { SortDirection, useCrmListQuery } from 'api/types';

import { LinkContactModal } from './LinkContactModal';
import { LinkContactModalContainerProps } from './LinkContactModal.types';

export const LinkContactModalContainer = ({ onSubmit, type }: LinkContactModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-contact');
  const { data } = useCrmListQuery({
    variables: { type, from: 0, sortColumn: 'id', sortDirection: SortDirection.Desc },
  });
  const crmList = data?.crmList.items || [];

  return (
    <LinkContactModal
      isOpened={isModalOpened}
      onClose={() => close('link-contact')}
      onSubmit={onSubmit}
      crmList={crmList}
    />
  );
};
