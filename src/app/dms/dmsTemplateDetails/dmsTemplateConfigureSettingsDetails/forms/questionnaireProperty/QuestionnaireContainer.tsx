import React from 'react';
import { useParams } from 'react-router';

import { useModalDispatch } from 'hooks';
import {
  ListQuestionaireGroupsDocument,
  useCreateQuestionaireGroupMutation,
  useListQuestionaireGroupsQuery,
} from 'api/types';

import { Questionnaire } from './Questionnaire';
import { QuestionnaireContainerProps } from './Questionnaire.types';
import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export const QuestionnaireContainer = ({ template }: QuestionnaireContainerProps) => {
  const [createQuestionaireGroup] = useCreateQuestionaireGroupMutation();
  const { close } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const { data, loading } = useListQuestionaireGroupsQuery({
    variables: {
      templateId: id,
    },
    fetchPolicy: 'network-only',
  });

  const handleAddQuestionnaireGroup = async (body: AddQuestionnaireGroupBody) => {
    try {
      await createQuestionaireGroup({
        variables: {
          input: {
            templateId: id,
            groupName: body.name,
          },
        },
        refetchQueries: [
          {
            query: ListQuestionaireGroupsDocument,
            variables: {
              templateId: id,
            },
          },
        ],
      });

      close('add-questionnaire-group');
    } catch (error) {
      close('add-questionnaire-group');

      return { error: true };
    }

    return undefined;
  };

  return (
    <Questionnaire
      isLoading={loading}
      template={template}
      groups={data?.listQuestionaireGroups || []}
      onAddQuestionnaireGroup={handleAddQuestionnaireGroup}
    />
  );
};
