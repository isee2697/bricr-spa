import React from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-final-form';

import { InspectionType, LabelProperty } from 'api/types';
import { Modal, SubmitButton, TileButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Box } from 'ui/atoms';
import { useLocale, useCustomLabels } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { RadioGroupField } from 'form/fields';
import { inspectionTank, inspectionPollution, inspectionMaintenance } from '../../dictionaries';

import { AddInspectionModalProps } from './AddInspectionModal.types';
import { useStyles } from './AddInspectionModal.styles';

const getInspectionType = (type: InspectionType) => {
  switch (type) {
    case InspectionType.Tanks:
      return inspectionTank;
    case InspectionType.Pollution:
      return inspectionPollution;
    case InspectionType.Maintenance:
      return inspectionMaintenance;
  }
};

export const AddInspectionModal = ({ isOpened, onClose, onSubmit, type, onAddCustomType }: AddInspectionModalProps) => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();
  const classes = useStyles();

  const customLabels = useCustomLabels(pimId, [LabelProperty.Inspection])[LabelProperty.Inspection] ?? [];

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
                  name="inspection"
                  options={[...getInspectionType(type), ...customLabels]}
                  actionElement={<TileButton onClick={addCustomType} isDisabled={false} />}
                />
              </Box>
            </DialogContent>
            <DialogActions className={classes.actions}>
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
