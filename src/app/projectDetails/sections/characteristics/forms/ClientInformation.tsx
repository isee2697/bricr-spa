import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

export const ClientInformation = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.client_information.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => <></>}
    </FormSection>
  );
};
