import React from 'react';

import { useLocale } from 'hooks';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { QuestionNoteOnlyFormProps } from '../DocumentQuestionnaireFlow.types';
import { FormSubSectionHeader, ListOptionsMenu } from 'ui/molecules';
import { Box, Typography } from 'ui/atoms';
import { GenericField } from 'form/fields';

export function QuestionNoteOnlyForm({ initOpened, title, subtitle, question }: QuestionNoteOnlyFormProps) {
  const { formatMessage } = useLocale();

  return (
    <FormSection buttons={<ListOptionsMenu />} title={title} isExpandable isInitExpanded={initOpened}>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          {subtitle && (
            <FormSubSectionHeader
              title={subtitle}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
          )}
          <Box mt={3.5} />
          <Typography variant="h5">{question.question}</Typography>
          <Box mt={3.5} />
          <GenericField
            disabled={!editing}
            name="note"
            defaultValue={question.note}
            label="pim_details.documents.note"
            size="medium"
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
}
