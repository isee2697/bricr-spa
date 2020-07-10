import React from 'react';

import { Grid } from 'ui/atoms';
import { DropdownField, GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { AddressStepFormProps } from '../AddressStep.types';
import { useCountries } from 'hooks';

export const NewConstructionAddress = ({ inEditMode = true }: AddressStepFormProps) => {
  const { countryOptions } = useCountries();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GenericField
            name="name"
            label="project_details.general.address.name"
            placeholder="project_details.general.address.name_placeholder"
            validate={[requireValidator]}
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={12}>
          <GenericField
            name="additionalName"
            label="project_details.general.address.additional_name"
            placeholder="project_details.general.address.name_placeholder"
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <GenericField
            name="street"
            label="project_details.general.address.street"
            placeholder="project_details.general.address.street_placeholder"
            validate={[requireValidator]}
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={3}>
          <GenericField
            name="houseNumber"
            label="project_details.general.address.house_number"
            placeholder="project_details.general.address.house_number_placeholder"
            validate={[requireValidator]}
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={3}>
          <GenericField
            name="additionalHouseNumber"
            label="project_details.general.address.addition"
            placeholder="project_details.general.address.addition_placeholder"
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GenericField
            name="zipCode"
            label="project_details.general.address.postal_code"
            placeholder="project_details.general.address.postal_code_placeholder"
            validate={[requireValidator]}
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GenericField
            name="city"
            label="project_details.general.address.city"
            placeholder="project_details.general.address.city_placeholder"
            validate={[requireValidator]}
            size="medium"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DropdownField
            validate={[requireValidator]}
            items={countryOptions}
            placeholder="project_details.general.address.country_placeholder"
            name="country"
            label="project_details.general.address.country"
            disabled={!inEditMode}
          />
        </Grid>
      </Grid>
    </>
  );
};
