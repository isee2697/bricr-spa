import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';
import { CreateCrmInput } from 'api/types';

import { AddCrmRelationModalProps } from './AddCrmRelationModal.types';
import { RequestInformationStep } from './requestInformationStep/RequestInformationStep';
import { useStyles } from './AddCrmRelationModal.styles';
import { CreateRelationStep } from './createRelationStep/CreateRelationStep';
import { ConflictStep } from './conflictStep/ConflictStep';

const steps = [
  {
    name: 'createRelation',
    component: CreateRelationStep,
  },
  {
    name: 'requestInformation',
    component: RequestInformationStep,
  },
  {
    name: 'conflict',
    component: ConflictStep,
  },
];

export const AddCrmRelationModal = ({
  isOpened,
  onClose,
  onCreateNewRelation,
  onRequestBricrData,
}: AddCrmRelationModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const currentStep = steps[step];

  const handleGoTo = (step: number) => {
    setStep(step);
  };

  const handleAddCrmRelation = async (body: CreateCrmInput) => {
    const response = await onCreateNewRelation(body);

    if (!response) {
      return;
    }

    if (response.error) {
      handleGoTo(2);
    }

    if (!response.error) {
      setStep(0);
    }

    return response;
  };

  const handleClose = () => {
    onClose();
    setStep(0);
  };

  return (
    <Form onSubmit={handleAddCrmRelation}>
      {({ handleSubmit, submitErrors, values, valid }) => (
        <Modal
          fullWidth
          isOpened={isOpened}
          onClose={handleClose}
          title={formatMessage({
            id:
              step === 0
                ? 'crm.relation.enter_relation_informatoin'
                : step === 1
                ? 'crm.relation.type_of_information_requesting'
                : 'crm.relation.enter_relation_informatoin',
          })}
          className={classes.modal}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            {React.createElement(currentStep.component, {
              handleGoTo,
              onRequestBricrData,
              valid,
              onClose: handleClose,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
