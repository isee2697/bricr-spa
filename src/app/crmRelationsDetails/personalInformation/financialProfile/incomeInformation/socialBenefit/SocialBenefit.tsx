import React from 'react';
import { Grid } from 'ui/atoms';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { PeriodType } from '../../FinancialProfile.types';
import { TypeOfSocialBenefit } from '../IncomeInformation.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { useStyles } from './SocialBenefit.styles';

export const SocialBenefit = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const periods: DropdownItem[] = Object.keys(PeriodType).map(key => ({
    label: formatMessage({ id: `dictionaries.period.${key}` }),
    value: key,
  }));

  const typeOfSocialBenefits: RadioDataType[] = Object.keys(TypeOfSocialBenefit).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.social_benefit_type.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.social_benefit.gross_income',
            })}
            className={classes.formField}
            name="socialBenefit.grossIncome"
            placeholder="crm.details.personal_information_financial_profile.income_information.social_benefit.gross_income.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
          />
        </Grid>
        <Grid item xs={8}>
          <DropdownField
            items={periods}
            placeholder={formatMessage({ id: 'common.month' })}
            label={formatMessage({ id: 'common.period' })}
            name="socialBenefit.grossIncomePeriod"
            margin="dense"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.social_benefit.extra_information',
            })}
            className={classes.formField}
            name="socialBenefit.extraInformation"
            placeholder="crm.details.personal_information_financial_profile.income_information.social_benefit.extra_information.placeholder"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <RadioGroupField name="socialBenefit.typeOfSocialBenefit" options={typeOfSocialBenefits} />
        </Grid>
      </Grid>
    </>
  );
};
