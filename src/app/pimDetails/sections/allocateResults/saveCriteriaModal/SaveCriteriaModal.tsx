import React from 'react';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Form } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';

import { SaveCriteriaModalProps } from './SaveCriteriaModal.types';

export const SaveCriteriaModal = ({ onClose, onGotoResult, onSaveCriteria, isOpen }: SaveCriteriaModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.allocate_results.save_criteria_modal.title' })}
    >
      <Form onSubmit={onSaveCriteria}>
        {({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <>
            <DialogContent>
              <GenericField
                label={formatMessage({
                  id: 'pim_details.allocate_results.save_criteria.name',
                })}
                name="name"
                placeholder={formatMessage({
                  id: 'pim_details.allocate_results.save_criteria.name.placeholder',
                })}
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="outlined" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <Button color="primary" variant="outlined" onClick={onGotoResult}>
                {formatMessage({ id: 'pim_details.allocate_results.steps.go_to_results' })}
              </Button>
              <SubmitButton
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                startIcon={<AddIcon color="inherit" />}
              >
                {formatMessage({ id: 'pim_details.allocate_results.steps.save_criteria' })}
              </SubmitButton>
            </DialogActions>
          </>
        )}
      </Form>
    </Modal>
  );
};
