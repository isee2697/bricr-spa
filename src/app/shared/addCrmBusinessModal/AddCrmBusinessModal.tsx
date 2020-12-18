import React, { useState } from 'react';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { AddCrmBusinessModalProps, CreateBusinessInput } from './AddCrmBusinessModal.types';
import { SearchProfileStep } from './searchProfileStep/SearchProfileStep';
import { useStyles } from './AddCrmBusinessModal.styles';
import { CreateBusinessStep } from './createBusinessStep/CreateBusinessStep';

const steps = [
  {
    name: 'searchProfile',
    component: SearchProfileStep,
  },
  {
    name: 'createBusiness',
    component: CreateBusinessStep,
  },
];

export const AddCrmBusinessModal = ({
  isOpened,
  onClose,
  onCreateNewBusiness,
  onRequestBricrData,
}: AddCrmBusinessModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const currentStep = steps[step];

  const handleGoTo = (step: number) => {
    setStep(step);
  };

  const handleCreateNewBusiness = async (input: CreateBusinessInput) => {
    setStep(0);
    await onCreateNewBusiness(input);

    return undefined;
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({
        id: step === 0 ? 'crm.business.add_business' : 'crm.business.add_business',
      })}
      className={classes.modal}
    >
      {React.createElement(currentStep.component, {
        handleGoTo,
        onCreateNewBusiness: handleCreateNewBusiness,
        onRequestBricrData,
        onClose,
        isOpened,
      })}
    </Modal>
  );
};
