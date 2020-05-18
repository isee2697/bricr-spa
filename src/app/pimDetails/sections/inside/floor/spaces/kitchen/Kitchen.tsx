import React, { useState } from 'react';

import { SubSectionHeader, FormSubSection } from 'ui/molecules';
import { Collapse, Grid, Box } from 'ui/atoms';
import { GenericField, RadioGroupField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';

import { useStyles } from './Kitchen.styles';
import { KitchenProps } from './Kitchen.types';
import * as dictionaries from './dictionaries';
import { AppliancesField } from './appliancesField/AppliancesField';

export const Kitchen = ({ isEditMode, index, className, spaceName }: KitchenProps) => {
  const [isToggled, setToggled] = useState(index === 0);
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const name = `configuration`;

  return (
    <Grid container className={className}>
      <Grid item xs={12}>
        <SubSectionHeader
          toggled={isToggled}
          onToggleClick={() => {
            setToggled(t => !t);
          }}
          onOptionsClick={() => {}}
        >
          {spaceName || formatMessage({ id: `dictionaries.space_type.Kitchen` })}
        </SubSectionHeader>
      </Grid>

      <Collapse style={{ width: '100%' }} in={isToggled} timeout="auto" unmountOnExit>
        <Grid item xs={12} className={classes.content}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <GenericField
                    size="medium"
                    label="pim_details.inside.year_of_construction"
                    placeholder="pim_details.inside.year_of_construction_placeholder"
                    name={`${name}.constructionYear`}
                    disabled={!isEditMode}
                    type="number"
                  />
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={6}>
                  <GenericField
                    name={`${name}.notes`}
                    label="pim_details.inside.notes"
                    placeholder="pim_details.inside.space_notes_placeholder"
                    size="medium"
                    disabled={!isEditMode}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.type_of_kitchen' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box paddingTop={2}>
                <RadioGroupField
                  disabled={!isEditMode}
                  xs={4}
                  lg={2}
                  name={`${name}.type`}
                  options={dictionaries.type}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.type_of_construction' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box paddingTop={2}>
                <RadioGroupField
                  disabled={!isEditMode}
                  xs={4}
                  lg={2}
                  name={`${name}.constructionType`}
                  options={dictionaries.construction}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.services' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box paddingTop={2} paddingLeft={2}>
                <CheckboxGroupField
                  disabled={!isEditMode}
                  xs={2}
                  lg={1}
                  name={`${name}.services`}
                  options={dictionaries.service}
                />
              </Box>
              <GenericField
                name={`${name}.servicesNotes`}
                label="pim_details.inside.notes"
                placeholder="pim_details.inside.notes_placeholder"
                size="medium"
                disabled={!isEditMode}
              />
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.built_in_appliances' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <AppliancesField disabled={!isEditMode} options={dictionaries.appliances} name={`${name}.appliances`} />
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.hob' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box paddingTop={2}>
                <RadioGroupField disabled={!isEditMode} sm={3} md={2} name={`${name}.hob`} options={dictionaries.hob} />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.shape' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box paddingTop={2}>
                <RadioGroupField
                  disabled={!isEditMode}
                  sm={3}
                  md={2}
                  name={`${name}.shape`}
                  options={dictionaries.shape}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.measurements' })}
                subtitle={formatMessage({ id: 'pim_details.inside.measurements_info' })}
              />
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.measurement.length`}
                    label="pim_details.inside.length"
                    type="number"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.measurement.height`}
                    label="pim_details.inside.height"
                    type="number"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.measurement.width`}
                    label="pim_details.inside.width"
                    type="number"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.measurement.surface`}
                    label="pim_details.inside.surface"
                    type="number"
                    size="medium"
                    InputProps={{
                      endAdornment: 'm2',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.measurement.volume`}
                    label="pim_details.inside.volume"
                    size="medium"
                    type="number"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.service_heating' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box paddingTop={2} paddingLeft={2}>
                <CheckboxGroupField
                  disabled={!isEditMode}
                  sm={3}
                  md={2}
                  name={`${name}.serviceHeating`}
                  options={dictionaries.heating}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
              <UploadImageGroupField max={3} disabled={!isEditMode} name={`${name}.images`} />
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};
