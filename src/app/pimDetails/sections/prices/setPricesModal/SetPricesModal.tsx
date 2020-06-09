import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton } from 'ui/molecules';
import { CheckboxGroupField } from 'form/fields';
import { DialogContent, DialogActions, Button } from 'ui/atoms';
import { AddIcon, HomeIcon, LockIcon } from 'ui/atoms/icons';

import { SetPricesModalProps } from './SetPricesModal.types';

const PRICES = [
  {
    label: 'pim.type.sale',
    icon: <HomeIcon color="inherit" />,
    value: 'Sale',
  },
  {
    label: 'pim.type.rent',
    icon: <LockIcon color="inherit" />,
    value: 'Rent',
  },
];

export const SetPricesModal = ({ isOpened, onClose, initialValues, onSubmit }: SetPricesModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.prices.the_property_is_for' })}
    >
      <Form onSubmit={onSubmit} initialValues={{ prices: initialValues }} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <CheckboxGroupField name="prices" options={PRICES} xs={6} orientation="horizontal" />
            </DialogContent>

            <DialogActions>
              <Button color="default" variant="outlined">
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
                {formatMessage({ id: 'pim_details.prices.set_prices' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
