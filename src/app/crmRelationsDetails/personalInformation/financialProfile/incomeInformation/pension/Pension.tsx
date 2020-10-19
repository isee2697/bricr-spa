import React from 'react';

import { Grid } from 'ui/atoms';
import { DropdownField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { PeriodType } from '../../FinancialProfile.types';

import { useStyles } from './Pension.styles';

export const Pension = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const periods: DropdownItem[] = Object.keys(PeriodType).map(key => ({
    label: formatMessage({ id: `dictionaries.period.${key}` }),
    value: key,
  }));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.pension.gross_aow_benefit',
            })}
            className={classes.formField}
            name="pension.grossAowBenefit"
            placeholder="crm.details.personal_information_financial_profile.income_information.pension.gross_aow_benefit.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
          />
        </Grid>
        <Grid item xs={8}>
          <DropdownField
            items={periods}
            placeholder={formatMessage({ id: 'common.month' })}
            label={formatMessage({ id: 'common.period' })}
            name="pension.grossAowBenefitPeriod"
            margin="dense"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.pension.gross_pre_retirement_benefit',
            })}
            className={classes.formField}
            name="pension.grossPreRetirementBenefit"
            placeholder="crm.details.personal_information_financial_profile.income_information.pension.gross_pre_retirement_benefit.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
          />
        </Grid>
        <Grid item xs={8}>
          <DropdownField
            items={periods}
            placeholder={formatMessage({ id: 'common.month' })}
            label={formatMessage({ id: 'common.period' })}
            name="pension.grossPreRetirementBenefitPeriod"
            margin="dense"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <GenericField
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.pension.extra_information',
            })}
            className={classes.formField}
            name="pension.extraInformation"
            placeholder="crm.details.personal_information_financial_profile.income_information.pension.extra_information.placeholder"
          />
        </Grid>
      </Grid>
    </>
  );
};
