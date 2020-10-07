import React from 'react';
import { GenericField } from 'form/fields';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

import { FormProps } from './Forms.types';

export const Attention = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.attention.title' })}
      isEditable
      isExpandable
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <GenericField
          name="attentionNote"
          placeholder="project_details.characteristics.attention.placeholder"
          label="project_details.characteristics.attention.label"
          disabled={!inEditMode}
        />
      )}
    </FormSection>
  );
};
