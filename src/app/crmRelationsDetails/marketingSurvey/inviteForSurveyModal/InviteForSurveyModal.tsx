import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { useLocale } from 'hooks';
import { Modal } from 'ui/molecules';

import { InviteForSurveyModalProps } from './InviteForSurveyModal.types';
import { SurveyTypeStep } from './surveyTypeStep/SurveyTypeStep';
import { InviteDataStep } from './inviteDataStep/InviteDataStep';

const steps = [
  {
    name: 'type',
    component: SurveyTypeStep,
  },
  {
    name: 'data',
    component: InviteDataStep,
  },
];

export const InviteForSurveyModal = ({ onClose, onSubmit, isOpened, options }: InviteForSurveyModalProps) => {
  const surveyType = options?.availableSurveyTypes?.length === 1 && options?.availableSurveyTypes[0];
  const { formatMessage } = useLocale();
  const [step, setStep] = useState(!!surveyType ? 1 : 0);
  const currentStep = steps[step];

  const handleNext = () => {
    setStep(i => i + 1);
  };

  const handlePrev = () => {
    setStep(i => i - 1);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpened}
          onClose={onClose}
          title={formatMessage({ id: 'crm.details.marketing_survey.invite_for_survey' })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            {React.createElement(currentStep.component, {
              onNext: handleNext,
              onPrev: handlePrev,
              options,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
