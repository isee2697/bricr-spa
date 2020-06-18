import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';
import { EntityWithFiles } from 'api/types';

export const RoofInformation = () => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.outside.main.roof_info' })} isExpandable>
      {isEditMode => (
        <>
          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!isEditMode}
              xs={2}
              name="houseOutside.roofInformation.type.name"
              options={dictionaries.roofTypes}
            />
            <GenericField
              name="houseOutside.roofInformation.type.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_material' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!isEditMode}
              xs={2}
              name="houseOutside.roofInformation.material.name"
              options={dictionaries.roofMaterials}
            />
            <GenericField
              name="houseOutside.roofInformation.material.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.select_roof_insulation' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!isEditMode}
              xs={2}
              name="houseOutside.roofInformation.insulation.name"
              options={dictionaries.roofInsulations}
            />
            <GenericField
              name="houseOutside.roofInformation.insulation.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
          <UploadImageGroupField
            entity={EntityWithFiles.RoofInformation}
            entityID={pimId}
            max={3}
            disabled={!isEditMode}
            name="houseOutside.roofInformation.images"
          />
        </>
      )}
    </FormSection>
  );
};
