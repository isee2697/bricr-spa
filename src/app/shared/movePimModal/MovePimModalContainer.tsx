import React from 'react';
import { AnyObject } from 'final-form';

import { useModalState } from 'hooks';

import { MovePimModal } from './MovePimModal';

export const MovePimModalContainer = () => {
  const { isOpen: isModalOpen, options } = useModalState('move-pim');

  const handleSubmit = async (values: AnyObject) => {
    return undefined;
  };

  return <MovePimModal onSubmit={handleSubmit} isOpen={isModalOpen} options={options} />;
};
