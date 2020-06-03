import React from 'react';
import { Form } from 'react-final-form';

import { RadioGroupField, GenericField } from 'form/fields';
import { Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { AddServiceModalProps } from './AddServiceModal.types';

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
              <RadioGroupField md={3} name="service.type" options={types} />
              <GenericField name="service.name" label={nameLabel} />
            </DialogContent>
            <DialogActions>
              <Button color="default" variant="outlined" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
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