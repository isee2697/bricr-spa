import React, { useState } from 'react';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { AddRelationModalProps } from './AddRelationModal.types';
import { SearchProfileStep } from './searchProfileStep/SearchProfileStep';
import { RequestInformationStep } from './requestInformationStep/RequestInformationStep';
import { useStyles } from './AddRelationModal.styles';

const steps = [
  {
    name: 'searchProfile',
    component: SearchProfileStep,
  },
  {
    name: 'requestInformation',
    component: RequestInformationStep,
  },
];

export const AddRelationModal = ({
  isOpened,
  onClose,
  onCreateNewRelation,
  onRequestBricrData,
}: AddRelationModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const currentStep = steps[step];

  const handleNext = () => {
    setStep(i => i + 1);
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({
        id: step === 0 ? 'crm.relation.add_relation' : 'crm.relation.type_of_information_requesting',
      })}
      className={classes.modal}
    >
      {React.createElement(currentStep.component, {
        onNext: handleNext,
        onCreateNewRelation,
        onRequestBricrData,
        onClose,
        isOpened,
      })}
    </Modal>
  );
};
