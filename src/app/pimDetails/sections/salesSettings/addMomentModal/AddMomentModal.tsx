import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CheckboxGroupField } from 'form/fields';

import { AddMomentModalProps } from './AddMomentModal.types';

export const AddMomentModal = ({ title, isOpened, onClose, onSubmit, persons }: AddMomentModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal fullWidth isOpened={isOpened} onClose={onClose} title={formatMessage({ id: title })}>
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <CheckboxGroupField options={persons} name="linked_managers" orientation="horizontal" xs={12} />
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
                Link Property
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
