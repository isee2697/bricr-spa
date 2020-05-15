import React, { useState } from 'react';

import { SubSectionHeader, FormSubSection } from 'ui/molecules';
import { Collapse, Grid, Box } from 'ui/atoms';
import { DatePickerField, GenericField, RadioGroupField, CheckboxGroupField } from 'form/fields';
import { useLocale } from 'hooks';

import { useStyles } from './Kitchen.styles';
import { ApplianceField } from './applianceField/ApplianceField';
import { KitchenProps } from './Kitchen.types';
import * as dictionaries from './dictionaries';

export const Kitchen = ({ isEditMode, index, className }: KitchenProps) => {
  const [isToggled, setToggled] = useState(index === 0);
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const name = `space[${index}]`;

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
          {formatMessage({ id: `dictionaries.space_type.Kitchen` })}
        </SubSectionHeader>
      </Grid>

      <Collapse style={{ width: '100%' }} in={isToggled} timeout="auto" unmountOnExit>
        <Grid item xs={12} className={classes.content}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <DatePickerField
                    size="medium"
                    label="pim_details.inside.year_of_construction"
                    placeholder="pim_details.inside.year_of_construction_placeholder"
                    name={`${name}.field`}
                    disabled={!isEditMode}
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
              <Box paddingTop={2} paddingLeft={2}>
                <CheckboxGroupField
                  disabled={!isEditMode}
                  xs={2}
                  lg={1}
                  name={`${name}.construction`}
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
              <Box paddingTop={2}>
                <Grid container spacing={4}>
                  {dictionaries.appliances.map(appliance => (
                    <ApplianceField
                      name={`${name}.appliance.${appliance.value}`}
                      label={appliance.label}
                      icon={appliance.icon}
                      key={appliance.value}
                      disabled={!isEditMode}
                    />
                  ))}
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.inside.hob' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box paddingTop={2}>
                <RadioGroupField disabled={!isEditMode} xs={2} lg={1} name={`${name}.hob`} options={dictionaries.hob} />
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
                  xs={2}
                  lg={1}
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
                    name={`${name}.length`}
                    label="pim_details.inside.length"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.height`}
                    label="pim_details.inside.height"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.width`}
                    label="pim_details.inside.width"
                    size="medium"
                    InputProps={{
                      endAdornment: '[m]',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.surface`}
                    label="pim_details.inside.surface"
                    size="medium"
                    InputProps={{
                      endAdornment: 'm2',
                    }}
                    disabled={!isEditMode}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${name}.volume`}
                    label="pim_details.inside.volume"
                    size="medium"
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
                  xs={2}
                  lg={1}
                  name={`${name}.heating`}
                  options={dictionaries.heating}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
              Add Lord's component here :)
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};
