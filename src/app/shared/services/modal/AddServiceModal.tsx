import React from 'react';
import { Form } from 'react-final-form';
import { RadioGroupField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AddServiceModalProps } from '../Service.types';

export const AddServiceModal = ({ types, nameLabel, title, isOpened, onClose, onSubmit }: AddServiceModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal fullWidth isOpened={isOpened} onClose={onClose} title={formatMessage({ id: title })}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <RadioGroupField md={3} name="type" options={types} validate={[requireValidator]} />
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
                {formatMessage({ id: 'pim_details.services.add_type' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
