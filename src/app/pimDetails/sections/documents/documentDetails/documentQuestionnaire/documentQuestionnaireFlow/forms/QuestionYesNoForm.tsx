import React from 'react';

import { useLocale } from 'hooks';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { QuestionYesNoFormProps } from '../DocumentQuestionnaireFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Typography, RadioGroup, FormControlLabel, Radio } from 'ui/atoms';
import { YesNoType } from '../../DocumentQuestionnaire.types';
import { GenericField } from 'form/fields';
import { useStyles } from '../DocumentQuestionnaireFlow.styles';

export function QuestionYesNoForm({ initOpened, title, subtitle, question, isNote }: QuestionYesNoFormProps) {
  const { formatMessage } = useLocale();
  const classes = useStyles();

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
          <Box display="flex" alignItems="flex-start">
            <Typography variant="h5">{question.question}</Typography>
            <Box ml={4} />
            <Box display="flex" className={classes.yesNoRadioWrapper}>
              <RadioGroup row>
                <FormControlLabel
                  value={YesNoType.Yes}
                  name="result"
                  control={<Radio color="primary" defaultChecked={question.result === YesNoType.Yes} />}
                  label={formatMessage({ id: 'common.yes' })}
                  disabled={!editing}
                />
                <FormControlLabel
                  value={YesNoType.No}
                  name="result"
                  control={<Radio color="primary" defaultChecked={question.result === YesNoType.Yes} />}
                  label={formatMessage({ id: 'common.no' })}
                  disabled={!editing}
                />
              </RadioGroup>
            </Box>
          </Box>
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
