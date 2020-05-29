import React, { useState } from 'react';
import { Field } from 'react-final-form';

import { Box, Button, Checkbox, Collapse, FormControlLabel, Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { FormSubSection } from 'ui/molecules';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { HelpIcon, UnseeIcon, SeeIcon } from 'ui/atoms/icons';

import * as dictionaries from './dictionaries';
import { useStyles } from './Plot.styles';
import { PlotProps } from './Plot.types';

export const Plot = ({ index }: PlotProps) => {
  const [isToggled, setToggled] = useState(false);
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <FormSection title={formatMessage({ id: 'pim_details.cadastre.plot.information' }, { index })}>
        {editing => (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box pb={1.25}>
                <FormSubSection
                  noBorder
                  title={formatMessage({ id: 'pim_details.cadastre.plot.general_info_title' })}
                  subtitle={formatMessage({ id: 'pim_details.cadastre.plot.general_info_subtitle' })}
                />
              </Box>
              <Grid container spacing={1} className={classes.gridContainer}>
                <Grid item xs={6}>
                  <GenericField
                    size="medium"
                    label="pim_details.cadastre.plot.name_of_municipality"
                    placeholder="pim_details.cadastre.plot.name_of_municipality_placeholder"
                    name="configuration.name"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <GenericField
                      name="configuration.municipalCode"
                      label="pim_details.cadastre.plot.municipality_code"
                      placeholder="pim_details.cadastre.plot.municipality_code_placeholder"
                      size="medium"
                      disabled={!editing}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    size="medium"
                    label="pim_details.cadastre.plot.municipality_section_code"
                    placeholder="pim_details.cadastre.plot.municipality_section_code_placeholder"
                    name="configuration.sectionCode"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <GenericField
                      name="configuration.plot"
                      label="pim_details.cadastre.plot.cadastral_plot"
                      placeholder="pim_details.cadastre.plot.cadastral_plot_placeholder"
                      size="medium"
                      disabled={!editing}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    size="medium"
                    label="pim_details.cadastre.plot.index"
                    placeholder="pim_details.cadastre.plot.index_placeholder"
                    name="configuration.indexNumber"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <GenericField
                      name="configuration.surface"
                      label="pim_details.cadastre.plot.surface"
                      placeholder="pim_details.cadastre.plot.surface_placeholder"
                      size="medium"
                      disabled={!editing}
                      type="number"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <GenericField
                      name="configuration.share"
                      label="pim_details.cadastre.plot.share"
                      placeholder="pim_details.cadastre.plot.share_placeholder"
                      size="medium"
                      disabled={!editing}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.code_size_title' })}
                subtitle={formatMessage({ id: 'pim_details.cadastre.plot.code_size_subtitle' })}
              />
              <Box pt={2}>
                <RadioGroupField
                  spacing={1}
                  disabled={!editing}
                  xs={4}
                  lg={2}
                  name="configuration.codeSize"
                  options={dictionaries.size}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.ownership_title' })}
                subtitle={formatMessage({ id: 'pim_details.cadastre.plot.ownership_subtitle' })}
              />
              <Grid container spacing={3}>
                <Grid container item xs={3} spacing={1}>
                  <Box pt={2}>
                    <RadioGroupField
                      spacing={1}
                      disabled={!editing}
                      xs={12}
                      lg={12}
                      name="configuration.ownership.type"
                      options={dictionaries.ownershipType}
                    />
                  </Box>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={6}>
                  <Box pt={2}>
                    <Field name="configuration.ownership.type">
                      {({ input }) =>
                        !!input.value && (
                          <RadioGroupField
                            spacing={1}
                            disabled={!editing}
                            xs={4}
                            name="configuration.ownership.stressedInChargeOf"
                            options={dictionaries.ownershipValue}
                            format={value => (value ? value[0] : undefined)}
                            parse={(value: string) => (value ? [value] : [])}
                          />
                        )
                      }
                    </Field>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.leaseholder_title' })}
                subtitle={formatMessage({ id: 'pim_details.cadastre.plot.leaseholder_subtitle' })}
              />
              <Box pt={2}>
                <RadioGroupField
                  spacing={1}
                  disabled={!editing}
                  xs={4}
                  lg={2}
                  name="configuration.lease.leaseholder"
                  options={dictionaries.leaseholder}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.ground_info_title' })}
                subtitle={formatMessage({ id: 'pim_details.cadastre.plot.ground_info_subtitle' })}
              />
              <Box pt={2}>
                <RadioGroupField
                  spacing={1}
                  disabled={!editing}
                  xs={4}
                  lg={2}
                  name="configuration.lease.information"
                  options={dictionaries.groundInfo}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.ground_duration_title' })}
                subtitle={formatMessage({ id: 'pim_details.cadastre.plot.ground_duration_subtitle' })}
              />
              <Box pt={2}>
                <RadioGroupField
                  spacing={1}
                  disabled={!editing}
                  xs={4}
                  lg={2}
                  name="configuration.lease.duration"
                  options={dictionaries.groundDuration}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.cadastre.plot.ground_price_title' })}
                subtitle={
                  <span className={classes.infoButton}>
                    <Button
                      onClick={() => {}}
                      startIcon={<HelpIcon color="inherit" />}
                      variant="contained"
                      color="ghost"
                    >
                      {formatMessage({ id: 'pim_details.cadastre.plot.ground_price_subtitle' })}
                    </Button>
                  </span>
                }
              />
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <GenericField
                    size="medium"
                    label="pim_details.cadastre.plot.yearly_price"
                    placeholder="pim_details.cadastre.plot.yearly_price_placeholder"
                    name="configuration.lease.yearlyPrice"
                    disabled={!editing}
                    type="number"
                  />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <DatePickerField
                      size="medium"
                      format="yyyy"
                      name="configuration.lease.endDate"
                      label="pim_details.cadastre.plot.lease_end"
                      placeholder="pim_details.cadastre.plot.lease_end_placeholder"
                      disabled={!editing}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box paddingTop={2}>
                <FormSubSection
                  noBorder
                  title={formatMessage({ id: 'pim_details.cadastre.plot.bought_off_title' })}
                  subtitle={
                    <span className={classes.infoButton}>
                      <Button
                        onClick={() => setToggled(v => !v)}
                        startIcon={isToggled ? <UnseeIcon color="inherit" /> : <SeeIcon color="inherit" />}
                        variant="contained"
                        color="ghost"
                      >
                        {formatMessage({
                          id: `pim_details.cadastre.plot.bought_off_subtitle${isToggled ? '_hide' : ''}`,
                        })}
                      </Button>
                    </span>
                  }
                />
              </Box>
              <Collapse className={classes.collapse} in={isToggled} timeout="auto" unmountOnExit>
                <Grid container spacing={1} className={classes.gridContainer}>
                  <Grid item xs={5}>
                    <Field name="configuration.boughtOff.perpetually">
                      {({ input }) => (
                        <DatePickerField
                          size="medium"
                          name="configuration.boughtOff.date"
                          label="pim_details.cadastre.plot.bought_off"
                          placeholder="pim_details.cadastre.plot.bought_off_placeholder"
                          disabled={!editing || !!input.value}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={1} />
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <FormControlLabel
                        label={formatMessage({ id: 'pim_details.cadastre.plot.endless_lease' })}
                        className={classes.checkbox}
                        control={
                          <Field name="configuration.boughtOff.perpetually">
                            {({ input }) => (
                              <Checkbox
                                name="configuration.boughtOff.perpetually"
                                color="primary"
                                value={input.value}
                                checked={!!input.value}
                                onChange={input.onChange}
                                disabled={!editing}
                              />
                            )}
                          </Field>
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <GenericField
                      size="medium"
                      label="pim_details.cadastre.plot.notes"
                      placeholder="pim_details.cadastre.plot.notes_placeholder"
                      name="configuration.boughtOff.notes"
                      disabled={!editing}
                    />
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        )}
      </FormSection>
    </Grid>
  );
};
