import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from 'ui/atoms';
import { ArrowDownIcon, SearchIcon, SquareIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField, CheckboxGroupField, DatePickerField, GenericField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { HomeSituation, PersonRole, TypeOfEmployment } from 'api/types';
import { useLocale } from 'hooks';
import { useStyles } from '../../FilteringPeopleStep.styles';

export const General = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  const homeSituations: CheckboxDataType[] = Object.keys(HomeSituation).map(key => ({
    label: formatMessage({ id: `dictionaries.home_situation.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  const typeOfEmployments: CheckboxDataType[] = Object.keys(TypeOfEmployment).map(key => ({
    label: formatMessage({ id: `dictionaries.type_of_employment.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  const roles: CheckboxDataType[] = Object.keys(PersonRole).map(key => ({
    label: formatMessage({ id: `dictionaries.person_role.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  const handleChangeResidenceKey = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'project_details.allocate_results.filtering_people.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton variant="roundedContained" aria-label="open" size="small" onClick={() => {}}>
              <ArrowDownIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h3">
                {formatMessage({
                  id: 'project_details.allocate_results.filtering_people.interest_details',
                })}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    name="preferenceInterestNumberMin"
                    label={formatMessage(
                      { id: 'project_details.allocate_results.filtering_people.number_preference_interest' },
                      {
                        option: (
                          <Typography variant="h6" className={classes.bold}>
                            {formatMessage({ id: 'common.min' })}
                          </Typography>
                        ),
                      },
                    )}
                    placeholder={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.number_preference_interest.placeholder',
                    })}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={4}>
                  <DatePickerField
                    label="project_details.allocate_results.filtering_people.registration_from"
                    name="interestRegistrationFrom"
                    placeholder="common.date_picker"
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={4}>
                  <DatePickerField
                    label="project_details.allocate_results.filtering_people.registration_to"
                    name="interestRegistrationTo"
                    placeholder="common.date_picker"
                    disabled={!isEditing}
                  />
                </Grid>
              </Grid>
              <Box className={classes.marginTopFour}>
                <CheckboxField
                  name="assignPeopleWithPropertyInterest"
                  label={formatMessage({
                    id: 'project_details.allocate_results.filtering_people.assign_people_with_property_interest',
                  })}
                  disabled={!isEditing}
                />
                <CheckboxField
                  name="assignPeopleWithObjectTypeInterest"
                  label={formatMessage({
                    id: 'project_details.allocate_results.filtering_people.assign_people_with_objecttype_interest',
                  })}
                  disabled={!isEditing}
                />
                <CheckboxField
                  name="assignPeopleWithProjectInterest"
                  label={formatMessage({
                    id: 'project_details.allocate_results.filtering_people.assign_people_with_project_interest',
                  })}
                  disabled={!isEditing}
                />
              </Box>
            </Box>
            <Box className={classes.marginTopFour}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'project_details.allocate_results.filtering_people.personal',
                })}
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={5}>
                  <GenericField
                    name="minimumFirstPersonCoupleAge"
                    label={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.minimal_age_first_person_couple',
                    })}
                    placeholder={formatMessage({
                      id:
                        'project_details.allocate_results.filtering_people.minimal_age_first_person_couple.placeholder',
                    })}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={5}>
                  <GenericField
                    name="minimumPartnerAge"
                    label={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.minimal_age_partner',
                    })}
                    placeholder={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.minimal_age_partner.placeholder',
                    })}
                    disabled={!isEditing}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_people.home_situation',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'common.choose_one_option_below',
                  })}
                </Typography>
              </Box>
              <Box className={classes.marginTopTwo}>
                <CheckboxGroupField name="homeSituation" options={homeSituations} />
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={5}>
                  <GenericField
                    name="adults"
                    label={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.adults',
                    })}
                    placeholder={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.adults.placeholder',
                    })}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={5}>
                  <GenericField
                    name="children"
                    label={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.children',
                    })}
                    placeholder={formatMessage({
                      id: 'project_details.allocate_results.filtering_people.children.placeholder',
                    })}
                    disabled={!isEditing}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_people.current_residence',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_people.search_one_or_more_properties_below',
                  })}
                </Typography>
              </Box>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder={formatMessage({
                  id: 'common.search',
                })}
                className={classes.searchField}
                onChange={handleChangeResidenceKey}
              />
            </Box>
          </Grid>
          <Box className={classes.marginTopFour}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h3">
                {formatMessage({
                  id: 'project_details.allocate_results.filtering_people.type_of_employment_first_person_in_couple',
                })}
              </Typography>
              <Typography variant="h5" className={classes.gray}>
                {formatMessage({
                  id: 'common.choose_one_option_below',
                })}
              </Typography>
            </Box>
            <Box className={classes.marginTopTwo}>
              <CheckboxGroupField name="firstPersonEmploymentType" options={typeOfEmployments} />
            </Box>
          </Box>
          <Box className={classes.marginTopFour}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h3">
                {formatMessage({
                  id: 'project_details.allocate_results.filtering_people.type_of_employment_second_person_in_couple',
                })}
              </Typography>
              <Typography variant="h5" className={classes.gray}>
                {formatMessage({
                  id: 'common.choose_one_option_below',
                })}
              </Typography>
            </Box>
            <Box className={classes.marginTopTwo}>
              <CheckboxGroupField name="secondPersonEmploymentType" options={typeOfEmployments} />
            </Box>
          </Box>
          <Box className={classes.marginTopFour}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h3">
                {formatMessage({
                  id: 'project_details.allocate_results.filtering_people.assign_also_to_persons_with_role',
                })}
              </Typography>
              <Typography variant="h5" className={classes.gray}>
                {formatMessage({
                  id: 'common.choose_one_option_below',
                })}
              </Typography>
            </Box>
            <Box className={classes.marginTopTwo}>
              <CheckboxGroupField name="assignPersonRole" options={roles} />
            </Box>
          </Box>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
