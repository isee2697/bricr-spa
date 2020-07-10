import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

export const Phase = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.phase.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => <></>}
    </FormSection>
  );
};
