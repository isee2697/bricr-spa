import React from 'react';
import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';

export const AddressForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.general.address_information.title' })}
      isExpandable
      isInitExpanded={false}
    >
      {editing => (
        <>
          <Grid className={classes.textFields} container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                name="street"
                label="pim_details.general.address_information.street"
                placeholder="pim_details.general.address_information.street_placeholder"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <GenericField
                name="houseNumber"
                label="pim_details.general.address_information.house_number"
                placeholder="pim_details.general.address_information.house_number_placeholder"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <GenericField
                name="postalCode"
                label="pim_details.general.address_information.zipcode"
                placeholder="pim_details.general.address_information.zipcode_placeholder"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <GenericField
                name="city"
                label="pim_details.general.address_information.city"
                placeholder="pim_details.general.address_information.city_placeholder"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};
