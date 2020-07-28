import React from 'react';

import { CheckboxField, RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { TypeOfObjectType } from 'api/types';
import { FormSection } from 'ui/organisms';
import { SquareIcon } from 'ui/atoms/icons';

import { FormProps } from './Forms.types';

export const ObjectType = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.project_marketing.title' })}
      isEditable
      isExpandable
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <>
          <Box mb={4}>
            <Box mb={2}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'project_details.characteristics.object_type.title' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!inEditMode}
              xs={2}
              name="type"
              options={Object.values(TypeOfObjectType).map(type => ({
                label: `dictionaries.object_type.${type}`,
                icon: <SquareIcon color="inherit" />,
                value: type,
              }))}
            />
          </Box>
          <Box>
            <CheckboxField
              name="automaticallySetObjectTypes"
              disabled={!inEditMode}
              label={formatMessage({ id: 'project_details.characteristics.object_type.set_automatically' })}
            />
          </Box>
        </>
      )}
    </FormSection>
  );
};
