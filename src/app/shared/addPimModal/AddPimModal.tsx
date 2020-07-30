import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Modal } from 'ui/molecules';
import { Alert, DialogContent } from 'ui/atoms';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { AddPimModalProps, AddPimSubmit } from './AddPimModal.types';
import { PropertyTypeStep } from './propertyTypeStep/PropertyTypeStep';
import { AddressStep } from './addressStep/AddressStep';
import { ConflictStep } from './conflictStep/ConflictStep';

const steps = [
  {
    name: 'type',
    component: PropertyTypeStep,
  },
  {
    name: 'address',
    component: AddressStep,
  },
  {
    name: 'conflict',
    component: ConflictStep,
  },
];

export const AddPimModal = ({ onSubmit, propertyCategory, isOpen, options }: AddPimModalProps) => {
  const [step, setStep] = useState(0);
  const currentStep = steps[step];
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleNext = () => {
    setStep(i => i + 1);
  };

  const handlePrev = () => {
    setStep(i => i - 1);
  };

  const handleSubmit: AddPimSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (response.error === 'conflict') {
      handleNext();
    }

    if (!response.error) {
      setStep(0);
    }

    return response;
  };

  const handleClose = () => {
    close('add-new-pim');
    setStep(0);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{ category: propertyCategory }}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={handleClose}
          title={formatMessage({
            id: `add_pim.${currentStep.name}.title_${values.category}`,
            defaultMessage: formatMessage({ id: `add_pim.${currentStep.name}.title` }),
          })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error === 'unknown' && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
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
