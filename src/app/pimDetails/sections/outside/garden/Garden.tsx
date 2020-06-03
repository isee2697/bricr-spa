import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import {
  GenericField,
  CardField,
  CheckboxField,
  CheckboxGroupField,
  UploadImageGroupField,
  RadioGroupField,
} from 'form/fields';
import { Grid, Typography, Box } from 'ui/atoms';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSection } from 'ui/molecules';

import * as dictionaries from './dictionaries';
import { GardenProps } from './Garden.types';
import { useStyles } from './Garden.styles';

export const Garden = ({ feature, onSave }: GardenProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <AutosaveForm initialValues={feature} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
        <Grid item xs={12} className={classes.form}>
          <Grid container alignItems="center">
            <Typography className={classes.title} variant="h1">
              {formatMessage({ id: 'pim_details.outside.garden.title' })}
            </Typography>{' '}
            <CheckboxField name="configuration.mainGarden" label="pim_details.outside.garden.main_garden" />
            <Grid item className={classes.buttons}>
              <WarningIcon />
              <MenuIcon className={classes.iconSpacing} />
            </Grid>
            <Grid xs={12} item>
              <GenericField
                className={classes.description}
                placeholder="pim_details.outside.garden.description_placeholder"
                name="description"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <FormSection title={formatMessage({ id: 'pim_details.outside.garden.information' })}>
            {isEditMode => (
              <>
                <Box mb={4}>
                  <Box mb={3}>
                    <FormSubSection
                      title={formatMessage({ id: 'pim_details.outside.garden.type' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                  </Box>
                  <Grid item md={9} lg={7}>
                    <RadioGroupField
                      xs={3}
                      lg={2}
                      disabled={!isEditMode}
                      name="configuration.type"
                      options={dictionaries.gardenTypes}
                    />
                  </Grid>
                  <GenericField
                    name="configuration.notes"
                    label="common.notes"
                    placeholder="pim_details.outside.garden.notes_placeholder"
                    disabled={!isEditMode}
                  />
                </Box>

                <Box mb={4}>
                  <Box mb={3}>
                    <FormSubSection
                      title={formatMessage({ id: 'pim_details.outside.garden.quality_of_garden' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                  </Box>
                  <Grid item md={9} lg={7}>
                    <RadioGroupField
                      xs={3}
                      lg={2}
                      disabled={!isEditMode}
                      name="configuration.quality"
                      options={dictionaries.gardenQualities}
                    />
                  </Grid>
                </Box>

                <Box mb={4}>
                  <Box mb={3}>
                    <FormSubSection
                      title={formatMessage({ id: 'pim_details.outside.garden.location' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                    />
                  </Box>
                  <CheckboxGroupField
                    disabled={!isEditMode}
                    xs={2}
                    lg={1}
                    name="configuration.location"
                    options={dictionaries.locations}
                  />
                </Box>

                <Box mb={4}>
                  <Box mb={3}>
                    <FormSubSection
                      title={formatMessage({ id: 'pim_details.outside.garden.shape_of_garden' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                  </Box>
                  <Grid item md={9} lg={7}>
                    <RadioGroupField
                      xs={3}
                      lg={2}
                      disabled={!isEditMode}
                      name="configuration.shape"
                      options={dictionaries.gardenShapes}
                    />
                  </Grid>
                </Box>

                <Box mb={3}>
                  <FormSubSection
                    title={formatMessage({ id: 'pim_details.outside.garden.surface' })}
                    subtitle={formatMessage({ id: 'pim_details.outside.garden.dimensions' })}
                  />

                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <GenericField
                        name="configuration.dimensions.height"
                        label="pim_details.outside.garden.height"
                        type="number"
                        size="medium"
                        InputProps={{
                          endAdornment: '[m]',
                        }}
                        disabled={!isEditMode}
                      />
                      <GenericField
                        name="configuration.dimensions.length"
                        label="pim_details.outside.garden.length"
                        type="number"
                        size="medium"
                        InputProps={{
                          endAdornment: `[m]`,
                        }}
                        disabled={!isEditMode}
                      />
                    </Grid>
                    <Grid item md={2}></Grid>
                    <Grid item xs={12} md={6}>
                      <CardField
                        name="configuration.surface"
                        label="pim_details.outside.garden.surface"
                        endAdornment="㎡"
                        type="number"
                        disabled={!isEditMode}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={3}>
                  <FormSubSection
                    title={formatMessage({ id: 'common.pictures' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
                  />
                </Box>
                <UploadImageGroupField name="outside.images" disabled={!isEditMode} />
              </>
            )}
          </FormSection>
        </Grid>
      </AutosaveForm>
    </>
  );
};