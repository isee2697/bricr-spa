import React from 'react';
import { Grid } from 'ui/atoms';
import { CheckboxGroupField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { CompanyTraffic, EntrepreneurOption, TypeOfEntrepeneur } from '../IncomeInformation.types';
import { CheckboxDataType } from 'ui/molecules/filters/Filters.types';

import { useStyles } from './Entrepreneur.styles';

export const Entrepreneur = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const typeOfEntrepeneurs: RadioDataType[] = Object.keys(TypeOfEntrepeneur).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.entrepreneur_type.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  const companyTraffics: CheckboxDataType[] = Object.keys(CompanyTraffic).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.company_traffic.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  const entrepreneurExtraOptions: CheckboxDataType[] = Object.keys(EntrepreneurOption).map(key => ({
    label: formatMessage({ id: `dictionaries.financial_profile.entrepreneur_extra.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <RadioGroupField
            name="entrepreneur.typeOfEntrepreneur"
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.type_of_entrepreneur',
            })}
            options={typeOfEntrepeneurs}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CheckboxGroupField name="entrepreneur.companyTraffic" options={companyTraffics} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CheckboxGroupField name="entrepreneur.entrepreneurExtra" options={entrepreneurExtraOptions} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.income_from_business',
            })}
            className={classes.formField}
            name="entrepreneur.incomeFromBusiness"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.income_from_business.placeholder"
            InputProps={{ endAdornment: <EuroIcon /> }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.working_hours_per_month',
            })}
            className={classes.formField}
            name="entrepreneur.workingHoursPerMonth"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.working_hours_per_month.placeholder"
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.years_as_independent',
            })}
            className={classes.formField}
            name="entrepreneur.yearsAsIndependent"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.years_as_independent.placeholder"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <GenericField
            label={formatMessage({
              id:
                'crm.details.personal_information_financial_profile.income_information.entrepreneur.extra_information',
            })}
            className={classes.formField}
            name="entrepreneur.workingHoursPerMonth"
            placeholder="crm.details.personal_information_financial_profile.income_information.entrepreneur.extra_information.placeholder"
          />
        </Grid>
      </Grid>
    </>
  );
};
