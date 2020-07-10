import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

export const AccountManagers = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.account_managers.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => <></>}
    </FormSection>
  );
};
