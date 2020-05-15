import React from 'react';
import { Form } from 'react-final-form';

import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { useStyles } from '../General.styles';

export const AddressForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection
      title={formatMessage({ id: AppMessages['pim_details.general.address_information.title'] })}
      isExpandable
    >
      {editing => (
        <Form onSubmit={() => {}}>
          {({ handleSubmit }) => (
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
                  name="city"
                  label="pim_details.general.address_information.city"
                  placeholder="pim_details.general.address_information.city_placeholder"
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
                  name="zipcode"
                  label="pim_details.general.address_information.zipcode"
                  placeholder="pim_details.general.address_information.zipcode_placeholder"
                  validate={[requireValidator]}
                  disabled={!editing}
                />
              </Grid>
            </Grid>
          )}
        </Form>
      )}
    </FormSection>
  );
};
