import React, { useState } from 'react';

import { Box, Button, Checkbox, Collapse, FormControlLabel, Grid } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSection } from 'ui/molecules';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { HelpIcon, UnseeIcon, SeeIcon } from 'ui/atoms/icons';

import * as dictionaries from './dictionaries';
import { useStyles } from './Plot.styles';

export const Plot = () => {
  const [isToggled, setToggled] = useState(false);
  const [isEndlessLease, setEndlessLease] = useState(false);
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <AutosaveForm onSave={() => Promise.resolve({ error: false })} subscription={{}}>
      <Grid item xs={12}>
        <FormSection title={formatMessage({ id: 'pim_details.cadastre.plot.title' })} onAdd={() => {}}>
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
                      label={formatMessage({ id: 'pim_details.cadastre.plot.name_of_municipality' })}
                      placeholder={formatMessage({
                        id: 'pim_details.cadastre.plot.name_of_municipality_placeholder',
                      })}
                      name="municipal.name"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <GenericField
                        name="municipal.code"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.municipality_code' })}
                        placeholder={formatMessage({
                          id: 'pim_details.cadastre.plot.municipality_code_placeholder',
                        })}
                        size="medium"
                        disabled={!editing}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <GenericField
                      size="medium"
                      label={formatMessage({ id: 'pim_details.cadastre.plot.municipality_section_code' })}
                      placeholder={formatMessage({
                        id: 'pim_details.cadastre.plot.municipality_section_code_placeholder',
                      })}
                      name="section.code"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <GenericField
                        name="plot.code"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.cadastral_plot' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.cadastral_plot_placeholder' })}
                        size="medium"
                        disabled={!editing}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <GenericField
                      size="medium"
                      label={formatMessage({ id: 'pim_details.cadastre.plot.index' })}
                      placeholder={formatMessage({ id: 'pim_details.cadastre.plot.index_placeholder' })}
                      name="index.number"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <GenericField
                        name="surface"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.surface' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.surface_placeholder' })}
                        size="medium"
                        disabled={!editing}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <GenericField
                        name="share"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.share' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.share_placeholder' })}
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
                    name="size"
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
                        name="ownership.type"
                        options={dictionaries.ownershipType}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1} />
                  <Grid item xs={6}>
                    <Box pt={2}>
                      <RadioGroupField
                        spacing={1}
                        disabled={!editing}
                        xs={4}
                        name="ownership.value"
                        options={dictionaries.ownershipValue}
                      />
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
                    name="size"
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
                    name="ground.info"
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
                    name="ground.duration"
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
                      label={formatMessage({ id: 'pim_details.cadastre.plot.yearly_price' })}
                      placeholder={formatMessage({ id: 'pim_details.cadastre.plot.yearly_price_placeholder' })}
                      name="yearly.price"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={1} />
                  <Grid item xs={5}>
                    <Box display="flex" alignItems="flex-end" height="100%">
                      <DatePickerField
                        size="medium"
                        name="lease.end"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.lease_end' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.lease_end_placeholder' })}
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
                          {formatMessage({ id: 'pim_details.cadastre.plot.bought_off_subtitle' })}
                        </Button>
                      </span>
                    }
                  />
                </Box>
                <Collapse className={classes.collapse} in={isToggled} timeout="auto" unmountOnExit>
                  <Grid container spacing={1} className={classes.gridContainer}>
                    <Grid item xs={5}>
                      <DatePickerField
                        size="medium"
                        name="bought.off.date"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.bought_off' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.bought_off_placeholder' })}
                        disabled={!editing || isEndlessLease}
                      />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={6}>
                      <Box display="flex" alignItems="flex-end" height="100%">
                        <FormControlLabel
                          label={formatMessage({ id: 'pim_details.cadastre.plot.endless_lease' })}
                          className={classes.checkbox}
                          control={
                            <Checkbox
                              name="endless.lease"
                              color="primary"
                              value={isEndlessLease}
                              onChange={() => setEndlessLease(v => !v)}
                              disabled={!editing}
                            />
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <GenericField
                        size="medium"
                        label={formatMessage({ id: 'pim_details.cadastre.plot.notes' })}
                        placeholder={formatMessage({ id: 'pim_details.cadastre.plot.notes_placeholder' })}
                        name="notes"
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
    </AutosaveForm>
  );
};
