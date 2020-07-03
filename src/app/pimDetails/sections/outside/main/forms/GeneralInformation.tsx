import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';

export const GeneralInformation = () => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.outside.main.general_info' })} isExpandable>
      {isEditMode => (
        <>
          <Box mb={4}>
            <GenericField
              name="houseOutside.generalInformation.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={4}>
            <Box mb={3}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'pim_details.outside.main.quality_info' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <Box pl={2}>
              <CheckboxGroupField
                disabled={!isEditMode}
                md={2}
                lg={1}
                name="houseOutside.generalInformation.qualityInformation"
                options={dictionaries.qualities}
              />
            </Box>
          </Box>

          <Box mb={2.25}>
            <FormSubSectionHeader
              title={formatMessage({ id: 'common.pictures' })}
              subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
            />
          </Box>
          <UploadImageGroupField
            entity={EntityWithFiles.OutsideGeneral}
            entityID={pimId}
            max={300}
            disabled={!isEditMode}
            name="houseOutside.generalInformation.images"
            removeEntity={EntityWithMultipleFiles.OutsideGeneral}
          />
        </>
      )}
    </FormSection>
  );
};
