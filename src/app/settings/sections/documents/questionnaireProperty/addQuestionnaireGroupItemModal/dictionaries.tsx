import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { QuestionOnlyForObjectType, QuestionType } from '../questionnaireItem/QuestionnaireItem.types';

export const questionTypes = Object.keys(QuestionType).map(key => ({
  value: key,
  label: `dictionaries.question_type.${key}`,
  icon: <SquareIcon color="inherit" />,
}));

export const questionsForObjectType = Object.keys(QuestionOnlyForObjectType).map(key => ({
  value: key,
  label: `dictionaries.question_only_for_type_of_object.${key}`,
  icon: <SquareIcon color="inherit" />,
}));
