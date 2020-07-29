import React from 'react';

import { DropdownField, GenericField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale, useCountries } from 'hooks';

export const InvoiceDetails = () => {
  const { countryOptions } = useCountries();
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.invoice.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => (
        <>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                name="invoiceDetails.street"
                label="project_details.general.address.street"
                placeholder="project_details.general.address.street_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={3}>
              <GenericField
                name="invoiceDetails.houseNumber"
                label="project_details.general.address.house_number"
                placeholder="project_details.general.address.house_number_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={3}>
              <GenericField
                name="invoiceDetails.additionalNumber"
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
                name="invoiceDetails.zipCode"
                label="project_details.general.address.postal_code"
                placeholder="project_details.general.address.postal_code_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                name="invoiceDetails.city"
                label="project_details.general.address.city"
                placeholder="project_details.general.address.city_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DropdownField
                items={countryOptions}
                placeholder="project_details.general.address.country_placeholder"
                name="invoiceDetails.country"
                label="project_details.general.address.country"
                disabled={!inEditMode}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <GenericField
                name="invoiceDetails.projectInvoiceNumber"
                label="project_details.characteristics.invoice.number"
                placeholder="project_details.characteristics.invoice.number_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                name="invoiceDetails.contactPerson"
                label="project_details.characteristics.invoice.contact_person"
                placeholder="project_details.characteristics.invoice.contact_person_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <GenericField
                name="invoiceDetails.description"
                label="project_details.characteristics.invoice.description"
                placeholder="project_details.characteristics.invoice.description_placeholder"
                size="medium"
                disabled={!inEditMode}
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};
