import React from 'react';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField, GenericField, RadioGroupField } from 'form/fields';
import * as dictionaries from '../dictionaries';

export const Foundation = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection isExpandable title={formatMessage({ id: 'pim_details.outside.main.foundation_title' })}>
      {isEditMode => (
        <>
          <Box mb={4}>
            <Box mb={3}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'pim_details.outside.main.select_foundation_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <Box pl={2}>
              <RadioGroupField
                disabled={!isEditMode}
                md={2}
                lg={2}
                name="houseOutside.foundation.type.type"
                options={dictionaries.foundations}
              />
            </Box>
          </Box>
          <Box mb={4}>
            <GenericField
              name="houseOutside.foundation.type.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>
          <Box mb={3}>
            <FormSubSectionHeader
              title={formatMessage({ id: 'pim_details.outside.main.select_foundation_material' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
            />
          </Box>
          <Box pl={2}>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="houseOutside.foundation.material.type"
              options={dictionaries.foundationMaterials}
            />
          </Box>
          <Box mb={4}>
            <GenericField
              name="houseOutside.foundation.material.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>
        </>
      )}
    </FormSection>
  );
};
