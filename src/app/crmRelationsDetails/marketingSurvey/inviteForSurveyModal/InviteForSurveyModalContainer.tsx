import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { InviteForSurveyModal } from './InviteForSurveyModal';
import { AddSurveyBody } from './InviteForSurveyModal.types';

export const InviteForSurveyModalContainer = () => {
  const { isOpen, options } = useModalState('invite-for-survey');
  const { close } = useModalDispatch();

  const onClose = () => {
    close('invite-for-survey');
  };

  const handleSubmit = async (values: AddSurveyBody) => {
    onClose();

    return undefined;
  };

  return <InviteForSurveyModal isOpened={isOpen} onClose={onClose} onSubmit={handleSubmit} options={options} />;
};
