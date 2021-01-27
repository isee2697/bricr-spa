import React from 'react';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { QuestionFormProps } from '../DocumentQuestionnaireFlow.types';
import { ListOptionsMenu } from 'ui/molecules';

export function QuestionNotesForm({ initOpened }: QuestionFormProps) {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      buttons={<ListOptionsMenu />}
      title={formatMessage({ id: 'pim_details.specification.notes_label' })}
      isExpandable
      isInitExpanded={initOpened}
    >
      {editing => null}
    </FormSection>
  );
}
