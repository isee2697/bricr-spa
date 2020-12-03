import React from 'react';

import { useLocale } from 'hooks';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { QuestionMultiChoiceFormProps } from '../DocumentQuestionnaireFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Typography, Grid, RadioGroup, FormControlLabel, Radio } from 'ui/atoms';
import { GenericField } from 'form/fields';

export function QuestionMultiChoiceForm({
  initOpened,
  title,
  subtitle,
  question,
  isNote,
}: QuestionMultiChoiceFormProps) {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={title} isExpandable isInitExpanded={initOpened}>
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
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">{question.question}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroup>
                {question.choices?.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item.value}
                    name="choices"
                    control={<Radio color="primary" defaultChecked={item.selected} />}
                    label={item.title}
                    disabled={!editing}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
          {isNote && (
            <>
              <Box mt={1} />
              <GenericField
                disabled={!editing}
                name="note"
                defaultValue={question.note}
                label="pim_details.documents.note"
                size="medium"
              />
            </>
          )}
        </AutosaveForm>
      )}
    </FormSection>
  );
}
