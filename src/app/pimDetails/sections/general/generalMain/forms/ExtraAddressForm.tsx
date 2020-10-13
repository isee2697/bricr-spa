import React from 'react';
import { Grid, Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { useLocale } from 'hooks';

export const ExtraAddressForm = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.general.extra_address_information.title' })}
      isExpandable
      isInitExpanded={false}
    >
      {editing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.general.extra_address_information.plot_information' })}
          />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                name="extraAddress.plotNumber"
                label="pim_details.general.extra_address_information.plot_number"
                placeholder="pim_details.general.extra_address_information.plot_number_placeholder"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <GenericField
                name="extraAddress.plotNumberAddition"
                label="pim_details.general.extra_address_information.plot_number_addition"
                placeholder="pim_details.general.extra_address_information.plot_number_addition_placeholder"
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Box mb={3} />

          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.general.extra_address_information.house_number_series' })}
          />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                name="extraAddress.houseNumberStart"
                label="pim_details.general.extra_address_information.house_number_start"
                placeholder="pim_details.general.extra_address_information.house_number_start_placeholder"
                type="number"
                validate={[requireValidator]}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={6}>
              <GenericField
                name="extraAddress.houseNumberEnd"
                label="pim_details.general.extra_address_information.house_number_end"
                placeholder="pim_details.general.extra_address_information.house_number_end_placeholder"
                type="number"
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
