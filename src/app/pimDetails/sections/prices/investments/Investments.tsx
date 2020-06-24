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

export const Investments = ({ title, isSidebarVisible, onOpenSidebar, onSave, investment }: InvestmentsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
      <Page
        title={formatMessage({ id: 'pim_details.prices.investments.title' })}
        onSave={() => Promise.resolve({ error: false })}
        placeholder="pim_details.prices.description_placeholder"
        name="description"
      >
        <Grid item xs={12}>
          <FormSection title={formatMessage({ id: 'pim_details.prices.investments.title' })} isEditable>
            {editing => (
              <AutosaveForm
                initialValues={investment ?? {}}
                onSave={onSave}
                mutators={{ ...arrayMutators }}
                subscription={{}}
              >
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="netRentalIncome"
                    label={formatMessage({ id: 'pim_details.prices.investments.rentalIncome' })}
                    placeholder={formatMessage({ id: 'pim_details.prices.price_placeholder' })}
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled
                  />
                  <Input
                    name="grossRentalIncome"
                    label={formatMessage({ id: 'pim_details.prices.investments.grossRentalIncome' })}
                    placeholder={formatMessage({ id: 'pim_details.prices.price_placeholder' })}
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="economicRentalValue"
                    label={formatMessage({ id: 'pim_details.prices.investments.economicRentalValue' })}
                    placeholder={formatMessage({ id: 'pim_details.prices.price_placeholder' })}
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled={!editing}
                  />
                  <Input
                    name="averageMaturity"
                    label={formatMessage({ id: 'pim_details.prices.investments.averageMaturity' })}
                    placeholder={formatMessage({ id: 'pim_details.prices.price_placeholder' })}
                    InputProps={{ endAdornment: <EuroIcon /> }}
                    disabled={!editing}
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Checkbox
                    name="rentIndexed"
                    label={formatMessage({ id: 'pim_details.prices.investments.rentIndexed' })}
                    disabled={!editing}
                  />
                  <Checkbox
                    name="splitApartment"
                    label={formatMessage({ id: 'pim_details.prices.investments.splitApartment' })}
                    disabled={!editing}
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="averageVacancyPercentage"
                    label={formatMessage({ id: 'pim_details.prices.investments.averageVacancyPercentage' })}
                    disabled={!editing}
                    InputProps={{ endAdornment: <PercentIcon /> }}
                  />
                  <Input
                    name="numberOfRentableUnits"
                    label={formatMessage({ id: 'pim_details.prices.investments.numberOfRentableUnits' })}
                    disabled={!editing}
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="amountOfTenants"
                    label={formatMessage({ id: 'pim_details.prices.investments.amountOfTenants' })}
                    disabled={!editing}
                  />
                  <Input
                    name="remainingTermContacts"
                    label={formatMessage({ id: 'pim_details.prices.investments.remainingTermContacts' })}
                    disabled={!editing}
                    InputProps={{
                      endAdornment: (
                        <Typography variant="h4">
                          {formatMessage({ id: 'pim_details.prices.investments.months' })}
                        </Typography>
                      ),
                    }}
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="vacancySquareMeters"
                    label={formatMessage({ id: 'pim_details.prices.investments.vacancySquareMeters' })}
                    disabled={!editing}
                    InputProps={{ endAdornment: <SquareMeterIcon /> }}
                  />
                </Grid>
              </AutosaveForm>
            )}
          </FormSection>
        </Grid>
      </Page>
    </>
  );
};
