import arrayMutators from 'final-form-arrays';
import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { Grid, IconButton } from 'ui/atoms';
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
      title={formatMessage({ id: 'settings.documents.questionnaire.add_questionnaire_item.title' })}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'settings.documents.questionnaire.add_questionnaire_item.add_button' })}
    >
      <FormSubSectionHeader
        title={formatMessage({ id: 'settings.documents.questionnaire.type_of_question' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="questionType" options={questionTypes} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'settings.documents.questionnaire.isAnswerRequired' })}
            name="isAnswerRequired"
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'settings.documents.questionnaire.isSupplyExtraCommentField' })}
            name="isSupplyExtraCommentField"
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'settings.documents.questionnaire.isShowOnSummaryPage' })}
            name="isShowOnSummaryPage"
          />
        </Grid>
      </Grid>
      <GenericField name="question" label={formatMessage({ id: 'settings.documents.questionnaire.question' })} />
      {multipleChoiceAnswers.map(multipleChoiceAnswer => (
        <GenericField
          name={`multipleChoiceAnswers[${multipleChoiceAnswer}]`}
          label={formatMessage(
            { id: 'settings.documents.questionnaire.multiple_choice_answer' },
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
      <FormSubSectionHeader
        title={formatMessage({ id: 'settings.documents.questionnaire.question_only_for_type_of_object' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="questionsOnlyForObjectType" options={questionTypes} />
    </FormModal>
  );
};
