import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';

import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';
import { CreateCrmInput, CrmType } from 'api/types';

import { AddCrmRelationModalProps } from './AddCrmRelationModal.types';
import { RequestInformationStep } from './requestInformationStep/RequestInformationStep';
import { useStyles } from './AddCrmRelationModal.styles';
import { CreateRelationStep } from './createRelationStep/CreateRelationStep';
import { ConflictStep } from './conflictStep/ConflictStep';
import { SelectTypeStep } from './selectTypeStep/SelectTypeStep';
import { CreateBusinessStep } from './createBusinessStep/CreateBusinessStep';

const steps = [
  {
    name: 'selectType',
    component: SelectTypeStep,
  },
  {
    name: 'createRelation',
    component: CreateRelationStep,
  },
  {
    name: 'createBusiness',
    component: CreateBusinessStep,
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
  crmType,
}: AddCrmRelationModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [step, setStep] = useState(!!crmType ? (crmType === CrmType.Relation ? 1 : 2) : 0);
  const currentStep = steps[step];

  useEffect(() => {
    if (!!crmType && crmType === CrmType.Relation) {
      setStep(1);
    } else if (!!crmType && crmType === CrmType.Business) {
      setStep(2);
    }
  }, [crmType]);

  const handleGoTo = (step: number) => {
    setStep(step);
  };

  const handleAddCrmRelation = async (body: CreateCrmInput) => {
    const response = await onCreateNewRelation(body);

    if (!response) {
      return;
    }

    if (response.error) {
      handleGoTo(3);
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
    <Form
      onSubmit={handleAddCrmRelation}
      validate={values => {
        if (
          (values.type === CrmType.Relation || (!!crmType && crmType === CrmType.Relation)) &&
          !values.email &&
          !values.phoneNumber
        ) {
          return {
            email: {
              id: 'add_crm.error.email_or_phone_required',
            },
            phoneNumber: {
              id: 'add_crm.error.email_or_phone_required',
            },
          };
        }
      }}
    >
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
              crmType,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
