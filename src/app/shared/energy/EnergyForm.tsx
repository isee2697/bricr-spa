import React from 'react';

import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection, FormSubSection } from 'ui/organisms';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { EnergyFormProps } from 'app/shared/energy/EnergyForm.types';
import { EnergyCharasteristicType, EnergyType } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const energy = Object.keys(EnergyType).map(value => ({
  label: `dictionaries.specification.energy.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const energyType = Object.keys(EnergyCharasteristicType).map(value => ({
  label: `dictionaries.specification.energy_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const EnergyForm = ({
  namePrefix,
  classNames,
  isInitExpanded = false,
  isInitEditing = false,
}: EnergyFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <div className={classNames}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.energy.title' })}
        isExpandable
        isInitExpanded={isInitExpanded}
        isInitEditing={isInitEditing}
      >
        {editing => (
          <>
            <Box mb={4}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.specification.energy.energy_label' })}
                onOptionsClick={() => {}}
              >
                <Box mb={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.specification.label_title' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <RadioGroupField disabled={!editing} xs={2} name={`${namePrefix}.label`} options={energy} />
                <Box mt={3} mb={2}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'pim_details.specification.energy.general_information' })}
                  />
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name={`${namePrefix}.energyIndex`}
                      label="pim_details.specification.energy.energy_index"
                      placeholder="pim_details.specification.energy.energy_index_placeholder"
                      disabled={!editing}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerField
                      name={`${namePrefix}.endDateEnergyLabel`}
                      label="pim_details.specification.energy.end_date"
                      placeholder="pim_details.specification.energy.end_date_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name={`${namePrefix}.EPC`}
                      label="pim_details.specification.energy.epc"
                      placeholder="pim_details.specification.energy.epc_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                </Grid>
              </FormSubSection>
            </Box>
            <FormSubSection
              title={formatMessage({ id: 'pim_details.specification.energy.energy_characteristics' })}
              onOptionsClick={() => {}}
            >
              <Box mb={2}>
                <FormSubSectionHeader
                  noBorder
                  title={formatMessage({ id: 'pim_details.specification.energy.select_type' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                />
              </Box>
              <RadioGroupField
                disabled={!editing}
                xs={2}
                name={`${namePrefix}.characteristicType`}
                options={energyType}
              />
              <Box mt={2}>
                <GenericField
                  name={`${namePrefix}.notes`}
                  label="pim_details.specification.notes_label"
                  placeholder="pim_details.specification.notes_placeholder"
                  disabled={!editing}
                />
              </Box>
            </FormSubSection>
          </>
        )}
      </FormSection>
    </div>
  );
};
