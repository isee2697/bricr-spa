import React from 'react';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { DocumentFormProps } from '../DocumentListOfCaseCommon.types';

export function DocumentDiversForm({ initOpened }: DocumentFormProps) {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.specification.divers' })}
      isExpandable
      isInitExpanded={initOpened}
    >
      {editing => null}
    </FormSection>
  );
}
