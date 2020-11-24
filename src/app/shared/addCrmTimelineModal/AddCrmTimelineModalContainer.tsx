import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { AddCrmTimelineModal } from './AddCrmTimelineModal';

export const AddCrmTimelineModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-crm-timeline');

  const handleSubmit = () => {};

  return (
    <AddCrmTimelineModal isOpened={isModalOpened} onClose={() => close('add-crm-timeline')} onSubmit={handleSubmit} />
  );
};
