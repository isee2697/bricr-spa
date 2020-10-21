import React, { useState } from 'react';
import { Form, AnyObject } from 'react-final-form';

import { Modal, PropertyStage } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { DialogContent, Grid } from 'ui/atoms';

import { MovePimModalProps } from './MovePimModal.types';
import { SelectObjectStep } from './selectObjectStep/SelectObjectStep';

const steps = [
  {
    name: 'select_objects',
    component: SelectObjectStep,
  },
  {
    name: 'select_teams',
    component: SelectObjectStep,
  },
  {
    name: 'result',
    component: SelectObjectStep,
  },
];

export const MovePimModal = ({ onSubmit, isOpen, options }: MovePimModalProps) => {
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

  const handleSubmit = async (body: AnyObject) => {
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
    close('move-pim');
    setStep(0);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{}}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={handleClose}
          title={formatMessage({
            id: `add_pim.${currentStep.name}.title`,
            defaultMessage: formatMessage({ id: `add_pim.${currentStep.name}.title` }),
          })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <PropertyStage items={steps.map(item => ({ title: item.name }))} activeItem={step} />
                </Grid>
              </Grid>
            </DialogContent>
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
