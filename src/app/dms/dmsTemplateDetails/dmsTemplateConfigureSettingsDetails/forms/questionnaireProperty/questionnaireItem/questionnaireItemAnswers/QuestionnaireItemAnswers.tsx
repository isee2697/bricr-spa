import React, { useState } from 'react';

import { GenericField } from 'form/fields';
import { IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { QuestionnaireItemAnswersProps } from './QuestionnaireItemAnswers.types';

export const QuestionnaireItemAnswers = ({ answers: propsAnswers }: QuestionnaireItemAnswersProps) => {
  const { formatMessage } = useLocale();
  const [answers, setAnswers] = useState(propsAnswers);

  return (
    <>
      {answers.map((answer, index) => (
        <GenericField
          name={`multipleChoiceAnswers[${index}]`}
          label={formatMessage({ id: 'dms.templates.questionnaire.multiple_choice_answer' }, { index: index + 1 })}
        />
      ))}
      <IconButton size="small" variant="circle" color="primary" onClick={() => setAnswers([...answers, ''])}>
        <AddIcon />
      </IconButton>
    </>
  );
};
