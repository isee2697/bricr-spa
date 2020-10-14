import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton, CancelButton, TileButton } from 'ui/molecules';
import { DialogActions, DialogContent } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { GenericField, RadioGroupField } from 'form/fields';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { useEntityType } from 'app/shared/entityType';
import { LabelProperty } from 'api/types';

import { useStyles } from './AddCostModal.styles';
import { AddCostModalProps, CostForm } from './AddCostModal.types';

export const AddCostModal = ({ isModalOpened, costTypes, onModalClose, onAddCost }: AddCostModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { entityType } = useEntityType();

  const [customTypeModalOpened, setCustomTypeModalOpened] = useState(false);

  return (
    <Modal
      title={formatMessage({ id: 'pim_details.prices.costs.add_cost_modal.title' })}
      fullWidth
      isOpened={isModalOpened}
      onClose={onModalClose}
    >
      <Form<CostForm> onSubmit={onAddCost}>
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <RadioGroupField
                xs={2}
                spacing={1}
                name="type"
                justify="center"
                options={costTypes}
                actionElement={<TileButton onClick={() => setCustomTypeModalOpened(true)} />}
              />
              <GenericField
                id="name"
                name="name"
                label="pim_details.prices.costs.add_cost_modal.name"
                placeholder="pim_details.prices.costs.add_cost_modal.name_placeholder"
              />
            </DialogContent>
            <DialogActions classes={{ root: classes.actions }}>
              <CancelButton variant="outlined" size="large" onClick={onModalClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                color="primary"
                variant="contained"
                startIcon={<AddIcon color="inherit" />}
                onClick={handleSubmit}
                isLoading={submitting}
                disabled={!values.type}
              >
                {formatMessage({ id: 'pim_details.prices.costs.add_cost_modal.confirm' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>

      {customTypeModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.Cost}
          isOpened
          entityType={entityType}
          onClose={() => setCustomTypeModalOpened(false)}
        />
      )}
    </Modal>
  );
};
