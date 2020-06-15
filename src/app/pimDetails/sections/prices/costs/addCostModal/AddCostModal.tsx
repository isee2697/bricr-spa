import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { GenericField, RadioGroupField } from 'form/fields';

import { useStyles } from './AddCostModal.styles';
import { AddCostModalProps, CostForm } from './AddCostModal.types';

export const AddCostModal = ({ isModalOpened, onModalClose, onAddCost, options }: AddCostModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      title={formatMessage({ id: 'pim_details.prices.costs.add_cost_modal.title' })}
      fullWidth
      isOpened={isModalOpened}
      onClose={onModalClose}
    >
      <Form<CostForm> onSubmit={onAddCost}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <RadioGroupField xs={2} spacing={1} name="type" justify="center" options={options} />
              <GenericField
                id="name"
                name="name"
                label="pim_details.prices.costs.add_cost_modal.name"
                placeholder="pim_details.prices.costs.add_cost_modal.name_placeholder"
              />
            </DialogContent>
            <DialogActions classes={{ root: classes.actions }}>
              <Button onClick={onModalClose} color="primary" variant="outlined">
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                color="primary"
                variant="contained"
                startIcon={<AddIcon color="inherit" />}
                onClick={handleSubmit}
                isLoading={submitting}
                size="small"
              >
                {formatMessage({ id: 'pim_details.prices.costs.add_cost_modal.confirm' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
