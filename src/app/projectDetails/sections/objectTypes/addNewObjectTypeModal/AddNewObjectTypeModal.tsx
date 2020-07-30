import { Form } from 'react-final-form';
import React from 'react';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogActions, DialogContent } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';

import { useStyles } from './AddNewObjectTypeModal.styles';
import { AddNewObjectTypeModalProps } from './AddNewObjectTypeModal.types';

export const AddNewObjectTypeModal = ({ isOpened, onClose, onSubmit, isError }: AddNewObjectTypeModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.object_types.new_type_title' })}
      className={classes.root}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {isError && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <GenericField
                size="medium"
                label="project_details.object_types.label"
                placeholder="project_details.object_types.placeholder"
                name="name"
                validate={[requireValidator]}
              />
            </DialogContent>
            <DialogActions className={classes.actionsPanel}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
                startIcon={<AddIcon color="inherit" />}
              >
                {formatMessage({ id: 'pim.object_type_add' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
