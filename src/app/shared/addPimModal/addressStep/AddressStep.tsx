import React, { ReactNode } from 'react';
import { useFormState } from 'react-final-form';

import { DialogContent, DialogActions, Button } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { AddPimStepProps, PropertyCategory } from '../AddPimModal.types';

import { PimAddress } from './form/PimAddress';
import { NewConstructionAddress } from './form/NewConstructionAddress';

export const AddressStep = ({ onPrev, onNext }: AddPimStepProps) => {
  const { formatMessage } = useLocale();
  const {
    submitting,
    values: { category },
  } = useFormState<{ category: PropertyCategory }>({
    subscription: { submitting: true, submitErrors: true, values: true },
  });

  const getForm = () => {
    const forms: Record<string, ReactNode> = {
      [PropertyCategory.PROPERTY]: <PimAddress />,
      [PropertyCategory.PROJECT]: <NewConstructionAddress />,
    };

    return forms[category] ? forms[category] : <></>;
  };

  return (
    <>
      <DialogContent>{getForm()}</DialogContent>
      <DialogActions>
        <Button color="ghost" size="small" onClick={onPrev}>
          {formatMessage({ id: 'add_pim.controls.previously_step' })}
        </Button>
        <SubmitButton
          type="submit"
          startIcon={<AddIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          isLoading={submitting}
        >
          {formatMessage({ id: 'pim.add' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
