import React from 'react';
import arrayMutators from 'final-form-arrays';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Grid, Typography } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Input } from 'app/pimDetails/sections/prices/investments/formParts/Input';
import { Checkbox } from 'app/pimDetails/sections/prices/investments/formParts/Checkbox';
import { EuroIcon, PercentIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { InvestmentsProps } from './Investments.types';

export const Investments = ({ title, isSidebarVisible, onSidebarOpen, onSave, investment }: InvestmentsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <AutosaveForm
        initialValues={investment ?? undefined}
        onSave={onSave}
        mutators={{ ...arrayMutators }}
        subscription={{}}
      >
        <Page
          title={formatMessage({ id: 'pim_details.prices.investments.title' })}
          placeholder="pim_details.prices.description_placeholder"
          name="description"
          updatedBy={investment?.lastEditedBy}
          dateUpdated={investment?.dateUpdated}
        >
          <Grid item xs={12}>
            <FormSection title={formatMessage({ id: 'pim_details.prices.investments.title' })} isEditable>
              {editing => (
                <>
                  <Grid container direction="row" spacing={1}>
                    <Input
                      name="netRentalIncome"
                      label="pim_details.prices.investments.rentalIncome"
                      placeholder="pim_details.prices.price_placeholder"
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled
                      type="number"
                    />
                    <Input
                      name="grossRentalIncome"
                      label="pim_details.prices.investments.grossRentalIncome"
                      placeholder="pim_details.prices.price_placeholder"
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled
                      type="number"
                    />
                  </Grid>
                  <Grid container direction="row" spacing={1}>
                    <Input
                      name="economicRentalValue"
                      label="pim_details.prices.investments.economicRentalValue"
                      placeholder="pim_details.prices.price_placeholder"
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!editing}
                      type="number"
                    />
                    <Input
                      name="averageMaturity"
                      label="pim_details.prices.investments.averageMaturity"
                      placeholder="pim_details.prices.price_placeholder"
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!editing}
                      type="number"
                    />
                  </Grid>
                  <Grid container direction="row" spacing={1}>
                    <Checkbox
                      name="rentIndexed"
                      label="pim_details.prices.investments.rentIndexed"
                      disabled={!editing}
                    />
                    <Checkbox
                      name="splitApartment"
                      label="pim_details.prices.investments.splitApartment"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid container direction="row" spacing={1}>
                    <Input
                      name="averageVacancyPercentage"
                      label="pim_details.prices.investments.averageVacancyPercentage"
                      disabled={!editing}
                      InputProps={{ endAdornment: <PercentIcon /> }}
                      type="number"
                    />
                    <Input
                      name="numberOfRentableUnits"
                      label="pim_details.prices.investments.numberOfRentableUnits"
                      disabled={!editing}
                      type="number"
                    />
                  </Grid>
                  <Grid container direction="row" spacing={1}>
                    <Input
                      name="amountOfTenants"
                      label="pim_details.prices.investments.amountOfTenants"
                      disabled={!editing}
                      type="number"
                    />
                    <Input
                      name="remainingTermContacts"
                      label="pim_details.prices.investments.remainingTermContacts"
                      disabled={!editing}
                      InputProps={{
                        endAdornment: (
                          <Typography variant="h4">
                            {formatMessage({ id: 'pim_details.prices.investments.months' })}
                          </Typography>
                        ),
                      }}
                      type="number"
                    />
                  </Grid>
                  <Grid container direction="row" spacing={1}>
                    <Input
                      name="vacancySquareMeters"
                      label="pim_details.prices.investments.vacancySquareMeters"
                      disabled={!editing}
                      InputProps={{ endAdornment: <SquareMeterIcon /> }}
                      type="number"
                    />
                  </Grid>
                </>
              )}
            </FormSection>
          </Grid>
        </Page>
      </AutosaveForm>
    </>
  );
};
