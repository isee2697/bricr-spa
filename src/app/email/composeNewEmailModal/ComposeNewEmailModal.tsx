import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Form } from 'react-final-form';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogActions, DialogContent } from 'ui/atoms';

import { ComposeNewEmailModalProps } from './ComposeNewEmailModal.types';

export const ComposeNewEmailModal = ({ isOpened, onClose, onSubmit }: ComposeNewEmailModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'email.compose_new_email.new_message' })}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <></>
            </DialogContent>
            <DialogActions>
              <CancelButton size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'email.compose_new_email.save_as_concept' })}
              </SubmitButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'email.compose_new_email.send' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
