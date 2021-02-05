import React, { useState } from 'react';

import { useModalDispatch } from 'hooks';

import { Questionnaire } from './Questionnaire';
import { QuestionnaireContainerProps, QuestionnaireGroup } from './Questionnaire.types';
import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export const QuestionnaireContainer = ({ template }: QuestionnaireContainerProps) => {
  const [questionnaireGroups, setQuestionnaireGroups] = useState<QuestionnaireGroup[]>([]);
  const { close } = useModalDispatch();

  const handleAddQuestionnaireGroup = async (body: AddQuestionnaireGroupBody) => {
    setQuestionnaireGroups([
      ...questionnaireGroups,
      {
        id: `${questionnaireGroups.length}`,
        name: body.name,
      },
    ]);

    close('add-questionnaire-group');

    return undefined;
  };

  return (
    <Questionnaire
      template={template}
      groups={questionnaireGroups}
      onAddQuestionnaireGroup={handleAddQuestionnaireGroup}
    />
  );
};
