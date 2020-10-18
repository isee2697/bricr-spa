import React, { useState } from 'react';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { AddCrmRelationModalProps } from './AddCrmRelationModal.types';
import { SearchProfileStep } from './searchProfileStep/SearchProfileStep';
import { RequestInformationStep } from './requestInformationStep/RequestInformationStep';
import { useStyles } from './AddCrmRelationModal.styles';
import { CreateRelationStep } from './createRelationStep/CreateRelationStep';

const steps = [
  {
    name: 'searchProfile',
    component: SearchProfileStep,
  },
  {
    name: 'createRelation',
    component: CreateRelationStep,
  },
  {
    name: 'requestInformation',
    component: RequestInformationStep,
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

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({
        id:
          step === 0
            ? 'crm.relation.add_relation'
            : step === 1
            ? 'crm.relation.enter_relation_informatoin'
            : 'crm.relation.type_of_information_requesting',
      })}
      className={classes.modal}
    >
      {React.createElement(currentStep.component, {
        handleGoTo,
        onCreateNewRelation,
        onRequestBricrData,
        onClose,
        isOpened,
      })}
    </Modal>
  );
};
