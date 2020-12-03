import React from 'react';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { DocumentFormProps } from '../DocumentListOfCaseCommon.types';

export function DocumentNotesForm({ initOpened }: DocumentFormProps) {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.specification.notes_label' })}
      isExpandable
      isInitExpanded={initOpened}
    >
      {editing => null}
    </FormSection>
  );
}
