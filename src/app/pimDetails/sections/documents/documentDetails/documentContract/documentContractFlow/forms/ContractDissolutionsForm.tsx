import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { SquareIcon } from 'ui/atoms/icons';
import { MortgageType } from '../DocumentContractFlow.types';

export function ContractDissolutionsForm() {
  const { formatMessage } = useLocale();

  const percentage = 10;
  const price = '23,500.00';

  const listMortgage = Object.keys(MortgageType).map(type => ({
    label: `pim_details.mortgage_type.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.dissolutions',
      })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.check_if_no_financing' })}
              </Typography>
            }
          />

          <Box mt={1} />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="fineInDefault"
                label="pim_details.documents.fine_in_default"
                size="medium"
                InputProps={{ endAdornment: <Typography>€</Typography> }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box mt={4} />
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.guarentee.placeholder' })} <br />
                <b>{percentage}%</b> {formatMessage({ id: 'pim_details.documents.salesprice' })}
                {' = '}
                <b>€ {price}</b>
              </Typography>
            </Grid>
          </Grid>

          <Box mt={1} />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.date_of_financing',
                })}
                name="financingDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="fundingAmount"
                label="pim_details.documents.amount_of_funding"
                size="medium"
                InputProps={{ endAdornment: <Typography>€</Typography> }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box mt={4} />
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.guarentee.placeholder' })} <b>{percentage}%</b>{' '}
                {formatMessage({ id: 'pim_details.documents.salesprice' })}
                {' = '}
                <b>€ {price}</b>
              </Typography>
            </Grid>
          </Grid>

          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="grossAnnualCharge"
                label="pim_details.documents.gross_annual_charge"
                size="medium"
                InputProps={{ endAdornment: <Typography>€</Typography> }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="maxGrossInterest"
                label="pim_details.documents.max_gross_interest"
                size="medium"
                InputProps={{ endAdornment: <Typography>%</Typography> }}
              />
            </Grid>
          </Grid>

          <Box mt={1} />
          <FormSubSectionHeader
            title={formatMessage({ id: `pim_details.documents.type_of_mortgage` })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={1} />
          <RadioGroupField disabled={!editing} name="mortgageType" options={listMortgage} />

          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="dayDissolution"
                label="pim_details.documents.day_dissolution"
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GenericField
                disabled={!editing}
                name="dayCommitment"
                label="pim_details.documents.day_commitment"
                size="medium"
              />
            </Grid>
          </Grid>

          <Box mt={1} />
          <GenericField disabled={!editing} name="note" label="pim_details.documents.note" size="medium" />

          <Box mt={1} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.bank_cancellation_date',
                })}
                name="bankCancellationDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.reservation_date',
                })}
                name="reservationDate"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
          </Grid>

          <Box mt={1} />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.check_if_housing_permit' })}
              </Typography>
            }
          />

          <Box mt={1} />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.check_if_change_zoning' })}
              </Typography>
            }
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
}
