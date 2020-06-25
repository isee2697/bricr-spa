import React from 'react';

import { Grid, Box, Typography } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader, InfoSection } from 'ui/molecules';
import { FormSection, FormSubSection, AutosaveForm } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { IdentificationNumberType } from 'api/types';

import { IdentificationNumberFormProps } from './IdentificationNumberForm.types';

const identificationNumberTypes = Object.keys(IdentificationNumberType).map(type => ({
  label: `dictionaries.general_identification_number_type.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));

export const IdentificationNumberForm = ({ items, onAdd, onSave }: IdentificationNumberFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.general.identification_number.title' })}
      titleBadge={items.length || undefined}
      onAdd={onAdd}
      isExpandable
      isInitExpanded={false}
    >
      {editing => (
        <>
          {!items.length && (
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'pim_details.general.identification_number.empty_description_1' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'pim_details.general.identification_number.empty_description_2' })}
              </Typography>
            </InfoSection>
          )}

          {!!items.length &&
            items.map((item, index) => (
              <AutosaveForm key={item.id} initialValues={item} onSave={onSave} subscription={{}}>
                <FormSubSection
                  title={
                    (item.type
                      ? formatMessage({ id: `dictionaries.general_identification_number_type.${item.type}` })
                      : '') +
                    ` (${item.name ??
                      formatMessage({
                        id: 'pim_details.general.identification_number.identification_numbers_name_placeholder',
                      })})`
                  }
                  counter={index + 1}
                  onOptionsClick={() => {}}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <GenericField
                        name="name"
                        label="pim_details.general.identification_number.identification_numbers_name"
                        margin="none"
                        placeholder="pim_details.general.identification_number.identification_numbers_name_placeholder"
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <GenericField
                        name="number"
                        label="pim_details.general.identification_number.identification_number"
                        margin="none"
                        placeholder="pim_details.general.identification_number.identification_number_placeholder"
                        disabled={!editing}
                      />
                    </Grid>
                  </Grid>
                  <Box mb={3} />

                  <FormSubSectionHeader
                    title={formatMessage({
                      id: 'pim_details.general.identification_number.type_of_identification_number',
                    })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                  <Box mt={2} mb={3}>
                    <RadioGroupField xs={2} options={identificationNumberTypes} name="type" disabled={!editing} />
                  </Box>
                </FormSubSection>
              </AutosaveForm>
            ))}
        </>
      )}
    </FormSection>
  );
};
