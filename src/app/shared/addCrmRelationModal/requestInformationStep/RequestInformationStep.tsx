import React from 'react';
import { Form } from 'react-final-form';

import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useStyles } from '../AddCrmRelationModal.styles';
import { Button, DialogActions, DialogContent } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';

import { InformationTypes } from './dictionaries';

export const RequestInformationStep = ({ onClose, onRequestBricrData }: AddCrmRelationStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Form onSubmit={onRequestBricrData}>
      {({ handleSubmit, submitErrors, values }) => (
        <>
          <DialogContent>
            <RadioGroupField name="informationType" options={InformationTypes} />
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button color="ghost" size="small" onClick={onClose}>
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <SubmitButton type="submit" size="large" color="primary" variant="contained" onClick={onRequestBricrData}>
              {formatMessage({ id: 'crm.relation.add_relation.request_mybricr_data' })}
            </SubmitButton>
          </DialogActions>
        </>
      )}
    </Form>
  );
};
