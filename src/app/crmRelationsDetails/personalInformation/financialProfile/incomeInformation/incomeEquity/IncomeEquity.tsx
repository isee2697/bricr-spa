import React from 'react';
import { Typography, Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './IncomeEquity.styles';

export const IncomeEquity = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h5">
            {formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.incomeEquity.income',
            })}
          </Typography>
          <GenericField
            className={classes.formField}
            name="incomeEquity.income"
            placeholder="crm.details.personal_information_financial_profile.income_information.incomeEquity.income.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">
            {formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.incomeEquity.extra_information',
            })}
          </Typography>
          <GenericField
            className={classes.formField}
            name="incomeEquity.extraInformation"
            placeholder="crm.details.personal_information_financial_profile.income_information.incomeEquity.extra_information.placeholder"
          />
        </Grid>
      </Grid>
    </>
  );
};
