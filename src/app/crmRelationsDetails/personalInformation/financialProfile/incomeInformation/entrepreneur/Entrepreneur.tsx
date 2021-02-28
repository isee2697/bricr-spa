import React from 'react';

import { Grid } from 'ui/atoms';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { EntrepreneurType } from 'api/types';
import { FormSubSectionHeader } from 'ui/molecules';

import { useStyles } from './Entrepreneur.styles';

export const Entrepreneur = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const typeOfEntrepeneurs: RadioDataType[] = Object.keys(EntrepreneurType).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.entrepreneur_type.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <>
      <GenericField
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.income_from_business',
        })}
        className={classes.formField}
        name="entrepreneurIncome.incomePerYear"
        placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.income_from_business.placeholder"
        InputProps={{ endAdornment: <EuroIcon /> }}
        type="number"
      />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.working_hours_per_month',
            })}
            className={classes.formField}
            name="entrepreneurIncome.workingHoursPerMonth"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.working_hours_per_month.placeholder"
            type="number"
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.years_as_independent',
            })}
            className={classes.formField}
            name="entrepreneurIncome.yearsAsIndependent"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.years_as_independent.placeholder"
            type="number"
          />
        </Grid>
      </Grid>
      <GenericField
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.extra_information',
        })}
        className={classes.formField}
        name="information"
        placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.extra_information.placeholder"
      />
      <CheckboxField
        name="entrepreneurIncome.companyCar"
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.company_car',
        })}
      />
      <CheckboxField
        name="entrepreneurIncome.companyBike"
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.company_bike',
        })}
      />
      <CheckboxField
        name="entrepreneurIncome.pastPensionAge"
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.past_pension_age',
        })}
      />
      <CheckboxField
        name="entrepreneurIncome.smeProfitExemption"
        label={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.sme_profit_exemption',
        })}
      />
      <FormSubSectionHeader
        title={formatMessage({
          id: 'crm.details.personal_information_financial_profile.income_information.entrepreneur.type_of_entrepreneur',
        })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField name="entrepreneurIncome.entrepreneurType" options={typeOfEntrepeneurs} />
    </>
  );
};
