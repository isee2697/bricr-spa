import React from 'react';

import { GenericField } from 'form/fields';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

export const Attention = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.attention.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
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
