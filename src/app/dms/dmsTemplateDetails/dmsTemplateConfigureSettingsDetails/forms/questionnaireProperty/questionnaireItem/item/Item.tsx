import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { questionTypes } from '../../addQuestionnaireGroupItemModal/dictionaries';
import { Grid, Box } from 'ui/atoms';
import { QuestionnaireItemAnswers } from '../questionnaireItemAnswers/QuestionnaireItemAnswers';
import { useLocale } from 'hooks';
import { Options } from 'api/types';

import { QuestionnaireItemSubItemProps } from './Item.types';

export const QuestionnaireItemSubItem = ({ item: { options = [] }, isEditing }: QuestionnaireItemSubItemProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <FormSubSectionHeader
        title={formatMessage({ id: 'dms.templates.questionnaire.type_of_question' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="type" options={questionTypes} disabled={!isEditing} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isAnswerRequired' })}
            name="required"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isSupplyExtraCommentField' })}
            name="commentEnabled"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField
            label={formatMessage({ id: 'dms.templates.questionnaire.isShowOnSummaryPage' })}
            name="showOn"
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <GenericField
        name="name"
        label={formatMessage({ id: 'dms.templates.questionnaire.question' })}
        disabled={!isEditing}
      />
      <QuestionnaireItemAnswers answers={(options ?? []) as Options[]} />
      <Box mt={2} />
      <FormSubSectionHeader
        title={formatMessage({ id: 'dms.templates.questionnaire.question_only_for_type_of_object' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="questionsOnlyForObjectType" options={questionTypes} disabled={!isEditing} />
    </>
  );
};
