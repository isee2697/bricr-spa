import React from 'react';
import { Form } from 'react-final-form';

import { RadioGroupField, GenericField } from 'form/fields';
import { Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { SquareIcon, AddIcon } from 'ui/atoms/icons';
import { MeterType } from 'api/types';

import { AddMeterModalProps } from './AddMeterModal.types';

const TYPES = [
  {
    value: MeterType.Water,
    label: 'dictionaries.meter_type.Water',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: MeterType.Gas,
    label: 'dictionaries.meter_type.Gas',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: MeterType.Electricity,
    label: 'dictionaries.meter_type.Electricity',
    icon: <SquareIcon color="inherit" />,
  },
];
export const AddMeterModal = ({ isOpened, onClose, onSubmit }: AddMeterModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.services.add_meter_modal_title' })}
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
              <RadioGroupField xs={4} name="service.meter.type" options={TYPES} />
              <GenericField name="service.meter.name" label="pim_details.services.meter_name" />
            </DialogContent>
            <DialogActions>
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
                {formatMessage({ id: 'pim_details.services.add_meter' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
