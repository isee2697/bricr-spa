import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton, TileButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { RadioGroupField } from 'form/fields';
import { inspectionTank, inspectionPollution, inspectionMaintenance } from '../dictionaries';
import { InspectionTypes } from '../inspection/inspectionType/InspectionType.types';

import { AddInspectionModalProps } from './AddInspectionModal.types';
import { useStyles } from './AddInspectionModal.styles';

const getInspectionType = (type: InspectionTypes) => {
  switch (type) {
    case 'Tank':
      return inspectionTank;
    case 'Pollution':
      return inspectionPollution;
    case 'Maintenance':
      return inspectionMaintenance;
  }
};

export const AddInspectionModal = ({ isOpened, onClose, onSubmit, type, onAddCustomType }: AddInspectionModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const addCustomType = () => {
    onAddCustomType();
    onClose();
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: `pim_details.specification.inspection.${type.toLowerCase()}_modal_title` })}
      className={classes.modal}
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
              <Box mb={1.5}>
                <RadioGroupField
                  disabled={false}
                  xs={2}
                  name={`inspection.${type.toLowerCase()}`}
                  options={getInspectionType(type)}
                  actionElement={<TileButton onClick={addCustomType} isDisabled={false} />}
                />
              </Box>
            </DialogContent>
            <DialogActions className={classes.actions}>
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
                {formatMessage({ id: 'pim_details.specification.inspection.modal_submit_button' })}{' '}
                {formatMessage({ id: `pim_details.specification.inspection.type_${type.toLowerCase()}` })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
