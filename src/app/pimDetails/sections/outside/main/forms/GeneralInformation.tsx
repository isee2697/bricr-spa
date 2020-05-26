import React from 'react';

import { Box } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, CheckboxGroupField, UploadImageGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import * as dictionaries from '../dictionaries';

export const GeneralInformation = () => {
  const { formatMessage } = useLocale();

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
              <FormSubSection
                title={formatMessage({ id: 'pim_details.outside.main.quality_info' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <CheckboxGroupField
              disabled={!isEditMode}
              xs={2}
              lg={1}
              name="houseOutside.generalInformation.qualityInformation"
              options={dictionaries.qualities}
            />
          </Box>

          <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.pictures' })} />
          <UploadImageGroupField max={3} disabled={!isEditMode} name="houseOutside.generalInformation.pictures" />
        </>
      )}
    </FormSection>
  );
};
