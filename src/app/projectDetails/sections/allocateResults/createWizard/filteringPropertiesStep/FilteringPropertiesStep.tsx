import React, { useState } from 'react';

import { useLocale } from 'hooks';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from 'ui/atoms';
import { CloseIcon, EuroIcon, SearchIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField, GenericField } from 'form/fields';
import { CreateWizardStepProps } from '../CreateWizard.types';

import { useStyles } from './FilteringPropertiesStep.styles';

export const FilteringPropertiesStep = ({ onNextStep, onPreviousStep }: CreateWizardStepProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const projects = [
    {
      id: '0001',
      title: 'Huren in het groen, fase I',
      options: [
        {
          id: '0001',
          title: 'Objecttype 1',
        },
        {
          id: '0002',
          title: 'Objecttype 2',
        },
        {
          id: '0003',
          title: 'Objecttype 3',
        },
      ],
    },
    {
      id: '0002',
      title: 'Huren in het groen, fase II',
      options: [
        {
          id: '0001',
          title: 'Objecttype 1',
        },
        {
          id: '0002',
          title: 'Objecttype 2',
        },
        {
          id: '0003',
          title: 'Objecttype 3',
        },
        {
          id: '0004',
          title: 'Objecttype 4',
        },
        {
          id: '0005',
          title: 'Objecttype 5',
        },
        {
          id: '0006',
          title: 'Objecttype 6',
        },
      ],
    },
    {
      id: '0003',
      title: 'Huren in het groen, fase III',
      options: [
        {
          id: '0001',
          title: 'Objecttype 1',
        },
        {
          id: '0002',
          title: 'Objecttype 2',
        },
        {
          id: '0003',
          title: 'Objecttype 3',
        },
        {
          id: '0004',
          title: 'Objecttype 4',
        },
        {
          id: '0005',
          title: 'Objecttype 5',
        },
        {
          id: '0006',
          title: 'Objecttype 6',
        },
        {
          id: '0007',
          title: 'Objecttype 7',
        },
        {
          id: '0008',
          title: 'Objecttype 8',
        },
        {
          id: '0009',
          title: 'Objecttype 9',
        },
      ],
    },
  ];

  const properties = [
    {
      id: '0001',
      title: 'Bouwnummer 801',
    },
    {
      id: '0002',
      title: 'Bouwnummer 802',
    },
    {
      id: '0003',
      title: 'Bouwnummer 803',
    },
    {
      id: '0004',
      title: 'Bouwnummer 804',
    },
  ];

  const handleSave = async () => {
    return undefined;
  };

  const handleChangeProjectKey = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={formatMessage({ id: 'project_details.allocate_results.filtering_properties.title' })}
          action={
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
          }
        />
        <CardContent>
          <AutosaveForm onSave={handleSave}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_properties.price_range',
                  })}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="rentPriceFrom"
                      label={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_from',
                      })}
                      placeholder={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_from.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="rentPriceTill"
                      label={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_till',
                      })}
                      placeholder={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_till.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="salesPriceFrom"
                      label={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.sales_price_from',
                      })}
                      placeholder={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.sales_price_from.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="salesPriceTill"
                      label={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_till',
                      })}
                      placeholder={formatMessage({
                        id: 'project_details.allocate_results.filtering_properties.rent_price_till.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.marginTopFour}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_properties.published',
                  })}
                </Typography>
                <CheckboxField
                  name="onlyPublishedProperties"
                  label={formatMessage({
                    id: 'project_details.allocate_results.filtering_properties.only_published_properties',
                  })}
                />
              </Box>
              <Box className={classes.marginTopFour}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'project_details.allocate_results.filtering_properties.project',
                    })}
                  </Typography>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({
                      id: 'project_details.allocate_results.filtering_properties.search_one_or_more_projects_below',
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
                  placeholder={formatMessage({ id: 'common.search' })}
                  className={classes.searchField}
                  onChange={handleChangeProjectKey}
                />
                <Box display="flex" flexWrap="wrap" className={classes.projectsWrapper}>
                  {projects.map(project => (
                    <Box display="flex" alignItems="center" className={classes.project}>
                      <Typography variant="h5" className={classes.projectLabel}>
                        {formatMessage({ id: 'project_details.allocate_results.filtering_properties.project' })}:
                      </Typography>
                      <Typography variant="h5" className={classes.projectTitle}>
                        {project.title}
                      </Typography>
                      <CloseIcon />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className={classes.marginTopFour}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_properties.published',
                  })}
                </Typography>
                {projects.map((project, index) => (
                  <Grid container key={index}>
                    <Grid item className={classes.objectTypeProjectHeader}>
                      <Box display="flex" alignItems="center" className={classes.objectTypeProject}>
                        <Typography variant="h5" className={classes.objectTypeProjectLabel}>
                          {formatMessage({ id: 'project_details.allocate_results.filtering_properties.project' })}:
                        </Typography>
                        <Typography variant="h5" className={classes.objectTypeProjectTitle}>
                          {project.title}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.objectTypeProjectItems}>
                      <Grid container>
                        {project.options.map((option, optionIndex) => (
                          <Grid key={optionIndex} item xs={4}>
                            <CheckboxField name={`objectTypes[${index}].${optionIndex}`} label={option.title} />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Box>
              <Box className={classes.marginTopFour}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'project_details.allocate_results.filtering_properties.properties',
                    })}
                  </Typography>
                  <Typography variant="h5" className={classes.gray}>
                    {formatMessage({
                      id: 'project_details.allocate_results.filtering_properties.search_one_or_more_properties_below',
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
                    id: 'project_details.allocate_results.filtering_properties.search_properties_of_this_projects',
                  })}
                  className={classes.searchField}
                  onChange={handleChangeProjectKey}
                />
                <Box display="flex" flexWrap="wrap" className={classes.projectsWrapper}>
                  {properties.map(project => (
                    <Box display="flex" alignItems="center" className={classes.project}>
                      <Typography variant="h5" className={classes.projectLabel}>
                        {formatMessage({ id: 'project_details.allocate_results.filtering_properties.property' })}:
                      </Typography>
                      <Typography variant="h5" className={classes.projectTitle}>
                        {project.title}
                      </Typography>
                      <CloseIcon />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </AutosaveForm>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between" width="100%" onClick={onPreviousStep}>
        <Button variant="outlined" color="primary">
          {formatMessage({ id: 'project_details.allocate_results.settings.go_to_settings' })}
        </Button>
        <Button variant="outlined" color="primary" onClick={onNextStep}>
          {formatMessage({ id: 'project_details.allocate_results.settings.go_to_filtering_people' })}
        </Button>
      </Box>
    </>
  );
};
