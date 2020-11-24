import React, { useState } from 'react';

import { useModalDispatch } from 'hooks';

import { Questionnaire } from './Questionnaire';
import { QuestionnaireGroup } from './Questionnaire.types';
import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export const QuestionnaireContainer = () => {
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

  return <Questionnaire groups={questionnaireGroups} onAddQuestionnaireGroup={handleAddQuestionnaireGroup} />;
};
