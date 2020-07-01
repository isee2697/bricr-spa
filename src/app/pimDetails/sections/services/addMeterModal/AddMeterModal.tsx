import React from 'react';
import { Form } from 'react-final-form';

import { RadioGroupField, GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';

import { AddMeterModalProps } from './AddMeterModal.types';

export const AddMeterModal = ({ isOpened, onClose, onSubmit }: AddMeterModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.services.add_meter_modal_title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <RadioGroupField xs={4} name="type" options={dictionaries.meterTypes} validate={[requireValidator]} />
              <GenericField
                name="name"
                label="pim_details.services.meter_name.label"
                placeholder="pim_details.services.meter_name.placeholder"
              />
            </DialogContent>
            <DialogActions>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'pim_details.services.add_meter' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
