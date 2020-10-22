import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  InputAdornment,
  Switch,
  Typography,
} from 'ui/atoms';
import { useLocale } from 'hooks';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { CheckboxGroupField, DatePickerField, GenericField, QuantityField, RadioGroupField } from 'form/fields';
import { CubicMeterIcon, EuroIcon, MeterIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { useStyles } from './Profile.styles';
import { gardenSituation, property, propertyChoice, rentalPeriod, typeOfConstruction } from './dictionaries';

export const Profile = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const initialValues = {
    profileFromDate: '',
    profileToDate: '',
    buyFrom: 0,
    buyTo: 0,
    rentFrom: 0,
    rentTo: 0,
    constructionTypes: [],
    preferredRentalPeriod: '',
    preferredStartingDate: '',
    extraInformation: '',
    propertyType: '',
    category: '',
    minimalAmountOfBedrooms: 0,
    minimalSurface: 0,
    minimalVolume: 0,
    constructionFrom: '',
    constructionTo: '',
    maximumAmountOfFloors: 0,
    plotWidth: 0,
    plotLength: 0,
    plotSurface: 0,
    gardenSituations: [],
    gardenWidth: 0,
    gardenLength: 0,
    gardenSurface: 0,
    garageMinimalCapacity: 0,
  };

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  const typeOfConstructions: CheckboxDataType[] = typeOfConstruction.map(type => ({
    label: formatMessage({ id: type.label }),
    value: type.value,
    icon: type.icon,
  }));

  const rentalPeriods: RadioDataType[] = rentalPeriod.map(period => ({
    label: formatMessage({ id: period.label }),
    value: period.value,
    icon: period.icon,
  }));

  const properties: RadioDataType[] = property.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
  }));

  const propertyChoices: RadioDataType[] = propertyChoice.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
    icon: item.icon,
  }));

  const gardenSituations: CheckboxDataType[] = gardenSituation.map(item => ({
    label: formatMessage({ id: item.label }),
    value: item.value,
    icon: item.icon,
  }));

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.profile_name.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues} mutators={{ ...arrayMutators }}>
          <Grid item xs={12}>
            <Typography variant="h5">
              {formatMessage({
                id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.title',
              })}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.profile_from',
                  })}
                  name="profileFromDate"
                  disabled={!isEditing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
              <Grid item xs={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.profile_to',
                  })}
                  name="profileToDate"
                  disabled={!isEditing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.buy_from',
                  })}
                  name="buyFrom"
                  placeholder="35000"
                  disabled={!isEditing}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EuroIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.buy_to',
                  })}
                  name="buyTo"
                  placeholder="35000"
                  disabled={!isEditing}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EuroIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.rent_from',
                  })}
                  name="rentFrom"
                  placeholder="35000"
                  disabled={!isEditing}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EuroIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.profile_duration.rent_to',
                  })}
                  name="rentTo"
                  placeholder="35000"
                  disabled={!isEditing}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EuroIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.type_of_construction.title',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopTwo}>
                <CheckboxGroupField
                  xs={2}
                  name="constructionTypes"
                  options={typeOfConstructions}
                  disabled={!isEditing}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.preferred_rental_period.title',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopTwo}>
                <RadioGroupField xs={2} name="preferredRentalPeriod" options={rentalPeriods} disabled={!isEditing} />
              </Box>
              <Box className={classes.marginTopTwo}>
                <DatePickerField
                  label={formatMessage({
                    id:
                      'crm.details.personal_information_match_profile.profile_name.preferred_rental_period.preferred_starting_date',
                  })}
                  name="preferredStartingDate"
                  disabled={!isEditing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Box>
              <Grid container className={classes.marginTopFour}>
                <Grid item xs={4}>
                  <GenericField
                    name="extraInformation"
                    label={formatMessage({ id: 'common.extra_information' })}
                    placeholder={formatMessage({ id: 'common.put_information_here' })}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.property_type.title',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.select_category_and_define_choice',
                  })}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <RadioGroupField
                  xs={12}
                  name="propertyType"
                  options={properties}
                  disabled={!isEditing}
                  classes={{ group: classes.propertyRadioGroup, groupItem: classes.propertyRadioGroupItem }}
                />
                <RadioGroupField
                  xs={2}
                  name="category"
                  options={propertyChoices}
                  disabled={!isEditing}
                  classes={{ group: classes.propertyChoiceGroup }}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.size_and_area.title',
                })}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id:
                        'crm.details.personal_information_match_profile.profile_name.size_and_area.minimal_amount_of_bedrooms',
                    })}
                    name="minimalAmountOfBedrooms"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.size_and_area.minimal_surface',
                    })}
                    name="minimalSurface"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SquareMeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.size_and_area.minimal_volume',
                    })}
                    name="minimalVolume"
                    placeholder="e.g. 21"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CubicMeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.construction_year.title',
                })}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <DatePickerField
                    label={formatMessage({
                      id:
                        'crm.details.personal_information_match_profile.profile_name.construction_year.construction_from',
                    })}
                    name="constructionFrom"
                    disabled={!isEditing}
                    placeholder={formatMessage({ id: 'common.date_picker' })}
                    isYearPicker
                  />
                </Grid>
                <Grid item xs={4}>
                  <DatePickerField
                    label={formatMessage({
                      id:
                        'crm.details.personal_information_match_profile.profile_name.construction_year.construction_to',
                    })}
                    name="constructionTo"
                    disabled={!isEditing}
                    placeholder={formatMessage({ id: 'common.date_picker' })}
                    isYearPicker
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.floors.title',
                })}
              </Typography>
              <Grid container className={classes.marginTopTwo}>
                <Grid item xs={4}>
                  <Typography variant="h6">
                    {formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.floors.maximum_amount_of_floors',
                    })}
                  </Typography>
                  <Box className={classes.marginTopTwo}>
                    <QuantityField
                      label={formatMessage({
                        id: 'common.quantity',
                      })}
                      name="maximumAmountOfFloors"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.plot.title',
                })}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.plot.width',
                    })}
                    name="plotWidth"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.plot.length',
                    })}
                    name="plotLength"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.plot.plot_surface',
                    })}
                    name="plotSurface"
                    placeholder="e.g. 21"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SquareMeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_match_profile.profile_name.garden_situation.title',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <CheckboxGroupField xs={2} name="gardenSituations" options={gardenSituations} disabled={!isEditing} />
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.garden.title',
                })}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.garden.width',
                    })}
                    name="gardenWidth"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.garden.length',
                    })}
                    name="gardenLength"
                    placeholder="e.g. 14"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    label={formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.garden.garden_surface',
                    })}
                    name="gardenSurface"
                    placeholder="e.g. 21"
                    disabled={!isEditing}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SquareMeterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_match_profile.profile_name.garage.title',
                })}
              </Typography>
              <Grid container className={classes.marginTopTwo}>
                <Grid item xs={4}>
                  <Typography variant="h6">
                    {formatMessage({
                      id: 'crm.details.personal_information_match_profile.profile_name.garage.minimal_capacity',
                    })}
                  </Typography>
                  <Box className={classes.marginTopTwo}>
                    <QuantityField
                      label={formatMessage({
                        id: 'common.car',
                      })}
                      name="garageMinimalCapacity"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
