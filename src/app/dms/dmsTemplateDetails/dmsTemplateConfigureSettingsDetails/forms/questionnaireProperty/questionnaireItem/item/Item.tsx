import React from 'react';

import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { questionTypes } from '../../addQuestionnaireGroupItemModal/dictionaries';
import { Grid } from 'ui/atoms';
import { QuestionnaireItemAnswers } from '../questionnaireItemAnswers/QuestionnaireItemAnswers';
import { useLocale } from 'hooks';
import { QuestionnaireGroupItem } from '../QuestionnaireItem.types';

import { QuestionnaireItemSubItemProps } from './Item.types';

export const QuestionnaireItemSubItem = ({
  index,
  item: {
    questionType,
    question,
    isAnswerRequired,
    isShowOnSummaryPage,
    isSupplyExtraCommentField,
    multipleChoiceAnswers = [],
    questionsOnlyForObjectType,
  },
  onSave,
}: QuestionnaireItemSubItemProps) => {
  const { formatMessage } = useLocale();
  const handleSave = async (body: QuestionnaireGroupItem) => {
    onSave(body);

    return undefined;
  };

  const initialValues = {
    questionType,
    question,
    isAnswerRequired,
    isShowOnSummaryPage,
    isSupplyExtraCommentField,
    multipleChoiceAnswers,
    questionsOnlyForObjectType,
  };

  return (
    <AutosaveForm onSave={handleSave} initialValues={{ ...initialValues }}>
      <FormSubSection title={question} onOptionsClick={() => {}} counter={index + 1}>
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
        <QuestionnaireItemAnswers answers={multipleChoiceAnswers} />
        <FormSubSectionHeader
          title={formatMessage({ id: 'dms.templates.questionnaire.question_only_for_type_of_object' })}
          subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
          noBorder
        />
        <RadioGroupField xs={2} name="questionsOnlyForObjectType" options={questionTypes} />
      </FormSubSection>
    </AutosaveForm>
  );
};
