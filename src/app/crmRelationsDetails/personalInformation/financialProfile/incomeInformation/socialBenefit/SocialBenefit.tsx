import React from 'react';

import { Grid } from 'ui/atoms';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon, BenefitIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { PeriodType } from '../../FinancialProfile.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SocialBenefitType } from 'api/types';

import { useStyles } from './SocialBenefit.styles';

export const SocialBenefit = ({ isEditing }: { isEditing: boolean }) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const periods: DropdownItem[] = Object.keys(PeriodType).map(key => ({
    label: formatMessage({ id: `dictionaries.period.${key}` }),
    value: key,
  }));

  const typeOfSocialBenefits: RadioDataType[] = Object.keys(SocialBenefitType).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.social_benefit_type.${key}` }),
    value: key,
    icon: <BenefitIcon />,
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
            name="socialBenefitIncome.income"
            placeholder="crm.details.personal_information_financial_profile.income_information.social_benefit.gross_income.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
            type="number"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={8}>
          <DropdownField
            items={periods}
            placeholder={formatMessage({ id: 'common.month' })}
            label={formatMessage({ id: 'common.period' })}
            name="socialBenefitIncome.incomePeriod"
            margin="dense"
            disabled={!isEditing}
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
            name="information"
            placeholder="crm.details.personal_information_financial_profile.income_information.social_benefit.extra_information.placeholder"
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <RadioGroupField
            name="socialBenefitIncome.socialBenefitType"
            options={typeOfSocialBenefits}
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
    </>
  );
};
