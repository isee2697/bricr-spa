import React from 'react';

import {
  QuestionOnlyForObjectType,
  QuestionType,
} from 'app/settings/sections/documents/questionnaireProperty/questionnaireItem/QuestionnaireItem.types';
import { SquareIcon } from 'ui/atoms/icons';

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
