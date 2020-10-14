import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { GenericField } from 'form/fields';

import { AogSpaceModalProps } from './AogSpaceModal.types';

export const AogSpaceModal = ({ isOpened, onSubmit, onClose, type }: AogSpaceModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: `pim_details.${type.toLowerCase()}.modal_title` })}
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
              <Grid item xs={12}>
                <GenericField
                  name="name"
                  label={`pim_details.${type.toLowerCase()}.name`}
                  placeholder={`pim_details.${type.toLowerCase()}.name_placeholder`}
                  size="medium"
                />
              </Grid>
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
                {formatMessage({ id: `pim_details.${type.toLowerCase()}.add_new` })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
