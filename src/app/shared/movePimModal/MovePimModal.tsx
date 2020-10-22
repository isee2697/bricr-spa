import React, { useState } from 'react';
import { Form, AnyObject } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Modal, PropertyStage } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { DialogContent, Grid } from 'ui/atoms';
import { Pim as PimEntity } from 'api/types';

import { MovePimModalProps } from './MovePimModal.types';
import { SelectObjectStep } from './selectObjectStep/SelectObjectStep';
import { SelectTeamsStep } from './selectTeamsStep/SelectTeamsStep';
import { ResultStep } from './resultStep/ResultStep';

const steps = [
  {
    name: 'select_objects',
    component: SelectObjectStep,
  },
  {
    name: 'select_teams',
    component: SelectTeamsStep,
  },
  {
    name: 'result',
    component: ResultStep,
  },
];

export const MovePimModal = ({ onSubmit, isOpen, options, data }: MovePimModalProps) => {
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

  const generateData = () => {
    if (data) {
      const newObjects = Object.entries(JSON.parse(JSON.stringify(data)));
      const newData: { [key: string]: PimEntity[] } = {};

      newObjects.forEach((object: AnyObject) => {
        console.log(object[1]);
        newData[object[0] as string] = object[1].listPims.items as PimEntity[];
      });

      return newData;
    }

    return {};
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
    <Form onSubmit={handleSubmit} initialValues={{}} mutators={{ ...arrayMutators }}>
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
              objects: data && Object.entries(data).length > 0 ? generateData() : {},
              options,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
