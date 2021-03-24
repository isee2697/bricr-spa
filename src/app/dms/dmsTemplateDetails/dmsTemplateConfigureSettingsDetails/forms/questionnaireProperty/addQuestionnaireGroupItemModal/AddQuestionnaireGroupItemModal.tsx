import arrayMutators from 'final-form-arrays';
import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { Grid, IconButton, Box } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

import { AddQuestionnaireGroupItemModalProps } from './AddQuestionnaireGroupItemModal.types';
import { questionTypes } from './dictionaries';

export const AddQuestionnaireGroupItemModal = ({
  isOpened,
  onClose,
  onSubmit,
}: AddQuestionnaireGroupItemModalProps) => {
  const { formatMessage } = useLocale();
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState<number[]>([]);

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'dms.templates.questionnaire.add_questionnaire_item.title' })}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'dms.templates.questionnaire.add_questionnaire_item.add_button' })}
    >
      <FormSubSectionHeader
        title={formatMessage({ id: 'dms.templates.questionnaire.type_of_question' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="questionType" options={questionTypes} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isAnswerRequired' })}
            name="isAnswerRequired"
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isSupplyExtraCommentField' })}
            name="isSupplyExtraCommentField"
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isShowOnSummaryPage' })}
            name="isShowOnSummaryPage"
          />
        </Grid>
      </Grid>
      <GenericField name="question" label={formatMessage({ id: 'dms.templates.questionnaire.question' })} />
      {multipleChoiceAnswers.map(multipleChoiceAnswer => (
        <GenericField
          name={`multipleChoiceAnswers[${multipleChoiceAnswer}]`}
          label={formatMessage(
            { id: 'dms.templates.questionnaire.multiple_choice_answer' },
            { index: multipleChoiceAnswer + 1 },
          )}
        />
      ))}
      <IconButton
        size="small"
        variant="circle"
        color="primary"
        onClick={() => setMultipleChoiceAnswers([...multipleChoiceAnswers, multipleChoiceAnswers.length])}
      >
        <AddIcon />
      </IconButton>
      <Box mb={2} />
      <FormSubSectionHeader
        title={formatMessage({ id: 'dms.templates.questionnaire.question_only_for_type_of_object' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="questionsOnlyForObjectType" options={questionTypes} />
    </FormModal>
  );
};
