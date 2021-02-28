import React from 'react';

import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './IncomeEquity.styles';

export const IncomeEquity = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <GenericField
          className={classes.formField}
          label={formatMessage({
            id: 'crm.details.personal_information_financial_profile.income_information.incomeEquity.income',
          })}
          name="equityIncome.income"
          placeholder="crm.details.personal_information_financial_profile.income_information.incomeEquity.income.placeholder"
          InputProps={{ endAdornment: <EuroIcon /> }}
          type="number"
        />
      </Grid>
      <Grid item xs={8}>
        <GenericField
          className={classes.formField}
          label={formatMessage({
            id: 'crm.details.personal_information_financial_profile.income_information.incomeEquity.extra_information',
          })}
          name="information"
          placeholder="crm.details.personal_information_financial_profile.income_information.incomeEquity.extra_information.placeholder"
        />
      </Grid>
    </Grid>
  );
};
