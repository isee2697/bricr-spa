import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';
import { EntityWithFiles } from 'api/types';

export const PropertyRelated = () => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.outside.main.property_related' })} isExpandable>
      {isEditMode => (
        <>
          <Box mb={4}>
            <Box mb={3}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.pick_items' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="houseOutside.propertyRelated.items"
              options={dictionaries.relatedItems}
            />
            <GenericField
              name="houseOutside.propertyRelated.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
          <UploadImageGroupField
            entity={EntityWithFiles.OutsidePropertyRelated}
            entityID={pimId}
            max={3}
            disabled={!isEditMode}
            name="houseOutside.propertyRelated.images"
          />
        </>
      )}
    </FormSection>
  );
};
