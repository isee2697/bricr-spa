import React, { useState } from 'react';
import { Form, AnyObject } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Pim as PimEntity } from 'api/types';

import { MovePimModalProps, ObjectType } from './MovePimModal.types';
import { SelectObjectStep } from './selectObjectStep/SelectObjectStep';
import { SelectTeamsStep } from './selectTeamsStep/SelectTeamsStep';
import { ResultStep } from './resultStep/ResultStep';
import { useStyles } from './MovePimModal.styles';
import { StepBar } from './stepsBar/StepsBar';

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
  const [results, updateResults] = useState({});
  const currentStep = steps[step];
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();
  const classes = useStyles();

  const handleNext = () => {
    setStep(i => i + 1);
  };

  const handlePrev = () => {
    setStep(i => i - 1);
  };

  const generateData = () => {
    const newData: { [key: string]: PimEntity[] } = {};

    if (data) {
      Object.keys(data).forEach((key: string) => {
        switch (key) {
          case 'aog':
          case 'bog':
          case 'properties':
            newData[key] = data?.[key].items as PimEntity[];
            break;
          case 'relet':
          case 'nc':
            newData[key] = data?.[key].items?.map(item => ({ ...item, street: item.name })) as PimEntity[];
            break;
        }
      });
    }

    return newData;
  };

  const handleUpdate = async (data: ObjectType) => {
    updateResults(data);
  };

  const handleSubmit = async (body: AnyObject) => {
    const response = await onSubmit(body);

    close('move-pim');

    if (!response) {
      return;
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
          className={classes.modal}
          title={formatMessage({
            id: `add_pim.${currentStep.name}.title`,
            defaultMessage: formatMessage({ id: `add_pim.${currentStep.name}.title` }),
          })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <StepBar steps={steps} step={step} results={results} />

            {React.createElement(currentStep.component, {
              onNext: handleNext,
              onPrev: handlePrev,
              objects: generateData(),
              onUpdate: handleUpdate,
              options,
              results,
              onClose: handleClose,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
