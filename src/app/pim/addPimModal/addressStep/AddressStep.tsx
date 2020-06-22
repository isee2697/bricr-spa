import React from 'react';
import { useFormState } from 'react-final-form';

import { DialogContent, DialogActions, Button, Grid } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { requireValidator } from 'form/validators';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { AddPimStepProps } from '../AddPimModal.types';

export const AddressStep = ({ onPrev, onNext }: AddPimStepProps) => {
  const { formatMessage } = useLocale();
  const { submitting } = useFormState({ subscription: { submitting: true, submitErrors: true } });

  return (
    <>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GenericField
              name="street"
              label="add_pim.address.street"
              placeholder="add_pim.address.street_placeholder"
              validate={[requireValidator]}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericField
              name="houseNumber"
              label="add_pim.address.house_number"
              placeholder="add_pim.address.house_number_placeholder"
              validate={[requireValidator]}
              size="medium"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GenericField
              name="postalCode"
              label="add_pim.address.postal_code"
              placeholder="add_pim.address.postal_code_placeholder"
              validate={[requireValidator]}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericField
              name="city"
              label="add_pim.address.city"
              placeholder="add_pim.address.city_placeholder"
              validate={[requireValidator]}
              size="medium"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="ghost" size="small" onClick={onPrev}>
          {formatMessage({ id: 'add_pim.controls.previously_step' })}
        </Button>
        <SubmitButton
          type="submit"
          startIcon={<AddIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          isLoading={submitting}
        >
          {formatMessage({ id: 'pim.add' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
