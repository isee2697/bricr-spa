import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Box } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { RadioGroupField } from 'form/fields';
import { EstateTypes, CharacteristicsGeneralTypes } from '../dictionaries';

export const EstateType = () => {
  const { formatMessage } = useLocale();
  const handleSave = async () => {
    return undefined;
  };

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={handleSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.residential.title' })}
        isExpandable
      >
        {isEditing => (
          <>
            <FormSubSectionHeader
              title={formatMessage({
                id: 'crm.details.personal_information_match_profile.estate_type.pick_type_of_property',
              })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <RadioGroupField
              name="estateType"
              options={EstateTypes.map(type => ({
                ...type,
                label: formatMessage({ id: `dictionaries.match_estate_type.${type.value}` }),
              }))}
              disabled={!isEditing}
            />
            <Box mt={8} />
            <FormSubSectionHeader
              title={formatMessage({
                id: 'crm.details.personal_information_match_profile.estate_type.general_characteristics',
              })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <RadioGroupField
              name="characteristics.general"
              options={CharacteristicsGeneralTypes.map(type => ({
                ...type,
                label: formatMessage({ id: `dictionaries.general_characteristics.${type.value}` }),
              }))}
              disabled={!isEditing}
            />
          </>
        )}
      </FormSection>
    </AutosaveForm>
  );
};