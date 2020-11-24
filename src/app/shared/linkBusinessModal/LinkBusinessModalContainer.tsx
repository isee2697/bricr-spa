import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { LinkBusinessModal } from './LinkBusinessModal';
import { BusinessListItem, LinkBusinessModalContainerProps, LinkBusinessModalForm } from './LinkBusinessModal.types';

export const LinkBusinessModalContainer = ({ onSubmit }: LinkBusinessModalContainerProps) => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('link-business');

  const handleSubmit = async (input: LinkBusinessModalForm) => {
    return onSubmit(input.businesses?.[0] || null, input.type);
  };

  const businessList: BusinessListItem[] = [
    {
      id: '0001',
      name: 'Ikea 1',
    },
    {
      id: '0002',
      name: 'Ikea 2',
    },
    {
      id: '0003',
      name: 'Igory',
    },
  ];

  return (
    <LinkBusinessModal
      isOpened={isModalOpened}
      onClose={() => close('link-business')}
      onSubmit={handleSubmit}
      businessList={businessList}
    />
  );
};
