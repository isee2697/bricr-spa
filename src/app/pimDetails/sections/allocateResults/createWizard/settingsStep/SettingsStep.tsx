import React, { useState } from 'react';
import clsx from 'classnames';

import { AutosaveForm } from 'ui/organisms';
import { Box, Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CheckboxField, GenericField, QuantityField } from 'form/fields';
import { ArrowRightIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { CreateWizardStepProps } from '../CreateWizard.types';

import { useStyles } from './SettingsStep.styles';
import { PriceCondition } from './SettingsStep.types';

export const SettingsStep = ({ onNextStep }: CreateWizardStepProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isUsingSalesSettings, setIsUsingSalesSettings] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  const priceConditions = Object.keys(PriceCondition).map(key => ({
    label: formatMessage({ id: `dictionaries.price_condition.${key}` }),
    value: key,
  }));

  return (
    <Box width="100%">
      <Card className={classes.root}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.allocate_results.settings.title' })}</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isUsingSalesSettings}
                  onChange={() => setIsUsingSalesSettings(!isUsingSalesSettings)}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'pim_details.allocate_results.settings.use_sales_settings' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
          </Box>
          <Box>
            <AutosaveForm onSave={handleSave}>
              <Grid item xs={12}>
                <Box className={classes.marginTopSix}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.name',
                    })}
                  </Typography>
                  <Box>
                    <GenericField
                      name="allocationName"
                      label={formatMessage({ id: 'pim_details.allocate_results.settings.name_of_allocation' })}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.name_of_allocation.placeholder',
                      })}
                      disabled={!isEditing}
                    />
                  </Box>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'pim_details.allocate_results.settings.candidates_assigned_per_property',
                      })}
                    </Typography>
                    <Typography variant="h5" className={classes.gray}>
                      {formatMessage({
                        id: 'pim_details.allocate_results.settings.provide_candidates_amount',
                      })}
                    </Typography>
                  </Box>
                  <Box>
                    <QuantityField
                      label={formatMessage({ id: 'pim_details.allocate_results.settings.people' })}
                      name="candidatesPerProperty"
                      disabled={!isEditing}
                    />
                  </Box>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.price_conditions',
                    })}
                  </Typography>
                  <Grid container>
                    {priceConditions.map((condition, index) => (
                      <Grid item xs={4} key={index}>
                        <CheckboxField
                          name={`priceConditions.${condition.value}`}
                          label={condition.label}
                          disabled={!isEditing}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.rental_price_calculation',
                    })}
                  </Typography>
                  <Box display="flex" alignItems="flex-end">
                    <GenericField
                      name="jointMonthIncomeMin"
                      label={formatMessage(
                        { id: 'pim_details.allocate_results.settings.joint_month_income' },
                        {
                          option: (
                            <Typography variant="h6" className={classes.bold}>
                              {formatMessage({ id: 'common.min' })}
                            </Typography>
                          ),
                        },
                      )}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.joint_month_income.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                    <ArrowRightIcon className={classes.arrowIcon} />
                    <GenericField
                      name="jointMonthlyRentMin"
                      label={formatMessage(
                        { id: 'pim_details.allocate_results.settings.monthly_rent_by_joint_income' },
                        {
                          option: (
                            <Typography variant="h6" className={classes.bold}>
                              {formatMessage({ id: 'common.min' })}
                            </Typography>
                          ),
                        },
                      )}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.joint_month_income.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                    <Typography variant="h5" className={clsx(classes.gray, classes.equalIcon)}>
                      =
                    </Typography>
                    <GenericField
                      name="factorMin"
                      label={formatMessage({ id: 'pim_details.allocate_results.settings.factor' })}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.factor.placeholder',
                      })}
                      disabled={!isEditing}
                    />
                  </Box>
                  <Grid container>
                    <Grid item xs={4}>
                      <GenericField
                        name="jointAnnualIncomeMin"
                        label={formatMessage(
                          { id: 'pim_details.allocate_results.settings.joint_annual_income' },
                          {
                            option: (
                              <Typography variant="h6" className={classes.bold}>
                                {formatMessage({ id: 'common.min' })}
                              </Typography>
                            ),
                          },
                        )}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.joint_annual_income.placeholder',
                        })}
                        InputProps={{ endAdornment: <EuroIcon /> }}
                        className={classes.annualIncome}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                  <Box display="flex" alignItems="flex-end">
                    <GenericField
                      name="jointMonthIncomeMax"
                      label={formatMessage(
                        { id: 'pim_details.allocate_results.settings.joint_month_income' },
                        {
                          option: (
                            <Typography variant="h6" className={classes.bold}>
                              {formatMessage({ id: 'common.max' })}
                            </Typography>
                          ),
                        },
                      )}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.joint_month_income.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                    <ArrowRightIcon className={classes.arrowIcon} />
                    <GenericField
                      name="jointMonthlyRentMax"
                      label={formatMessage(
                        { id: 'pim_details.allocate_results.settings.monthly_rent_by_joint_income' },
                        {
                          option: (
                            <Typography variant="h6" className={classes.bold}>
                              {formatMessage({ id: 'common.max' })}
                            </Typography>
                          ),
                        },
                      )}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.joint_month_income.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                    <Typography variant="h5" className={clsx(classes.gray, classes.equalIcon)}>
                      =
                    </Typography>
                    <GenericField
                      name="factorMax"
                      label={formatMessage({ id: 'pim_details.allocate_results.settings.factor' })}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.settings.factor.placeholder',
                      })}
                      disabled={!isEditing}
                    />
                  </Box>
                  <Grid container>
                    <Grid item xs={4}>
                      <GenericField
                        name="jointAnnualIncomeMax"
                        label={formatMessage(
                          { id: 'pim_details.allocate_results.settings.joint_annual_income' },
                          {
                            option: (
                              <Typography variant="h6" className={classes.bold}>
                                {formatMessage({ id: 'common.max' })}
                              </Typography>
                            ),
                          },
                        )}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.joint_annual_income.placeholder',
                        })}
                        InputProps={{ endAdornment: <EuroIcon /> }}
                        className={classes.annualIncome}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.maximum_mortgage_calculation',
                    })}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <GenericField
                        name="maximumMortgageFactor"
                        label={formatMessage({ id: 'pim_details.allocate_results.settings.factor' })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.factor.placeholder',
                        })}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GenericField
                        name="maximumMortgageMarge"
                        label={formatMessage({ id: 'pim_details.allocate_results.settings.marge' })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.marge.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.joint_income_calculation',
                    })}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <GenericField
                        name="jointLowestIncomePercentage"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.lowest_income_percentage',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.lowest_income_percentage.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GenericField
                        name="jointIncludePensionIncome"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.include_pension_income',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.include_pension_income.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.first_person_from_couple',
                    })}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <GenericField
                        name="firstPersonAvailableCapitalCount"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.available_capital_count',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.available_capital_count.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GenericField
                        name="firstPersonDeductMonthlyObligations"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.deduct_monthly_obligations',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.deduct_monthly_obligations.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.second_person_from_couple',
                    })}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <GenericField
                        name="secondPersonAvailableCapitalCount"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.available_capital_count',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.available_capital_count.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GenericField
                        name="secondPersonDeductMonthlyObligations"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.settings.deduct_monthly_obligations',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.deduct_monthly_obligations.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <CheckboxField
                    name={`assignPeopleAboveMaximumJointIncome`}
                    label={formatMessage({
                      id: 'pim_details.allocate_results.settings.assign_people_above_maximum_joint_income',
                    })}
                    disabled={!isEditing}
                  />
                </Box>
                <Box className={classes.marginTopFour}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.allocate_results.settings.calculate_joint_income_with_distribution_threshold',
                    })}
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={5}>
                      <GenericField
                        name="jointIncomeWithDistributionIncome"
                        label={formatMessage(
                          {
                            id: 'pim_details.allocate_results.settings.different_lowest_highest_income',
                          },
                          {
                            option: (
                              <Typography variant="h6" className={classes.bold}>
                                {formatMessage({ id: 'common.if' })}
                              </Typography>
                            ),
                          },
                        )}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.different_lowest_highest_income.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GenericField
                        name="jointIncomeWithDistributionFictitiousIncome"
                        label={formatMessage(
                          {
                            id: 'pim_details.allocate_results.settings.fictitious_income_with_highest_income',
                          },
                          {
                            option: (
                              <Typography variant="h6" className={classes.bold}>
                                {formatMessage({ id: 'common.then' })}
                              </Typography>
                            ),
                          },
                        )}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.settings.fictitious_income_with_highest_income.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </AutosaveForm>
          </Box>
        </CardContent>
      </Card>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Button variant="outlined" color="primary" className={classes.btnAction} onClick={onNextStep}>
          {formatMessage({ id: 'pim_details.allocate_results.steps.go_to_step2' })}
        </Button>
      </Box>
    </Box>
  );
};
