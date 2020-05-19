import React from 'react';

import { Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';

export const PropertyRelated = () => {
  const { formatMessage } = useLocale();

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
              name="propertyRelated.relatedItems"
              options={dictionaries.relatedItems}
            />
            <GenericField
              name="propertyRelated.notes"
              label="common.notes"
              placeholder="pim_details.outside.main.notes_placeholder"
              disabled={!isEditMode}
            />
          </Box>

          <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
          <UploadImageGroupField max={3} disabled={!isEditMode} name="propertyRelated.pictures" />
        </>
      )}
    </FormSection>
  );
};
