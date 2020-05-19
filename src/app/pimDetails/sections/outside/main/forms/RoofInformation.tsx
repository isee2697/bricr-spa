import React from 'react';

import { Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';

export const RoofInformation = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.outside.main.roof_info' })} isExpandable>
      {isEditMode => (
        <>
          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="roofInformation.roofType"
              options={dictionaries.roofTypes}
            />
            <GenericField
              name="roofInformation.roofTypeNotes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_material' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="roofInformation.roofMaterialType"
              options={dictionaries.roofMaterialTypes}
            />
            <GenericField
              name="roofInformation.roofMaterialTypeNotes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_insulation' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="roofInformation.roofInsulation"
              options={dictionaries.roofInsulationTypes}
            />
            <GenericField
              name="roofInformation.roofInsulationNotes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
          <UploadImageGroupField max={3} disabled={!isEditMode} name="roofInformation.pictures" />
        </>
      )}
    </FormSection>
  );
};
