import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { GenericField, RadioGroupField } from 'form/fields';
import { BOG_SPACE_TYPES } from '../dictionaries';
import { AddCommercialSpaceModalProps } from '../CommercialSpaces.types';

export const AddCommercialSpaceModal = ({ onModalClose, isModalOpen, onModalSubmit }: AddCommercialSpaceModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isModalOpen}
      onClose={onModalClose}
      title={formatMessage({ id: 'pim_details.commercial_spaces.modal_title' })}
    >
      <Form onSubmit={onModalSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}

            <DialogContent>
              <RadioGroupField sm={4} name="type" options={BOG_SPACE_TYPES} />
              <Grid item xs={12}>
                <GenericField
                  name="name"
                  label="pim_details.commercial_spaces.name"
                  placeholder="pim_details.commercial_spaces.name_placeholder"
                  size="medium"
                />
              </Grid>
            </DialogContent>

            <DialogActions>
              <CancelButton variant="outlined" size="large" onClick={onModalClose}>
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
                {formatMessage({ id: 'pim_details.commercial_spaces.add_new' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
