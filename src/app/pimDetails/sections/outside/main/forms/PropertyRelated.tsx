import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';

export const PropertyRelated = () => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.outside.main.property_related' })} isExpandable>
      {isEditMode => (
        <>
          <Box mb={4}>
            <Box mb={3}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'pim_details.outside.main.pick_items' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <Box pl={2}>
              <CheckboxGroupField
                disabled={!isEditMode}
                xs={2}
                lg={1}
                name="houseOutside.propertyRelated.items"
                options={dictionaries.relatedItems}
              />
            </Box>
            <GenericField
              name="houseOutside.propertyRelated.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <Box mb={2.25}>
            <FormSubSectionHeader
              title={formatMessage({ id: 'common.pictures' })}
              subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
            />
          </Box>
          <UploadImageGroupField
            entity={EntityWithFiles.OutsidePropertyRelated}
            entityID={pimId}
            max={300}
            disabled={!isEditMode}
            name="houseOutside.propertyRelated.images"
            removeEntity={EntityWithMultipleFiles.OutsidePropertyRelated}
          />
        </>
      )}
    </FormSection>
  );
};
