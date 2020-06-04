import React, { useState } from 'react';

import { Box, Collapse, Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../Specification.styles';
import { FormSubSection, SubSectionHeader } from 'ui/molecules';
import * as dictionaries from '../dictionaries';

export const EnergyForm = () => {
  const { formatMessage } = useLocale();
  const [toggled, setToggled] = useState({
    energy: true,
    energyCharacteristic: true,
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection title={formatMessage({ id: 'pim_details.specification.energy.title' })} isExpandable isInitExpanded>
        {editing => (
          <>
            <Box mb={4}>
              <SubSectionHeader
                onOptionsClick={() => {}}
                onToggleClick={() =>
                  setToggled(v => {
                    return { ...v, energy: !v.energy };
                  })
                }
                toggled={toggled.energy}
              >
                {formatMessage({ id: 'pim_details.specification.energy.energy_label' })}
              </SubSectionHeader>
              <Collapse in={toggled.energy}>
                <Box mb={2}>
                  <FormSubSection
                    noBorder
                    title={formatMessage({ id: 'pim_details.specification.label_title' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <RadioGroupField disabled={!editing} xs={2} name="energy.label" options={dictionaries.energy} />
                <Box mt={3} mb={2}>
                  <FormSubSection
                    title={formatMessage({ id: 'pim_details.specification.energy.general_information' })}
                  />
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="energy.energy_index"
                      label="pim_details.specification.energy.energy_index"
                      placeholder="pim_details.specification.energy.energy_index_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="energy.end_date"
                      label="pim_details.specification.energy.end_date"
                      placeholder="pim_details.specification.energy.end_date_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="energy.epc"
                      label="pim_details.specification.energy.epc"
                      placeholder="pim_details.specification.energy.epc_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                </Grid>
              </Collapse>
            </Box>
            <SubSectionHeader
              onOptionsClick={() => {}}
              onToggleClick={() =>
                setToggled(v => {
                  return { ...v, energyCharacteristic: !v.energyCharacteristic };
                })
              }
              toggled={toggled.energyCharacteristic}
            >
              {formatMessage({ id: 'pim_details.specification.energy.energy_characteristics' })}
            </SubSectionHeader>
            <Collapse in={toggled.energyCharacteristic}>
              <Box mb={2}>
                <FormSubSection
                  noBorder
                  title={formatMessage({ id: 'pim_details.specification.energy.select_type' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                />
              </Box>
              <RadioGroupField disabled={!editing} xs={2} name="energy.type" options={dictionaries.energyType} />
              <Box mt={2}>
                <GenericField
                  name="energy.energy_index"
                  label="pim_details.specification.notes_label"
                  placeholder="pim_details.specification.notes_placeholder"
                  disabled={!editing}
                />
              </Box>
            </Collapse>
          </>
        )}
      </FormSection>
    </div>
  );
};
