import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { ServicesMetersProps } from '../Services.types';
import { Box, Collapse } from 'ui/atoms';
import { LinkedPerson, SubSectionHeader } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { useStyles } from './Meters.styles';

export const Meters = ({
  type,
  title,
  isSidebarVisible,
  onOpenSidebar,
  pim,
  onSave,
  linkedPerson,
}: ServicesMetersProps) => {
  const { formatMessage } = useLocale();
  const [toggled, setToggled] = useState(true);
  const classes = useStyles();

  const sectionBadgeMock = 1;
  const sectionCountMock = 1;

  const isElectricity = type.toString() === 'ElectricityMeters';

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">
          {formatMessage({ id: `dictionaries.service.meter.${type.charAt(0).toUpperCase()}${type.slice(1)}` })}
        </Typography>
        <Box mb={4} className={classes.meter}>
          <AutosaveForm onSave={onSave} subscription={{}}>
            <Box mb={2}>
              <GenericField placeholder="pim_details.services.meter.description" name="services.description" />
            </Box>
            <FormSection
              title={formatMessage({ id: 'pim_details.services.meter.section_title' })}
              titleBadge={sectionBadgeMock}
              onAdd={() => {}}
              onOptionsClick={() => {}}
            >
              {editing => (
                <>
                  <SubSectionHeader
                    onOptionsClick={() => {}}
                    onToggleClick={() => setToggled(v => !v)}
                    toggled={toggled}
                    counter={sectionCountMock}
                  >
                    <Grid container alignItems="center">
                      {formatMessage({ id: 'pim_details.services.meter.section_subtitle' })}
                    </Grid>
                  </SubSectionHeader>
                  <Collapse in={toggled}>
                    <Grid container spacing={1}>
                      <Grid item xs={isElectricity ? 4 : 6}>
                        <GenericField
                          size="medium"
                          label={formatMessage({ id: 'pim_details.services.meter.value' })}
                          placeholder={formatMessage({
                            id: 'pim_details.services.meter.value_placeholder',
                          })}
                          name="municipal.name"
                          disabled={!editing}
                        />
                      </Grid>
                      <Grid item xs={isElectricity ? 4 : 6}>
                        <Box display="flex" alignItems="flex-end" height="100%">
                          <GenericField
                            name="municipal.code"
                            label={formatMessage({ id: 'pim_details.services.meter.reading_date' })}
                            placeholder={formatMessage({
                              id: 'pim_details.services.meter.id',
                            })}
                            size="medium"
                            disabled={!editing}
                          />
                        </Box>
                      </Grid>
                      {isElectricity && (
                        <Grid item xs={4}>
                          <GenericField
                            size="medium"
                            label={formatMessage({ id: 'pim_details.services.meter.id' })}
                            placeholder={formatMessage({
                              id: 'pim_details.services.meter.id_placeholder',
                            })}
                            name="section.code"
                            disabled={!editing}
                          />
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Box display="flex" alignItems="flex-end" height="100%">
                          <GenericField
                            name="plot.code"
                            label={formatMessage({ id: 'pim_details.services.meter.description' })}
                            placeholder={formatMessage({ id: 'pim_details.services.meter.description_placeholder' })}
                            size="medium"
                            disabled={!editing}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <label className={classNames(classes.label, editing && classes.activeLabel)}>
                          {formatMessage({ id: 'pim_details.services.meter.reading_by_label' })}
                        </label>
                        <LinkedPerson
                          name={linkedPerson.name}
                          avatar={linkedPerson.avatar}
                          office={linkedPerson.office}
                          company={linkedPerson.company}
                          phone={linkedPerson.phone}
                          email={linkedPerson.email}
                          onChangeClick={linkedPerson.onChangeClick}
                        />
                      </Grid>
                    </Grid>
                  </Collapse>
                </>
              )}
            </FormSection>
          </AutosaveForm>
        </Box>
      </Grid>
    </>
  );
};
