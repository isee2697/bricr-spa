import React from 'react';

import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';

export const PimAddress = () => {
  return (
    <>
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
    </>
  );
};
