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
    if (data) {
      const newObjects = Object.entries(JSON.parse(JSON.stringify(data)));
      const newData: { [key: string]: PimEntity[] } = {};

      newObjects.forEach((object: AnyObject) => {
        if (object[1].listPims) {
          newData[object[0] as string] = object[1].listPims.items as PimEntity[];
        }

        if (object[1].listNcps) {
          newData[object[0] as string] = object[1].listNcps.items as PimEntity[];
        }
      });

      return newData;
    }

    return {};
  };

  const handleUpdate = async (data: ObjectType) => {
    updateResults(data);
  };

  const handleSubmit = async (body: AnyObject) => {
    const response = await onSubmit(body);

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
              objects: data && Object.entries(data).length > 0 ? generateData() : {},
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
